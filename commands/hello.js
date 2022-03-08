module.exports = {
    name: 'hello',
    description: "Hello everybody",
    async execute(client, message, args){
        message.react('😄').then(() =>{
            message.reply('Hello, hope you have a good day!');
        })
    }
}