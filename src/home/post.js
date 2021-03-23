import React from 'react';
import Photo from './photo';
import PostHeader from './postHeader/postHeader';
import DateCreatedAndLikes from './dateCreatedAndLikes';
import Caption from './caption';
import Comments from './comments/comments';
import CommentField from './comments/commentfield';

const Post = ({ post, saveComment, removeComment, getFollowingFollowersNumbers }) => {
    const {
        caption,
        createdAt,
        createdBy,
        userAvatar,
        photoUrl,
        comments,
        numberOfLikes = [],
        likedAlready = false,
        likeClicked
    } = post

    return(
        <>
            <PostHeader 
                avatarUrl={userAvatar} 
                username={createdBy} 
                likedAlready={likedAlready}
                likeClicked={likeClicked}
                getFollowingFollowersNumbers={() => getFollowingFollowersNumbers(createdBy)}
            />
            <Photo photoUrl={photoUrl}/>
            <DateCreatedAndLikes dateCreated={createdAt} numberOfLikes={numberOfLikes}/>
            <Caption caption={caption}/>
            <Comments comments={comments} userAvatar={userAvatar} createdAt={createdAt} createdBy={createdBy} />
            <CommentField 
                saveComment={(comment) => saveComment(post, comment)} 
            />
        </>
    )
}

export default Post;