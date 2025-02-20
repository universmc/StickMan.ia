const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
    //parm(context)
    //parm(role)
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"system", content:"initiation à la technologie groq vocal "},
    ],
    model: "mistral-large-latest",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "ctx_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();