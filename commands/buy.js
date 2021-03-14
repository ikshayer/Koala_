const Discord = require('discord.js')
const dayData = require('../models/dayScheme')
const itemData = require('../models/itemScheme')
const mongoose = require('mongoose');
const profileModel = require('../models/profileScheme')


module.exports = {
    name: 'check',
    aliases: ['buy'],
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
            return
    
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
        let day = date.getHours();
        

        console.log(day);

        if(day === 10 && !dayModel.Sunday){
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

            if(day === 11 && !dayModel.Monday){
                const max = Math.ceil(200);
                const min = Math.ceil(0);
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

                if(day === 12 && !dayModel.Tuesday){
                    const max = Math.ceil(200);
                    const min = Math.ceil(0);
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


        
                    }    

                    if(day === 13 && !dayModel.Wednesday){
                        const max = Math.ceil(300);
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
                             Wednesday: true,
                             Thursday: false,
                             Friday: false, 
                             Saturday: false
                            })
            
                        }

                        if(day === 14 && !dayModel.Thursday){
                            const max = Math.ceil(250);
                            const min = Math.ceil(0);
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
                
                            }

                            if(day === 15 && !dayModel.Friday){
                                const max = Math.ceil(200);
                                const min = Math.ceil(0);
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
                    
                                }

                                if(day === 16 && !dayModel.Saturday){
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
                        
                                    }
    

            if(cmd === 'check'){

                let priceEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`The Price of Green Leaves today is ${itemModel.GreenLeavesPrice} Koins!`)                
            
                     return message.channel.send(priceEmbed);
       
            
            }
    }
}




   