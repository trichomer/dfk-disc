const { REST, Routes } = require('discord.js');
// const fetch = require('node-fetch');
require('dotenv').config();


const COMMON = "⬜";
const UNCOMMON = "🟩";
const RARE = "🟦";
const LEGENDARY = "🟧";
const MYTHIC = "🟪";
const RARITY_ICON = {
  4: MYTHIC,
  3: LEGENDARY,
  2: RARE,
  1: UNCOMMON,
  0: COMMON,
};


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!1111111111111111111111111');
    // getData(93141);
  }
});

client.login(process.env.TOKEN);






// async function getData(id) {
//     const data = JSON.stringify({
//       query: `query myHeroes($id: ID!) {
//         heroes(where: {id: $id}, orderBy: rarity, orderDirection: desc){
//           id
//           level
//           generation
//           rarity
//           mainClass
//           subClass
//           summonsRemaining
//           maxSummons
//           hp
//           mp
//           strength
//           agility
//           endurance
//           wisdom
//           dexterity
//           vitality
//           intelligence
//           luck
//           statBoost1
//           statBoost2
//           profession
//           mining
//           fishing
//           gardening
//           foraging
//           statGenes
//           pjStatus
//           active1
//           active2
//           passive1
//           passive2
//           element
//           background
//           strengthGrowthP
//           agilityGrowthP
//           enduranceGrowthP
//           wisdomGrowthP
//           dexterityGrowthP
//           vitalityGrowthP
//           intelligenceGrowthP
//           luckGrowthP
//         }
//       }`,
//       variables: `{
//           "id": "${id}"
//         }`,
//     });
  
//     const response = await fetch(
//       'https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql',
//       {
//         method: 'post',
//         body: data,
//         headers: {
//           'Content-Type': 'application/json',
//           'Content-Length': data.length,
//           'User-Agent': 'Node',
//         },
//       }
//     );
  
//     const json = await response.json();
//     console.log(json.data);
//     console.log(`Total Stats:`, 
//     json.data.heroes[0].strength + 
//     json.data.heroes[0].agility +
//     json.data.heroes[0].endurance +
//     json.data.heroes[0].wisdom +
//     json.data.heroes[0].dexterity +
//     json.data.heroes[0].vitality +
//     json.data.heroes[0].intelligence +
//     json.data.heroes[0].luck
//     );
//     console.log(RARITY_ICON[json.data.heroes[0].rarity]);
  
//     let totalStats = json.data.heroes[0].strength + 
//       json.data.heroes[0].agility +
//       json.data.heroes[0].endurance +
//       json.data.heroes[0].wisdom +
//       json.data.heroes[0].dexterity +
//       json.data.heroes[0].vitality +
//       json.data.heroes[0].intelligence +
//       json.data.heroes[0].luck;
//     console.log(totalStats);
//   };