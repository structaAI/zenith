import mongoose from "mongoose";

const timeSlotSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true
  },
  startTime: {type: String, required: true},
  endTime: {type: String, required: true},
  type: {
    type: String,
    enum: ['work', 'study', 'break', 'exercise', 'personal', 'learning'],
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  notes: String
});

const dayScheduleSchema= new mongoose.Schema({
  day: {
    type: String,
    enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    required: true
  },
  timeSlots: [timeSlotSchema]
});

const timetableSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  schedule: [dayScheduleSchema],
  weekStart: {
    type: Date,
    required: true
  },
  weekEnd: {
    type: Date,
    required: true
  },
  generatedByAI: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

timetableSchema.index({ userId: 1, weekStart: 1 }, { unique: true });

const TimeTable = mongoose.model('Timetable', timetableSchema);

export default TimeTable;