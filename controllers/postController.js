let posts =[
    {id:1, title:'Post 1'},
    {id:2, title:'Post 2'},
    {id:3, title:'Post 3'},
];
// Get all Posts
export const getPosts = (req, res)=>{
    // for api request such as this 
    // localhost:8000/api/posts?limit=2
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit>0){
        res.status(200).json(posts.slice(0,limit))
    }else{
        res.status(200).json(posts)
    }
};

// Get single post
export const getPost = (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post)=>post.id === id)

    if(!post){
       const error = new Error(`A post with the id of ${id} was not found`)
       error.status = 404
       return next(error)
    }else{
        res.status(200).json(post)
    }
};

// create new post
export const createPost = (req, res, next)=>{
    // console.log(req.body);
    const newPost={
        id: posts.length + 1,
        title: req.body.title
    };
    if(!newPost.title){
        const error = new Error(`Please include a title`)
       error.status = 400
       return next(error)
    }
    posts.push(newPost)
    res.status(201).json(posts);
};

// update post
export const updatePost = (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id === id)
    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`)
       error.status = 404
       return next(error)
    }

    post.title = req.body.title;
    res.status(200).json(posts)
};

// Delete post
export const deletePost = (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id === id)
    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`)
       error.status = 404
       return next(error)
    }

    posts = posts.filter((post)=> post.id === id)
    res.status(200).json(posts)
};