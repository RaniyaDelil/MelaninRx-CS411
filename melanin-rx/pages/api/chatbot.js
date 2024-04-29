// pages/api/chatbot.js
// communicates with the OpenAI API for generating responses
import { OpenAI } from 'openai';
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

config();

//const PORT = process.env.PORT || 3005;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// create instance of openAIApi
const openai = new OpenAI(OPENAI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

//app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

// takes text and gets response using openai
async function sendTextToOpenAI(text) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0613",
            messages: [{ role: "user", content: text}],
        });
        return response.choices[0].message.content || " ";
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

// default function, takes request and returns response
export default async function handler(req, res) {
    try {
        const response = await sendTextToOpenAI(req.body.text);
        res.json({ reply: response });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error connecting to OpenAI.' });
    }
};
