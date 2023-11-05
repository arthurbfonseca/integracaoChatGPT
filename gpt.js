import OpenAI from "openai";
const openai = new OpenAI();

const  inputText = "Digite um poema de graciliano ramos."

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: inputText}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();