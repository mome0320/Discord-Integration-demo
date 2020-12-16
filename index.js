const config = require('./config.json');
const {Client} = require('discord.js');
const client = new Client();

client.login(config.token);
client.on('ready',()=>{
    console.log('Ready');
});

client.on('message',(msg)=>{
    const text = msg.content;
    if(text.startsWith('!register')){
        registerSlashCommands(msg.guild);
        msg.reply('Slash command register successful')
    }
});

client.on('raw',(evt)=>{
if(evt.t !== 'INTERACTION_CREATE') return;
const {d: data} = evt;

if(data.type !== 2) return;
const CommandData = data.data;

    if(CommandData.name === 'hello'){
        let TargetUser;
        if(CommandData.options) TargetUser = CommandData.options.find(element => element.name == 'mention');
        const channel = client.channels.cache.get(data.channel_id);

        if(TargetUser){
            const user = client.users.cache.get(TargetUser.value);
            callback(data,`${user} hello!`);

        }else{
            callback(data,`hello!`);
        }
    }
})

function registerSlashCommands(guild){
    const data = {}
    data.name = "hello"
    data.description = "say hello"
    data.options = new Array();
    
    const option = {};
    option.name = "mention"
    option.description = "say hello to mention user"
    /*
     * type list:
     * 1 = SubCommand
     * 2 = SubCommandGroup
     * 3 = String
     * 4 = Integer
     * 5 = Boolean
     * 6 = User
     * 7 = Channel
     * 8 = Role
    */
    option.type = 6 // 6 = User
    option.required = false

    data.options.push(option);

    client.api.applications(client.user.id).guilds(guild.id).commands().post({data});
}
function callback(eventdata,message){
   const data = {
        "type": 4,
        "data": {
            "tts": false,
            "content": message,
            "embeds": [],
            "allowed_mentions": []
        }
    }
    client.api.interactions(eventdata.id)[eventdata.token].callback().post({data});
}
