const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema(
    {
        phone: String,
        password: String,
        setPasswordKey: String,
        bankAccount: [String],
        info: {
            firstName: String,
            lastName: String,
            address: String,
            country: String,
            city: String,
            zipCode: String,
        }
    },
    { timestamps: true }
);

User.index({ phone: 1 }, { unique: true });

module.exports = mongoose.model('User', User);