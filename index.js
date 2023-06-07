const { Client, GatewayIntentBits } = require('discord.js');
const stringSimilarity = require('string-similarity');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  console.log(message.content)
})

client.on('messageCreate', (message) => {
  const triggerWords = ['kirat bhaiya', 'kirat sir', 'kirat baia', 'kirat bhaaiyaa']
  const content = message.content.toLowerCase();
  const matches = stringSimilarity.findBestMatch(content, triggerWords);

  if (matches.bestMatch.rating >= 0.75) {
    const user = message.author;
    user.send(`Hey ${message.author} , Stop calling Harkirat bhaiya or sir just Harkirat is fine!`);
  }
});

client.login("Place your token here");