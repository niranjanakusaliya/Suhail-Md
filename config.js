const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Sri Lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760789475";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_58_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInNmc0VXZFNnbzgyalh6bkNEd1hUY1I4MTJDZktDRllTZVRIclZFTmhyWkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjA3ODk0NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkyOTY1NkVCMzBEMkEwNkFDQzcxRTcxOUE1Q0I2NDk0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzAzOTEzMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYwNzg5NDc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRTYyMkQzMTg5NEVCQjVEM0Y2M0E2RTk2N0NFNDAxNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwMzkxMzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR2Q2WV81T0RTVVN4R016WE1uQ2k5Z1wiLFxuICBcInBob25lSWRcIjogXCI0YjA5NTVkNS1kZDVjLTQxNTQtOWEyOC1jMDMxZjc3YzBiMTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjAyLFxuICAgICAgMTI0LFxuICAgICAgMjA3LFxuICAgICAgMjMzLFxuICAgICAgOTAsXG4gICAgICAxODUsXG4gICAgICAxMjMsXG4gICAgICAxOTQsXG4gICAgICA5NyxcbiAgICAgIDE1NyxcbiAgICAgIDE3MCxcbiAgICAgIDE1MyxcbiAgICAgIDEwMyxcbiAgICAgIDU4LFxuICAgICAgMTg1LFxuICAgICAgODEsXG4gICAgICAxMDgsXG4gICAgICAyMixcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDE2MixcbiAgICAgIDEwNixcbiAgICAgIDE0OCxcbiAgICAgIDE4MyxcbiAgICAgIDE4MyxcbiAgICAgIDMzLFxuICAgICAgMjQ4LFxuICAgICAgMTYzLFxuICAgICAgMTkxLFxuICAgICAgMTQyLFxuICAgICAgMTgxLFxuICAgICAgMTkyLFxuICAgICAgMTI0LFxuICAgICAgNjAsXG4gICAgICA0NixcbiAgICAgIDIwMixcbiAgICAgIDE4NixcbiAgICAgIDIyMSxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFGNk1KUERYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MDc4OTQ3NTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTAwMDEzNTg1MTIzNTE6MzBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQm90Li5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKU083dXdCRUpYN3piVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImsyWmxaYzVjcFA0SnplWHRQK1FPZlpyRy9XVWtHZFJ6YkMwS3U2NTAvems9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWdVTDRBTjg4TWZ0OGFORFJmZUVXalZvbXVLbk0wNkhRdUhKenY0Tmc1TENGK1R0bTZtbWFET0xhSERmbzdTWVFuY00yK1huL3BMNFV3MWQ5eFpnQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU0twM1JiYk8yS2VsY2VQT29pbWtsK2dUMys2OHVIUVg3T0luZWR4UVhtK2pqc0ZIMFhac2F2bTJ1KzYrdjN3UW1XMTBkVnptYWczemNZalpvVU9zZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjA3ODk0NzU6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAzOTEyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBGQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEZBLmpzb24iOiAie1wia2V5RGF0YVwiOlwianVWY0FPbHNpSFAxY1dYT3RvWGlncXB3NC9GYWlHQTJwaXR0elpqRkZJMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0OTY3MzE5MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzAzOTEzMTg1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
