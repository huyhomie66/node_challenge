const mongoose = require("mongoose");
const { Schema } = mongoose;

const BankAccount = new Schema(
    {
        balance: String,
        accountNumber: String,
        cardNumber: String,
        bankName: String,
        bankCode: String,
        swiftCode: String,
        accountType: {
            type: String,
            enum: ["SAVINGS", "SALARY", "FIXED", "RECURRING", "NRI"],
        },
        status: {
            type: String,
            enum: ["ACTIVE", "UN-ACTIVE"],
        },
    },
    { timestamps: true }
);

BankAccount.index({ accountNumber: 1 }, { unique: true });

module.exports = mongoose.model("BankAccount", BankAccount);
