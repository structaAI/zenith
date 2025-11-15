import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    maxLength: 150
  },
  category: {
    type: String,
    enum: ['career', 'education', 'health', 'personal', 'financial', 'other'],
    default: 'other'
  },
  deadine: Date,
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical', 'mandatory'],
    default: 'medium'
  },
  progress: {
    type: Number, //Percentage
    default: 0
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  milestones: [{
    title: String,
    completed: Boolean,
    deadline: Date,
    priority: {
      type: String,
      enum: ['p0', 'p1', 'p2'],
      default: 'p1'
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Goal = mongoose.Schema("Goal", goalSchema);
export default Goal;