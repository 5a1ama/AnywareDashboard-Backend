import mongoose from 'mongoose';

const announcementsSchema = new mongoose.Schema({
    announcer: 
    {
        type: String,
        required: true
    },
    department: 
    {
        type: String
    },
    message:
    {
        type: String
    }
});

export default mongoose.model('announcements', announcementsSchema);