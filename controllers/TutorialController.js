const express = require('express');
const TutorialRoutes = require('../routes/TutorialRoutes')
const Tutorial = require('../models/TutorialSchema')


exports.getTutorial = (req,res) => {
    const tutorial = Tutorial.find()
    //.select("title description published")
    .then((tutorial) => {
        res.json({tutorial})
    }).catch(err => console.log(err))
};

exports.postTutorial = (req,res) => {
    const tutorial = new Tutorial(req.body);
    tutorial.save().then((result) => {
        res.status(200).json({
            tutorial:result
        });
    }).catch(err => console.log(err))
  };

exports.putTutorial=async(req,res)=>{

    let id=req.params.id;
    const tutorial =await Tutorial.findByIdAndUpdate(id,{
        title:req.body.title,
        description:req.body.description,
        published:req.body.published
    },{new:true}).then((result)=>{
        res.status(200).json({
            result:result
        });
    }).catch(err => console.log(err))
};

exports.deleteTutorial=async(req,res)=>{

    let id=req.params.id;
    const tutorial =await Tutorial.findByIdAndRemove(id).then((result)=>{
        res.status(200).json({
            result:result
        });
    }).catch(err => console.log(err))
}


exports.findTutorial=async(req, res)=>{
    //console.log(req.params.title);
      let title=req.params.title;
        const tutorial=await Tutorial.find({title:title}).then(result => {
            res.json({
                tutorial:result
            });
        }).catch(err => console.log(err))   
}

exports.getsortTutorial = (req,res) => {
    var mysort = { updatedAt: -1 };
    const tutorial = Tutorial.find().sort(mysort)
    .then((tutorial) => {
        res.json({tutorial})
    }).catch(err => console.log(err))
};
