let getNameFecth = async (idPost) => {

    try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then((res)=>{
        return res.json();
        })
        .then((post) =>{
            console.log(post);

            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((res)=>{
            return res.json();
            })
            .then((user) =>{
                console.log(user.name);
            })
        })

       

    } catch (error) {
        console.log(error)
      
    }

 };

 getNameFecth(1)