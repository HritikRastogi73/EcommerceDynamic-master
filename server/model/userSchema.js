const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
          type:String,
          required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
    {
        firstname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        phone:{
            type:Number,
            required:true,
            unique:true,
        },
        message:{
            type:String,
            required:true,
            
        },

    }
   ],
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]

})


//hashing password
userSchema.pre('save',async function(next){
    console.log("hi from inside");
      if(this.isModified('password')){
        
          this.password=await bcrypt.hash(this.password,12);
          this.cpassword=await bcrypt.hash(this.cpassword,12);
      }
      next();
});


//genertaing token
userSchema.methods.generateAuthToken=async function(){
    try{

        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;

    }catch(err){
        console.log(err);
    }
}

//stored the message

userSchema.methods.addMessage=async function(firstname,email,phone,message){
    try{

        this.messages=this.messages.concat({firstname,email,phone,message})
        await this.save();
        return this.messages;
    }catch(error){
        console.log(error);
    }

}
const User=mongoose.model('USER',userSchema);

module.exports=User;
