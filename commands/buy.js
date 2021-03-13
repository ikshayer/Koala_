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
    
        } 

        const itemModel = await itemData.findOne({ title: 'ItemDB'});
        if(!itemModel){
            let itemData1 = await itemData.create({
                title: 'ItemDB',
                GreenLeavesPrice: 0


            });
            itemData1.save();
            return message.channel.send("Creating the Databases...")
        }

        let date = new Date();
        let day = date.getDay();
        
        
        let GreenLeaves = itemModel.GreenLeavesPrice;
        

        console.log(day);

        if(day === 0){
            await dayData.findOneAndUpdate(
                {
                    title: 'DayDB'

                },
                {                   
                 Sunday: true,         
                })

            }

        if(!GreenLeaves && dayModel.Sunday){
            const max = Math.ceil(120);
            const min = Math.ceil(90);
            let randomAmount = Math.floor(Math.random() * (max - min)) + min;

            await itemData.findOneAndUpdate(
                {
                    title: "ItemDB"
                },{
                    GreenLeavesPrice: randomAmount
                });
            }

        if(!dayModel.Sunday){
         await itemData.findOneAndUpdate(
             {
                 title: 'ItemDB'
             },{
                 GreenLeavesPrice: 0
             });   
         return
        } 

            if(cmd === 'check'){

                if(!dayModel.Sunday) return message.channel.send('It is Sunday!');

                if(GreenLeaves)
            
                    message.channel.send(`The Price of Green Leaves today is ${GreenLeaves}`);
       
            }
            
            
    
        

    }
}




   