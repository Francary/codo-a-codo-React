 let getNameAsyn = async (idPost) => {

    try {
       let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
       let post = await resPost.json()
       console.log(post)

       let resUsers = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
       let user = await resUsers.json()

       document.write(`Quien realizo el Post ${user.name}`)
       console.log(user.name);

        
    } catch (error) {
        console.log(error)

        
    }

 };

 getNameAsyn(16)