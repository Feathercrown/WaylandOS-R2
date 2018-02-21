'use strict';

// Module and Library requirements
const DiscordClient = require('discord.js');
const fs = require('fs');

// Define token in global, attempt to load token, and throw if it doesn't exist
var token;

try {
    token = fs.readFileSync("./wayland_token.txt", "utf-8");
    if(token === '') throw 'EEMPTY';
}
catch (err) {
    var errFriendly;
    if (err.code === 'ENOENT') errFriendly = `Wayland couldn't find the token file! Are you sure it's in Wayland's root directory? (${})`
    if (err.code === 'EEMPTY') errFriendly = `The token file is empty!`
    throw `Don't panic! ${errFriendly}`;
}
console.log(token);
