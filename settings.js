//═══════════════════════════════════════════════════════//
//
//                              ♥️HIRU𝚄_QUEEN 𝓫𝔂 Sihilel♥️
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+94704101989']
global.premium = ['94704101989']
global.ownernomer = '94704101989'
global.ownername = 'S_I_H_I_L_E_L'
global.botname = '❤️𝙷𝙸𝚁𝚄𝚄_𝚀𝚄𝙴𝙴𝙽_𝙱𝙾𝚃❤️'
global.footer = '©Sihilel.'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://chat.whatsapp.com/KCb5XO0jhm676fNwkJz93o'
global.myweb = '\nhttps://sites.google.com/view/hiruu-queen-bot/home\n\n🔥༺HIRUU༒QUEEN༻🔥'
global.packname = '❤️HIRUU-QUEEN❤️'
global.author = '❤️S_I_H_I_L_E_L❤️'
global.sessionName = 'session'
global.hiruu = 'ඉතිම් කෝමද 😜😎'
global.prefa = ['','!','.',',','#','?','%','&','sh','🦄','🕊️','🐤']
global.sp = '⭔'
global.mess = {
    success: 'ඔන්න හරි 🔥💯\n\n🔥༺HIRUU☬QUEEN༻🔥\n\n♥️S+H♥️',
    admin: 'ඇඩ්මින්ලට විතරයි මේක පුලුවන් ළමයෝ 🌝\n\n🔥༺HIRUU༒QUEEN༻🔥\n\n♥️S+H♥️',
    botAdmin: 'ඇඩ්මින් දියන්කෝ මුලින් 😒\n\n🔥༺HIRUU☬QUEEN༻🔥\n\n♥️S+H♥️',
    owner: 'Owner ට විතරයි ළමයෝ ඕක පුලුවන් 🙏 \n\n🔥༺HIRUU☬QUEEN༻🔥\n\n♥️S+H♥️',
    group: 'group වල විතරයි ඕක😒\n\n🔥༺HIRUU☬QUEEN༻🔥\n\n♥️S+H♥️',
    private: 'inbox විතරයි පුලුවන්🌝\n\n🔥༺HIRUU☬QUEEN༻🔥\n\n♥️S+H♥️',
    bot: 'මේක මට විතරයි පුලුවන්😌👍 ඔයා පාඩුවේ ඉන්න 😒\n\n🔥༺HIRUU☬QUEEN༻🔥\n\n♥️S+H♥️',
    wait: 'චුට්ටක් ඉන්න බබා 🌸🙏\n\n🔥༺HIRUU༒QUEEN༻🔥\n\n♥️S+H♥️',
    error: 'Error! Maybe Api Key Is Expired🤔!\n\n🔥༺HIRUU☬QUEEN༻🔥\n\n♥️S+H♥️',
	BanChat: 'මේ චැට් එකට බොට් වැඩ කරන්නේ නෑ.....Sorry\n\n🔥༺HIRUU☬QUEEN༻🔥',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours\n\n🔥༺HIRUU༒QUEEN༻🔥\n\n♥️S+H♥️',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/Sihilel.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
