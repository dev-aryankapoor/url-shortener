import mongoose from 'mongoose';

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

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;