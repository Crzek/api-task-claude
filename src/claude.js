import Anthropic from "@anthropic-ai/sdk";
// import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const anthropic = new Anthropic({
  // defaults to process.env["ANTHROPIC_API_KEY"]
  apiKey: process.env.CLAUDE_API_KEY
});

// Lee archivo o imagen y convierte en BAse64
// const pdfPath = "./mi.pdf";
// const pdfBuffer = fs.readFileSync(imagePath);
// const pdfBase64 = pdfBuffer.toString("base64");

export async function ClaudeResponse(textFromUser){
  const msg = await anthropic.messages.create({
    // model: "claude-3-7-sonnet-20250219",
    model: "claude-3-haiku-20240307",
    max_tokens: 1494,
    temperature: 1,
    system: `Eres un Coach que entregas los pasos para realizar 
              cuanquier tarea en 5 pasos, ni mas ni menos. 
              <formato-respuesta>
              Me devolveras un lista ( array ), que contenga los objetos
              de los pasos con las siguientes propiedades: 
              {"step": number, "description": string}
              </formato-respuesta>
              ##Importante:
              - Responderas siempre comenzando con "[" y acabando con "]", 
              - Siempre rsponderas con un array.
              
              `,
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": textFromUser
          }
        ]
      }
    ]
  });
  console.log(msg);
  return msg.content[0].text;
};