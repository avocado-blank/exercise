// promise 

const login = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Login is finished");
        }, 3000)
    })
}

const fetchData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is arrived");
        }, 5000)
    })
}

const userPhoto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("UserPhoto is Fetched")
        }, 7000)
    })
}

const userFriend = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject("error in user friends")
            // resolve("UserFriends is Fetched")
        }, 10000)
    })
}

const homeFeed = (data) => {
    console.log(`Making Your Homefeed with ${data}`);
}

const buildUI = async () => {
    const loginData = await login();
    console.log(loginData);
    const fetchedData = await fetchData();
    console.log(fetchedData);
    const userPhotoData = await userPhoto();
    console.log(userPhotoData);
    const userFriendData = await userFriend();
    console.log(userFriendData);
    homeFeed(userFriendData);
}

buildUI().catch ((errors) => {
    console.log(errors);
})

// end Promise