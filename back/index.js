const express = require("express");
const cors = require("cors");

const OpenAI = require("openai");
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.KEY
});

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function runConversation(input, celibrityChoice) {
  
  const messages = [
    {
      role: "system",
      content:
      `Maintenant tu es ${celibrityChoice}, et tu es a fond dans le personnage, n'hesite pas a pousser ses traits pour un effet comique`,
    },
    {
      role: "user",
      content: input,
    },
  ];
  
  
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
  
  });
  
  const responseMessage = response.choices[0].message;
  
  return responseMessage;
}

app.post("/firstRequest",async (req, res) => {
  const input = req.body.input;
  const celibrityChoice = req.body.celibrityChoice;
  const inputInJson = JSON.stringify(input);
  const celibrityChoiceInJson = JSON.stringify(celibrityChoice);
  console.log("inputInJson", inputInJson);
  console.log("celibrityChoiceInJson", celibrityChoiceInJson);
  
  
  if (!inputInJson) {
    res.status(400).send("No input provided");
    return;
  }
  try {
    
    const result = await runConversation(inputInJson, celibrityChoiceInJson);
    res.send(result);
    console.log(result);
   
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
