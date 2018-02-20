'use strict';

// Module and Library requirements
const DiscordClient = require('discord.js');
const fs = require('fs');

// Check for token and throw if it doesn't exist
try {
    const token = `"${require("./wayland_token.txt")}"`;
    console.log(token);
}
catch (err) {
    throw 'oopsie. ' + err;
}
