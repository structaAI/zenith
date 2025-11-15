import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // match: 
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  name: {
    type: String,
    required: true
  },
  profession:{
    type: String,
    required: true
  },
  preferences: {
    workHours: {
      start: {
        type: String,
        default: '09:00'
      },
      end: {
        type: String,
        default: '17:00'
      }
    },
    sleepHours: {
      start: {
        type: String,
        default: '23:00'
      },
      end: {
        type: String,
        default: '07:00'
      },
      timezone: {type: String, default:'IST'},
      breakDuration: {type: Number,default: 15},
      energyPeak: {
        type: String,
        enum: ['morning', 'afternoon', 'evening'],
        default: 'morning'
      },
      blockHours: [{
        day: {
          type: String,
          enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
          required: true
        },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        title: { type: String, required: true },
        type: {
          type: String,
          enum: ['class', 'meeting', 'work', 'appointment', 'other'],
          required: true
        },
        location: String,
        recurring: { type: Boolean, default: true }
      }]
    },
    isOnboarded: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("user", userSchema);
export default User;