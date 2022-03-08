const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    description: 'Talk to me baby',
    async execute(client, message, args){
        const connection = getVoiceConnection(message.guild.id);
        connection.destroy();
    }    
}