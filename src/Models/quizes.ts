import mongoose from 'mongoose';

const quizesSchema = new mongoose.Schema({
    title: 
    {
        type: String,
        required: true
    },
    course: 
    {
        type: String
    },
    topic:
    {
        type: String
    },
    dueTo:
    {
        type: Date
    }
});

export default mongoose.model('quizes', quizesSchema);