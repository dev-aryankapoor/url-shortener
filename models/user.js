import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    verifyOtp: {
        type: String,
        default:""
    },
    verifyOtpExpireAt: {
        type: Number,
        default: 0
    },
    resetOtp: {
        type: String,
        default:""
    },
    resetOtpExpireAt: {
        type: Number,
        default: 0
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;