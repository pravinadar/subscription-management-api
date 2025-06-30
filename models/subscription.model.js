import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Subscription name is required"],
        trim: true,
        minLength: [3, "Subscription name must be at least 3 characters long"],
        maxLength: [50, "Subscription name must not exceed 50 characters"]
    },
    price:{
        type: Number,
        required: [true, "Subscription price is required"],
        min: [0, "Price must be greater than 0"],
        max: [10000, "Price must not exceed 10000"]
    },
    frequency:{
        type: String,
        required: [true, "Subscription frequency is required"],
        enum: ["monthly", "yearly"],
        default: "monthly"
    },
    status:{
        type: String,
        required: [true, "Subscription status is required"],
        enum: ["active", "inactive", "cancelled"],
        default: "active"
    },
    startDate:{
        type: Date,
        required: [true, "Subscription start date is required"],
        validate:{
            validator: function(value){
                return value <= new Date();
            }
        }
    },
    renewalDate:{
        type: Date,
        required: false,
        validate:{
            validator: function(value){
                return value > this.startDate;
            }
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
        index: true
    },
    userEmail:{
        type: String,
        required: [true, "User email is required"],
        trim: true

    }
},
{
    timestamps: true
});


// Auto calculate renewal date based on frequency
subscriptionSchema.pre("save", function (next) {
    if(!this.renewalDate){
        const renewalPeriods = {
            monthly: 30, // 30 days for monthly
            yearly: 365 // 365 days for yearly
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    
    // Auto-update status based on renewal date
    if(this.renewalDate < new Date()){
        this.status = "inactive"; // Set status to inactive if renewal date is in the past
    }

    next();
});

    
const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;