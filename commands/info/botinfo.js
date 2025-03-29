client.on("messageCreate", (message) => {
    if (message.content.startsWith("test")) {
        const user = message.author.userId();
        message.channel.reply(`Hello <@${user}> I am official multipurpose bot of Mystic KIngdom. My default perfix is &`)
    }
});

