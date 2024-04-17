let getNameAxios = async (idPost) => {
    try {
        
        let resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        console.log(resPost)
        let resUsers = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUsers.data.name);
    } catch (error) {
        
    }
}

getNameAxios(21)