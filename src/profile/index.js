import React from 'react';
import { useQuery, useMutation, useQueryCache } from 'react-query';
import { getFollowing, getFollowers, unfollowUser } from '../actions/dataAccess/following';
import { getPosts, addNewPost, removePost } from '../actions'
import ProfileUser from './profileUser';
import FollowingCount from './followingFollowers/followingCount';
import FollowersCount from './followingFollowers/followersCount';
import Posts from './posts';
import Box from '@material-ui/core/Box';

const ProfileContainer = ({ user }) => {
    const cache = useQueryCache();

    const { 
        isLoading: isFollowingLoading, 
        data: following 
    } = useQuery('following', () => getFollowing(user.displayName))

    const { 
        isLoading: isFollowersLoading,  
        data: followers, 
    } = useQuery('followers', () => getFollowers(user.displayName))

    const { 
        isLoading: isPostsLoading, 
        data: posts, 
    } = useQuery('posts', () => getPosts(user))

    const [unfollowUserMutation] = useMutation(unfollowUser, {
        onSuccess: () => {
            cache.invalidateQueries('following')
        },
    });


    const handleOnUnfollow = (id) => {
        unfollowUserMutation(id)
    }

    const [savePost] = useMutation(addNewPost, {
        onSuccess: () => {
            cache.invalidateQueries('posts')
        }
    });

    const [deletePost] = useMutation(removePost, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('posts')
        }
    });

    const handleSavePost = (file, caption, user) => {
        savePost({
            file,
            caption,
            user
        });
    }

    const handleOnDeletePost = (id) => deletePost(id)

    if (isFollowingLoading || isPostsLoading || isFollowersLoading) {
        return <span>Loading...</span>
    }

    const followersNumber = followers.length
    const followingNumber = following.length

    return (
        <>
            <Box display='flex' flexDirection='row'>
                <ProfileUser user={user} />
                <FollowingCount 
                    followingNumber={followingNumber} 
                    handleOnUnfollow={handleOnUnfollow}
                    followingResult={following} 
                    user={user} 
                />
                <FollowersCount 
                    followersNumber={followersNumber}
                    user={user} 
                    followers={followers} 
                />
            </Box>
            <Posts 
                posts={posts} 
                savePost={handleSavePost} 
                user={user} 
                handleOnDeletePost={handleOnDeletePost} 
            />
        </>
    )
}

export default ProfileContainer;
