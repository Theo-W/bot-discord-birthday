const { Client } = require('discord.js')
const PREFIX = "!!"

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

client.on("messageCreate", async message => {
    if (message.content.startsWith(PREFIX)) {
        message.content.slice(PREFIX.length).trim().split(" ");
        const userTo = message.mentions.users.first()
        message.delete();

        for (let i = 0; i <= 200; i++) {
            message.channel.send(`Nous te souhaitons un joyeux anniversaire ${userTo} :tada: :confetti_ball: :gift:`)
        }
    }
})

client.login("#")
