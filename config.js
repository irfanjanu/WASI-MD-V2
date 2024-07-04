//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZ4bWJCR09hSm5VanR1eDU4cG9CNlUzYW0vaXdISVBlOXJtOE9HYzQzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3daeEpBZTVsUHZIMWtIM1lQeU11S1MvbCs2cFkrQWttdzlyWG9GT0JrND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T1UrL205c3RNMDllVDJJUksyWlN0bE1WL1R4aGxJYmptUENmOTJCcFh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEVmlQOEZYM3h4NTZTWjZ5cmlWV1lReEpsUEQ4NWlPbU9OWjRzQlV2dGhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HTFhzaENQejFUcWhWd1lMMEp5ZVROTEt3akp3SUM4SFJtRSsvaCtvRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZzb09RSERwb3U2U2ZrV1NoOFMwdU5PaTE2SERJQU0xR3ZCZ000aytIRWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpmaXZVbVRXVy91eDFUN0grSUFIUjN0OFJGSnpIRFluMGF2c05KNFVtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3diWHBvTmxKeFZ1cTkvYXRPUHJ0cUFTYnJ5M2JQZllOM2lWbVFmKzF6bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZXVXJsOG50ZkdQaVFZRk5XUFpXRStZMjVUVU5VSjhsdS9uRXl5ZWVlTkdWcHNjMlRxR3pFajNRRVYwWTh3Q3ExYnVnUE5tcVhQQnNPVXYwQmc0cWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJaeVYyd2VUZzJrQkhJUUJhWnhQaStVM3JaR1YzVHBmRW1xUjBKdi9KS0p3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIeTVmNlZqN1FYT0VCSDZhSHlvRjVnIiwicGhvbmVJZCI6IjJlYmFjOGUyLTA1MDktNGFlMC1hYjAwLTFhOTM2M2ZiZjVmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRUwramdpTGd5Ukg0TDVwQ2dMa1doRVM5MVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDlaUUo5WkFHdkhpYnZMTzNFRU5sS2Q1M253PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxBS01aVk5RIiwibWUiOnsiaWQiOiI5MjMyNTIzNzI3NTE6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJpcmZhbmNoYW5kaW84NjkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ083QnhjTUhFTVdpbXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRWc2lhMDNVRk4zZFI2YXkvd0pvMzVtb2g4enZrVS9KTEE5aStxeVUzU0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikdjb0ZiQjY1dStiL0lHbUhsSUQyLzVDYUFlV3BWbGNwVWlZdHYyeXR4M3lDNHZ1K0ZiRSs2YnEvMWh4TVM2bVRhZkFOZVB0cHFOcGhmOUpyWG1Yb0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGRCt2eU56K0o4MXU4N0J5VWNWOW40NGhSdHlGNnJ0bVJzajg3WmxUeE01Qy82dHdhUzM0eDUwRHhhZnZuclh2aFBNWTVLQW42NjFqODhjM0pMaFNqZz09In0s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"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
