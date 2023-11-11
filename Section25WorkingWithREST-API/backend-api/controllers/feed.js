exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post!', imageUrl: '/images/BoyanK.jpeg' }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
