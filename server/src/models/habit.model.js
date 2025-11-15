import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    tpye: String,
    required: true
  },
  description: {
    type: String,
    maxLength: 250,
  },
  type: {
    type: String,
    enum: ['build','break'],
    required: true
  },
  category: {
    type: String,
    enum: ['productivity', 'health', 'mindfulness', 'learning', 'social', 'other'],
    default: 'other'
  },

  timer: {
    startTime: {
      type: Date,
      default: Date.now
    },
    lastResetTime: {
      type: Date,
      default: Date.now
    },
    isRunning: {
      type: Boolean,
      default: true
    }
  },
  currentStreak: {
    type: Number,
    default: 0
  }, 
  longestStreak: {
    type: Number,
    default: 0
  },
  lastFiveAverage: {
    type: Number,
    default: 0
  },

  target: {
    type: String,
    enum: ['daily', 'weekly', '3_times_week', 'custom', 'infinite'],
    default: 'infinite'
  },

  log: [{
    date: {
      type: Date,
      required: true
    },
    action: {
      type: String,
      enum: ['success', 'reset'],
      required: true
    },
    success: Boolean,
    notes: String,
    trigger: String,
    difficulty: {
      type: Number,
      min: 1,
      max: 10
    },
    resetReasonx: String,
    durationBeforeReset: Number,
    mood: {
      type: String,
      enum: ['very-bad', 'bad', 'neutral', 'good', 'very-good']
    }
  }],

  startDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: '#3B82F6'
  },
  
  notifications: {
    enabled: { type: Boolean, default: true },
    milestoneAlerts: { type: Boolean, default: true }, // 1 day, 1 week, 1 month etc.
    resetAlerts: { type: Boolean, default: true }
  }
}, {
  timestamps: true
});



// Virtual for formatted duration display
habitSchema.virtual('formattedDuration').get(function() {
  const duration = this.currentDuration;
  return formatDuration(duration);
});

// Method to format duration
function formatDuration(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d ${hours % 24}h ${minutes % 60}m`;
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
}

// Pre-save middleware to calculate success based on action
habitSchema.pre('save', function(next) {
  // Update success field based on action
  this.log.forEach(entry => {
    if (entry.action === 'success') {
      entry.success = true;
    } else if (['reset', 'skip'].includes(entry.action)) {
      entry.success = false;
    }
  });
  next();
});