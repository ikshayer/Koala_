const testModel = require('../../models/testScheme')

module.exports ={
    name: 'test',
    aliases: [],
    description: 'Testing stuff',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        const testCheck = await testModel.findOne({userID: message.author.id})
        if(!testCheck){
            const testMake = await testModel.create({
                userID: message.author.id,
                Koins: 12323,
                bank: 29389
            });
            testMake.save()

            message.channel.send('A profile was made for u')
            return
        }
        message.channel.send('A profile is already created')

    }
}