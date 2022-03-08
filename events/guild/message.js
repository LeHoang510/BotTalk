module.exports = (Discord, client, message) =>{
    const PREFIX = '-';
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.substring(PREFIX.length).split(' ');
    const cmd = args.shift();
    const command = client.commands.get(cmd);

    if(command) command.execute(client, message, args, Discord);
}