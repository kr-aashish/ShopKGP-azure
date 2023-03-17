// const router = require("express").Router();
// const User = require("../models/user");
// const Product = require("../models/product");

// /// Create
// router.post("/create", async (req, res) => {
//   const newPost = new Product(req.body);
//   try {
//     const savedPost = await newPost.save();
//     const post = savedPost.toObject();
//     res.status(200).json({ ...post, status: 200 });
//   } catch (err) {
//     res.status(200).json({ message: err, status: 404 });
//   }
// });

// /// Update
// router.put("/update/:id", async (req, res) => {
//   try {
//     const post = await Product.findById(req.params.id);
//     if (!post) {
//       return res.status(200).json({ message: "Post not found", status: 404 });
//     }
//     if (req.body.userId !== post.userId) {
//       return res.status(200).json({
//         message: "You are not authorized to update this post",
//         status: 403,
//       });
//     }
//     const updatedPost = await Post.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );

//     res.status(200).json({ ...updatedPost.toObject(), status: 200 });
//   } catch (err) {
//     res.status(200).json({ message: err, status: 404 });
//   }
// });

// /// Delete
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const post = await Product.findById(req.params.id);
//     if (!post) {
//       return res.status(200).json({ message: "Post not found", status: 404 });
//     }
//     if (req.body.userId !== post.userId) {
//       return res.status(200).json({
//         message: "You are not authorized to delete this post",
//         status: 403,
//       });
//     }
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Success", status: 200 });
//   } catch (err) {
//     res.status(200).json({ message: err, status: 404 });
//   }
// });

// /// Get
// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Product.findById(req.params.id);
//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err });
//   }
// });

// /// Get all
// router.get("/", async (req, res) => {
//   const userId = req.query.userId;
//   try {
//     let posts;
//     if (userId) {
//       posts = await Product.find({ userId });
//     }

//     if (!posts) {
//       posts = await Product.find();
//     }
//     if (!posts) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(404).json({ message: err });
//   }
// });

// module.exports = router;
