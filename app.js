'use strict';

// Module and Library requirements
const DiscordClient = require('discord.js');
const fs = require('fs');

// Check for token and throw if it doesn't exist
try {
    const token = fs.readFileSync("./wayland_token.txt", "utf-8");
    console.log(token);
}
catch (err) {
    throw err;
}
