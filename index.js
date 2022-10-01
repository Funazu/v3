const Discord = require('discord.js')
const bot = new Discord.Client();
const { prefix, token } = require('./config.json');

const Welcome = require("discord-welcome");


bot.on("ready", function (){
    console.log(`${bot.user.username} Bot Kao Sudah on sayang`);
    bot.user.setActivity('% | 24/7 | WarGame', {type: 'PLAYING'}).catch(console.error);
    
});
bot.on(`message`, message => {
   if (message.content === `image`) {
   message.reply(message.author.displayAvatarURL());
}
});

Welcome(bot, {
    privatemsg : "Selamat Datang Di WarGame Bro",
    publicmsg : "Halo @MEMBER Selamat Datang",
    publicchannel : "762892484438392852"
    })
    
bot.on(`message`, msg=>{
    if(msg.content ===  "bang"){
        msg.reply('beli apa?'); 
    }
if(msg.content ===  "nambah biling bang"){
        msg.reply('berapa jam?'); 
    }
if(msg.content ===  "test"){
        msg.reply('Apa yang sebenarnya kamu cari?'); 
    }		
if(msg.content ===  "a"){
        msg.reply('lag ya bro? yahahahahaha'); 
    }
if(msg.content ===  "satu jam "){
        msg.reply('kalo 1 jam mending gausah dah kasian banyak yang nunggu?'); 
    }
if(msg.content ===  "dua jam "){
        msg.reply('oke, jangan nambah lagi, banyak yang nunggu sukususyss'); 
    }
if(msg.content ===  "indomie 1 bang gas in ga sieee"){
        msg.reply('goreng apa rebus?'); 
    }
if(msg.content ===  "goreng bang"){
       msg.reply(`https://imgur.com/h8ymOGT`);
    }
if(msg.content ===  "rebus bang"){
        msg.reply('https://imgur.com/XJyaMT6');
    }
if(msg.content === 'avatar') {
	if(args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone elses avatar.');
		}

		return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}

	return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
}
	
});

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case `info`:
            const info = new Discord.MessageEmbed()
	     .setTitle('User Information')
             .addField(`Player Name`, message.author.username, true)
	     .addField('Current Server', message.guild.name, true)
             .setColor(0xFF3003)
	     .setFooter('%help untuk melihat Fitur bot elek iki!')
	     .setThumbnail(message.author.displayAvatarURL());
            message.channel.send(info);
        break;
    }
	
})
bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    //ini namanya event message
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if (!message.guild) return;

    switch(args[0].toLowerCase()){
            //profile @mention
        case 'profile':
                const EndofWater = new Discord.MessageEmbed()
                .addField('Username', message.author.tag, true)
                .setThumbnail(message.author.displayAvatarURL());

                let FunazuPerson = message.mentions.users.first()
                if(!FunazuPerson){ //tanda seru itu artinya "Kalo nggak ada"
                    message.channel.send(EndofWater);
                    return;
                }

                const FunazuEmbed = new Discord.MessageEmbed()
                .addField('Username', FunazuPerson.tag, true)
                .setThumbnail(FunazuPerson.displayAvatarURL());
                message.channel.send(FunazuEmbed); 
            break;
   }
})	

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case `help`:
            const help = new Discord.MessageEmbed()
	     .setTitle('Help Guide')
	     .addField('Help 1', '**%help\n%info\n%profile\n%update**', true)
         .addField('Help 2', '**bang\nnambah biling bang yang banyak bang\nindomie 1 bang\ngoreng bang\nrebus bang\nimage**', true)
         .addField(`Cooming Soon`, '**%trigger\n%stonk\n%delete**', true)
             .setColor(0xFF3003)
            message.channel.send(help);
        break;
    }
})
	
bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case `update`:
            const update = new Discord.MessageEmbed()
	     .setTitle('Update Bot')
	     .addField('Terinstall', 'Welcome')
	     .addField('Cooming Soon', 'ImageGenerator\nReactionRole')
	     .setFooter('update by Funazu#5712')
             .setColor(0xFF3003)
            message.channel.send(update);
        break;
    }
	
})
	
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if (!message.guild) return;  

    switch(args[0]){

    case 'brouhwhwh':
        message.channel.send('**Warnet Game\'s Bot Help:** `bang, nambah biling bang, indomie 1 bang, goreng bang, rebus bang, image `');
        break;
    }

});

bot.login(process.env.token);
