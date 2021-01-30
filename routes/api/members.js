const express = require('express');
const router = express.Router()  
const members = require('../../Members')
const uuid = require('uuid')
router.get('/' , (req , res)=>{
    res.json(members)
})

router.get('/:id',(req , res)=>{
   const found = members.some(member =>  member.id === req.params.id)
   if(found){
    res.json(members.filter(member =>  member.id === req.params.id))
   }
   else{
       res.status(400).json({msg :'No results found'})
   }
})

// Create member 
router.post('/',(req, res)=>{
    // res.send(req.body)
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age,
        status: 'A'
    }
    if(!newMember.name || !newMember.age ){
        return res.status(400).json({msg: 'Please provide mandetory info!'})
    }
    members.push(newMember)
    res.json({members : members})
})
module.exports = router;

