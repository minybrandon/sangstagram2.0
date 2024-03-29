import firestoreDAL from './firestoreDAL';

const { search, add, remove } = firestoreDAL('following');

const followUser = async ({ user, following }) => {
    const {
        displayName,
        email,
        photoURL,
    } = user
    await add({
        user: {
            displayName,
            email,
            photoURL
        },
        following
    });
}

const unfollowUser = async (id) => {
    await remove(id);
}

const getFollowing = async (displayName) => {
    return await search('user.displayName', '==', displayName)
}

const getFollowers = async (displayName) => {
    return await search('following.displayName', '==', displayName)
}
 
export {
    followUser, 
    unfollowUser,
    getFollowers,
    getFollowing
};