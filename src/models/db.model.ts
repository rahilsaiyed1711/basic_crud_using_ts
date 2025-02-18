import mongoose from 'mongoose';
import { testTask } from '../interfaces/test.interface';

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'please enter title'],
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model<testTask>('Task', testSchema);
