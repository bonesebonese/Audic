require('dotenv').config();
const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActivityType, StringSelectMenuBuilder } = require('discord.js');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Discord Music Bot is running!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Express server running on port ${port}`);
});

module.exports = {
    botName: 'Audic',
    botDescription: 'Your ultimate music bot for seamless audio streaming on Discord.',
    embedColor: '#7289DA',
    supportServer: process.env.SUPPORT_SERVER || 'https://discord.gg/76W85cu3Uy',
    botLogo: 'https://i.imgur.com/aSN4yCn.png',
    genius: {
        apiKey: process.env.GENIUS_API_KEY,
        clientToken: process.env.GENIUS_CLIENT_TOKEN,
        accessToken: process.env.GENIUS_ACCESS_TOKEN
    },
    emojis: {
        play: '',
        pause: '',
        stop: '',
        skip: '',
        previous: '',
        repeat: '',
        loading: '',
        error: '',
        success: '',
        queue: '',
        music: '',
        volume: '',
        time: '',
        user: '',
        duration: '',
        spotify: '',
        soundcloud: '',
        youtube: '',
        loopTrack: '',
        loopQueue: '',
        loopOff: ''
    },
    lavalink: {
        nodes: [
            {
                name: 'Amane',
                url: 'lava-v3.ajieblogs.eu.org',
                auth: 'https://dsc.gg/ajidevserver',
                port: 80,
                secure: false,
                retryAmount: 5,
                retryDelay: 3000
            }
        ]
    }
};
