const express = require('express');
const router = express.Router();
const { PostSchema } = require('../models');

router.get("/", async (req,res)=>{
  const getPostdb = await PostSchema.findAll();
  res.send(getPostdb);
});

router.post("/", (req,res)=>{
  const post = req.body;
  PostSchema.create(post);
  res.json(post);
});

module.exports = router;