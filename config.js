const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="colombo,Srilanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM";
global.website=process.env.GURL || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94786238579" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94786238579";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94786238579";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94786238579,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_41_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNreFJKalhNS0hVV3UwVGVZM0lzY2lvamFVS0xOWEU5akhCNHovekMrRUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODYyMzg1NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2REE3NEFERTc4QTNDODBFRDMyQTcyMTFERUFFNzZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTQ3ODA4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJydTdUQjRVclJjV1pVOHlQTllDQU13XCIsXG4gIFwicGhvbmVJZFwiOiBcImM1NzY3NjQxLTM2NDEtNDY0Mi1iMGM0LWRkNmNiZWRiN2NhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAyMzAsXG4gICAgICAzMixcbiAgICAgIDEwMixcbiAgICAgIDE1OCxcbiAgICAgIDIzLFxuICAgICAgMzEsXG4gICAgICAxNzksXG4gICAgICAyNDQsXG4gICAgICAxODEsXG4gICAgICAxMTEsXG4gICAgICAxOTYsXG4gICAgICAzNyxcbiAgICAgIDEsXG4gICAgICAyMzksXG4gICAgICAzNyxcbiAgICAgIDY3LFxuICAgICAgODEsXG4gICAgICAxMTUsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAyNTIsXG4gICAgICAyMDksXG4gICAgICAxMzksXG4gICAgICAwLFxuICAgICAgNDEsXG4gICAgICAxMDMsXG4gICAgICAxNDEsXG4gICAgICAyMDgsXG4gICAgICAxMTUsXG4gICAgICAxMTAsXG4gICAgICAxMDgsXG4gICAgICAxNzcsXG4gICAgICAyNyxcbiAgICAgIDE5NCxcbiAgICAgIDE0NyxcbiAgICAgIDE1MyxcbiAgICAgIDI1NCxcbiAgICAgIDE0NSxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJyenRJQkVMeThnTElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyc0RiUWtnWFlqV3owc05lNi90VVJqZWg0dUtWV2hMMzJIN3Z4Wlk2WWc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlwVzlTVUxUWGxRdDI0V3k4RU85ZTJpSk5wZENHUG1zU0o5S0EwLzM4U3Rkdk1LR1gzTGkzU01neldoU1JZei9PVm0wMGNpQkd4SkMzR0NKbE5QM0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5OQWVib1Q3eEc5M2JzZ0RRRmF0UU5MODU1bVhKaS9BYjhMaFFqcmJQVFVOYkVZaWY0T2x5V0VkaWZzSkh5enBjY3ArK2lNNXlVemg3bW54TWFrRkJ3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODYyMzg1Nzk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODcxMDIxNzE2OTcxODI6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEaU5pWWHwn6SX4p2k77iPXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NjIzODU3OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTQ3ODA3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZxS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnFLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQlhTMWdBZ1Y2Tm5pWVhMa3hYOGt5UTdpMnZmSDE0THhhNmxPWXJDUHdHcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDE2OTM1NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTQ3ODA4MTI4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DINIYA -ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Dinidu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
