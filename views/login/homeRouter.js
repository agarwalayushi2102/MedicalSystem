const express=require("express");
const Router = express.Router();
const Patient = require("../../server/model/patient_model");
const Doctor = require("../../server/model/doctor_model");
const Login = require("./userSchema");

Router.get('/', (err,res)=>{
    res.render('register', {title : 'monil', password: '', email: ''})
})

Router.post('/register', async(req,res)=>{
    try {
        const{
            email,
            password
        } = req.body;

        if(password === password){
            const userData = new homeSchema({
                email,
                password
            })
            
            userData.save(err=>{
                if(err){
                    console.log('Error')
                }
                else{
                    res.render('register', {title : '', password: '', email: ''})
                }
            })
        }else{
            res.render('register', {title : '', password: 'password not matched', email: ''})
        }
        const Email = await Login.findOne({email});
        const Password = await Login.findOne({password});
        
    } catch (error) {
        res.render('register', {title : 'Done', password: '', email: ''})
    }
})

module.exports = Router;