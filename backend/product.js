const express=require('express')
const rout=express.Router()

rout.get('/',(req,res)=>{
res.status(200).json({
    name:'Parul'
});
})
// : it is not hrwired but its variable from user to user
rout.get('/:productId',(req,res)=>{

        const id=req.params.productId;
        if(id=='parul')
        {
            res.status(200).json(
                {
                    message:"special",
                    _id=id
                }
            )
        }
        else{
            res.status(200).json({
                mesaage:"mormal",
                _id=id
            })
        }
})
module.exports=rout