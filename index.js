const config = require('./config.json');
const {Client} = require('discord.js');
const client = new Client();

client.login(config.token);
client.on('ready',()=>{
    console.log('준비가 되었다.');
});

client.on('message',(msg)=>{
    const text = msg.content;
    if(text.startsWith('!커맨드 등록')){
        registerSlashCommands(msg.guild);
        msg.reply('Slash 커맨드 등록이 완료되었습니다.')
    }
});

client.on('raw',(evt)=>{
if(evt.t !== 'INTERACTION_CREATE') return;
const {d: data} = evt;

if(data.type !== 2) return;
const CommandData = data.data;

    if(CommandData.name === 'hello'){
        let TargetUser;
        if(CommandData.options) TargetUser = CommandData.options.find(element => element.name == '언급할사람');
        const channel = client.channels.cache.get(data.channel_id);

        if(TargetUser){
            const user = client.users.cache.get(TargetUser.value);
            callback(data,`${user}님 안녕하세요!`);

        }else{
            callback(data,`안녕하세요!`);
        }
    }
})

function registerSlashCommands(guild){
    const data = {}
    data.name = "hello"
    data.description = "안녕 세상을 봇이 표현을 해줄 거에요!"
    data.options = new Array();
    
    const option = {};
    option.name = "언급할사람"
    option.description = "환영할 사람을 격하게 환영합니다."
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
function callback(oridata,message){
   const data = {
        "type": 4,
        "data": {
            "tts": false,
            "content": message,
            "embeds": [],
            "allowed_mentions": []
        }
    }
    client.api.interactions(oridata.id)[oridata.token].callback().post({data});
}