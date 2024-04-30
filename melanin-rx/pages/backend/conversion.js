//schema for storing chatbot conversations in the MongoDB database.
import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;
