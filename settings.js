//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
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
global.owner = ['6281267259233']
global.premium = ['6281267259233']
global.ownernomer = '6281267259233'
global.ownername = 'Number1'
global.botname = 'FiniBot'
global.footer = '©By Finnyan'
global.ig = 'https://www.tiktok.com/@republicoffini?_t=8UMD8A1fUUz&_r=1'
global.region = 'Indonesia, West Indonesia, Tanjung Pinang'
global.sc = 'https://github.com/Finnyan867/FiniBot'
global.myweb = 'https://youtube.com/channel/UCajXa43e7gfMaLLyadt0EUQ'
global.packname = 'Bot By Finny'
global.author = 'Bot Created By Finnyan'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin! (Fitur Ini Hanya Untuk Admin)',
    botAdmin: 'Bot Must Be Admin First! (Bot Harus Menjadi Admin Dahulu)',
    owner: 'This Feature Is Only For Owner! (Fitur Ini Hanya Untuk Owner Saya)',
    group: 'Feature Used Only For Groups! (Fitur Ini Hanya Untuk Di Grup)',
    private: 'Features Used Only For Private Chat! (Fitur Ini Hanya Untuk Private Chat)',
    bot: 'This Feature Is Only For Bot (Fitur Nya Hanya Untuk Bot Ini)',
    wait: 'Wait A minute... (Tunggu Sebentar...)',
    error: 'Error! Maybe Api Key Is Expired🤔! (Error! mungkin apikey nya expired?)',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours (Hadiah Mu Sudah Habis, Tunggulah 12 Jam Lagi)',
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
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
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
