module.exports ={
    name: 'gay',
    aliases: [],
    description: 'A test for the message collector function',
    execute(message, args, cmd, client, Discord){

        let filter = m => m.author.id === message.author.id

        message.channel.send('Are you sure you are gay?').then(() => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 1000,
            errors: ['time']

        })
        .then(message => {
            message = message.first()
            if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
              message.channel.send(`good shit`)
            } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
              message.channel.send(`what the fuck, u r stupid`)
            } else {
              message.channel.send(`Terminated: Invalid Response`)
            }
          })
          .catch(collected => {
            return;
        });

        })
        
      
    }
}