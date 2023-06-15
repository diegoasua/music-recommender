// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    // Replace `gpt-4` with `gpt-3.5-turbo` if you don't have early access to GPT-4
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": "You are a music recommender. The user might give you a series of artists and songs and you will produce others that the user might like. Do ask follow up questions if you feel they could be helpful" }].concat(req.body.messages)

  });
  res.status(200).json({ result: completion.data.choices[0].message })

}