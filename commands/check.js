const Discord = require('discord.js')
const dayData = require('../models/dayScheme')
const itemData = require('../models/itemScheme')
const mongoose = require('mongoose');
const profileModel = require('../models/profileScheme')


module.exports = {
    name: 'check',
    aliases: ['buy', 'sell'],
    cooldowns: 0,
    description: 'you buy stuff',
    async execute(message, args, cmd, client, Discord, profileData){

        const dayModel = await dayData.findOne({title: 'DayDB'});

        if(!dayModel){
            let dayModel1 = await dayData.create({
                title: 'DayDB',
                Sunday: false,
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
        
            });
            dayModel1.save();
            console.log('The Day Database was created');
            
        } 

        const itemModel = await itemData.findOne({ title: 'ItemDB'});
        if(!itemModel){
            let itemData1 = await itemData.create({
                title: 'ItemDB',
                GreenLeavesPrice: 0


            });
            itemData1.save();
            message.channel.send("Creating the Databases...")
            console.log('The Item Database was created');
            return
        }

        let date = new Date();
        let day = date.getDay();
        

        console.log(day);

        if(day == 0 && !dayModel.Sunday){
            const max = Math.ceil(120);
            const min = Math.ceil(90);
            let randomAmount = Math.floor(Math.random() * (max - min)) + min;

            await itemData.findOneAndUpdate(
                {
                    title: "ItemDB"
                },{
                    GreenLeavesPrice: randomAmount
                })
        
            await dayData.findOneAndUpdate(
                {
                    title: 'DayDB'

                },
                {                   
                    Sunday: true,         
                    Monday: false,
                    Tuesday: false,
                    Wednesday: false,
                    Thursday: false,
                    Friday: false, 
                    Saturday: false        
                })
              
                console.log('The Price of GreenLeaves was randomized');
               

            }

            if(day == 1 && !dayModel.Monday){
                const max = Math.ceil(200);
                const min = Math.ceil(90);
                let randomAmount = Math.floor(Math.random() * (max - min)) + min;
    
                await itemData.findOneAndUpdate(
                    {
                        title: "ItemDB"
                    },{
                        GreenLeavesPrice: randomAmount
                    })
            
                await dayData.findOneAndUpdate(
                    {
                        title: 'DayDB'
    
                    },
                    {                   
                     Sunday: false,         
                     Monday: true,
                     Tuesday: false,
                     Wednesday: false,
                     Thursday: false,
                     Friday: false, 
                     Saturday: false
                    })

                    console.log('The Price of GreenLeaves was randomized');
                   

    
                }

                if(day == 2 && !dayModel.Tuesday){
                    const max = Math.ceil(300);
                    const min = Math.ceil(90);
                    let randomAmount = Math.floor(Math.random() * (max - min)) + min;
        
                    await itemData.findOneAndUpdate(
                        {
                            title: "ItemDB"
                        },{
                            GreenLeavesPrice: randomAmount
                        })
                
                    await dayData.findOneAndUpdate(
                        {
                            title: 'DayDB'
        
                        },
                        {                   
                         Sunday: false,         
                         Monday: false,
                         Tuesday: true,
                         Wednesday: false,
                         Thursday: false,
                         Friday: false, 
                         Saturday: false
                        })

                        console.log('The Price of GreenLeaves was randomized');
                        


        
                    }    

                    if(day == 3 && !dayModel.Wednesday){
                        const max = Math.ceil(400);
                        const min = Math.ceil(90);
                        let randomAmount = Math.floor(Math.random() * (max - min)) + min;
            
                        await itemData.findOneAndUpdate(
                            {
                                title: "ItemDB"
                            },{
                                GreenLeavesPrice: randomAmount
                            })
                    
                        await dayData.findOneAndUpdate(
                            {
                                title: 'DayDB'
            
                            },
                            {                   
                             Sunday: false,         
                             Monday: false,
                             Tuesday: false,
                             Wednesday: true,
                             Thursday: false,
                             Friday: false, 
                             Saturday: false
                            })
                            console.log('The Price of GreenLeaves was randomized');
                                              
            
                        }

                        if(day == 4 && !dayModel.Thursday){
                            const max = Math.ceil(300);
                            const min = Math.ceil(70);
                            let randomAmount = Math.floor(Math.random() * (max - min)) + min;
                
                            await itemData.findOneAndUpdate(
                                {
                                    title: "ItemDB"
                                },{
                                    GreenLeavesPrice: randomAmount
                                })
                    
                            await dayData.findOneAndUpdate(
                                {
                                    title: 'DayDB'
                
                                },
                                {                   
                                 Sunday: false,         
                                 Monday: false,
                                 Tuesday: false,
                                 Wednesday: false,
                                 Thursday: true,
                                 Friday: false, 
                                 Saturday: false
                                })

                                console.log('The Price of GreenLeaves was randomized');
                                    
                
                            }

                            if(day == 5 && !dayModel.Friday){
                                const max = Math.ceil(200);
                                const min = Math.ceil(50);
                                let randomAmount = Math.floor(Math.random() * (max - min)) + min;
                    
                                await itemData.findOneAndUpdate(
                                    {
                                        title: "ItemDB"
                                    },{
                                        GreenLeavesPrice: randomAmount
                                    })
                            
                                await dayData.findOneAndUpdate(
                                    {
                                        title: 'DayDB'
                    
                                    },
                                    {                   
                                     Sunday: false,         
                                     Monday: false,
                                     Tuesday: false,
                                     Wednesday: false,
                                     Thursday: false,
                                     Friday: true, 
                                     Saturday: false
                                    })
                                    console.log('The Price of GreenLeaves was randomized');
                                        
                    
                                }

                                if(day == 6 && !dayModel.Saturday){
                                    const max = Math.ceil(400);
                                    const min = Math.ceil(50);
                                    let randomAmount = Math.floor(Math.random() * (max - min)) + min;
                        
                                    await itemData.findOneAndUpdate(
                                        {
                                            title: "ItemDB"
                                        },{
                                            GreenLeavesPrice: randomAmount
                                        })
                                
                                    await dayData.findOneAndUpdate(
                                        {
                                            title: 'DayDB'
                        
                                        },
                                        {                   
                                         Sunday: false,         
                                         Monday: false,
                                         Tuesday: false,
                                         Wednesday: false,
                                         Thursday: false,
                                         Friday: false, 
                                         Saturday: true
                                        })

                                        console.log('The Price of GreenLeaves was randomized');
                                           
                        
                                    }
    

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


