import "dotenv/config";
import readline from "readline";
import { generateQAArtifacts } from "./agents/qaAgent.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(text) {
  return new Promise(resolve => rl.question(text, resolve));
}

async function run() {

  const url = await question("🌐 URL: ");
  const scenarios = await question("🧪 Cenários: ");
  const fileName = await question("📄 Nome do arquivo: ");

  await generateQAArtifacts({
    url,
    scenarios,
    fileName
  });

  rl.close();
}

run();