const dayData = require('../models/dayScheme')
const itemData = require('../models/itemScheme')
const mongoose = require('mongoose');


module.exports = async (client) => {

setInterval(async () => {
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
    }, 600000);
}