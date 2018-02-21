'use strict';

// Module and Library requirements
const DiscordClient = require('discord.js');
const fs = require('fs');

// Check for token and throw if it doesn't exist
try {
<<<<<<< HEAD
    const token = fs.readFileSync("./wayland_token.txt", "utf-8");
    console.log(token);
=======
    var fiel = fs.readFileSync("./wayland_token.txt", "utf-8");
    console.log(fiel);
>>>>>>> a48ced11fa8000c7efc8e801954b5a0df6f1881a
}
catch (err) {
    throw `Ohno! You didn't install the token file! :(\n[${err}]`;
}
