module.exports = {
    name: 'role',
    description: "You get the kawaii role, pretty epic",
    execute(message, args){

        if(args[0].toLowerCase() === 'kawaii'){
        if(message.member.roles.cache.has('540478109238165505')){
            message.author.send('Kawaii role has been removed from you')
            message.member.roles.remove('540478109238165505');
        }
        else{
            message.author.send('You have been given the Kawaii role')
            message.member.roles.add('540478109238165505');
        }

        
    }
    else{
        message.channel.send("Please enter a valid role")
    }


}

}