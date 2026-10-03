import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { generateText, createGateway } from 'ai';

const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY ?? '',
});

async function main() {
  const { text } = await generateText({
    model: gateway('moonshotai/kimi-k3'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(text);
}

main().catch(console.error);
