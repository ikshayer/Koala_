const Discord = require('discord.js')
const dayData = require('../../models/dayScheme')
const itemData = require('../../models/itemScheme')
const mongoose = require('mongoose');
const profileModel = require('../../models/profileScheme')

module.exports = {
    name: 'check',
    aliases: ['buy', 'sell'],
    cooldowns: 0,
    description: 'you buy stuff',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        let date = new Date();
        let day = date.getDay()
    

            if(cmd === 'check'){

                const TrueitemModel = await itemData.findOne({ title: 'ItemDB'});
                let priceEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`The Price of Green Leaves today is ${TrueitemModel.GreenLeavesPrice} Koins!`)                
            
                     return message.channel.send(priceEmbed);
       
            }
            if(cmd === 'buy'){

                let item = args[0];
                let amount = args[1];

                const TrueitemModel = await itemData.findOne({ title: 'ItemDB'});
                let cost = TrueitemModel.GreenLeavesPrice * amount;

                if(!item) return message.channel.send('Please enter the item you want to buy!');
                if(!amount) return message.channel.send('Please enter the amount you want to buy!');
                if(isNaN(amount)) return message.channel.send('Please enter a number!');
                if(profileData.Koins < cost) return message.channel.send('You do not have that much money in your **wallet** to buy that item!');
                if(!day == 0) return message.channel.send('You can only buy these items on Sunday!')
                if(item === 'greenleaves'){

                    const userModel = await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id
                        },{
                            $inc: {
                                greenleaves: amount,
                                Koins: -cost
                            }
                        })

                        const TrueuserModel = await profileModel.findOne({ userID: message.author.id})

                        const Embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('📈 Welcome to the Stock Market')
                        .setDescription(`You have just bought ${amount} Green Leaves for the price of ${cost} Koins`)
                        .addFields(
                         { name: '-=-=-=-=-', value: `You currently have ${TrueuserModel.greenleaves} Green Leaves in your inventory!`}
        
                        )
                        .setTimestamp()
                        .setFooter('😉 Be sure to sell it before next week ')  

                        return message.channel.send(Embed);
                        

                }
                else{
                    return message.channel.send('That item does not exist');
                }

           }
           if(cmd === 'sell'){

            let item = args[0];
            let amount = args[1];

            const TrueitemModel = await itemData.findOne({ title: 'ItemDB'});
            let money = TrueitemModel.GreenLeavesPrice * amount;

            if(!item) return message.channel.send('Please enter the item you want to sell!');
            if(!amount) return message.channel.send('Please enter the amount you want to sell!');
            if(isNaN(amount)) return message.channel.send('Please enter a number!');
            if(day == 0) return message.channel.send(`You cannot sell that item on Sunday!`)
            if(profileData.greenleaves < amount) return message.channel.send(`You do not have that many of that item to sell!`)

            if(item === 'greenleaves'){
            const userModel = await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id
                },{
                    $inc: {
                        greenleaves: -amount,
                        Koins: money
                    }
                })

                const TrueuserModel = await profileModel.findOne({ userID: message.author.id})

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('📈 Welcome to the Stock Market')
                .setDescription(`You have just sold ${amount} Green Leaves for the price of ${money} Koins`)
                .addFields(
                 { name: '-=-=-=-=-', value: `You currently have ${TrueuserModel.greenleaves} Green Leaves in your inventory!`},
                )
                .setTimestamp()
                .setFooter('😉 Be sure to buy some next week')   

                return message.channel.send(Embed);
            }
            else{
                return message.channel.send('That item does not exist');
            }

        }
    }
}


