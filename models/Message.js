import mongoose from 'mongoose';

const mesageschema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now }
});

export default moongose.model('Message', messageSchema);