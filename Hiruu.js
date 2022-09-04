require( ./settings ) 
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require( @adiwajshing/baileys ) 
const fs = require( fs ) 
const util = require( util ) 
const chalk = require( chalk ) 
const { exec, spawn, execSync } = require("child_process") 
const axios = require( axios ) 
const path = require( path ) 
const os = require( os ) 
const moment = require( moment-timezone ) 
const { JSDOM } = require( jsdom ) 
const speed = require( performance-now ) 
const { performance } = require( perf_hooks ) 
const { Primbon } = require( scrape-primbon ) 
const primbon = new Primbon() 
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require( ./lib/myfunc ) 
const nexusnw = require( xfarr-api )

//Auto voice reply\\

case 'owner': case 'creator': case 'sihilel': case 'hiruu': {
	result = fs.readFileSync(`./GojoMedia/vn/owner.mp3`)		    
	GojoMdNx.sendMessage(m.chat, {audio: result, minetype: 'audio/mp4' , ptt: true}, {quoted: m})
}
break

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
