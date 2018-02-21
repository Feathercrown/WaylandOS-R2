'use strict';

// Module and Library requirements
const DiscordClient = require('discord.js');
const fs = require('fs');

// Check for token and throw if it doesn't exist
try {
    var fiel = fs.readFileSync("./wayland_token.txt", "utf-8");
    console.log(fiel);
}
catch (err) {
    throw `Ohno! You didn't install the token file! :(\n[${err}]`;
}
