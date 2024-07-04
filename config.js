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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RSTEtObE4rdFhuT2g1dU5lVDdJZVB0NEFrczhEdmRWdklJSG9iTkRscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVFEcEl4d2EyK1VRZkF4SHhrelRCRXVVR3pGZFR1YVRvN3doUlVYY2FpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRDNOaC9tdTlYcW1lc2hFYUxvSHNuQlhFclFCS2dlVmpCaHp1V3dBR1c4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOeTNmOUcyY3RWQTNxMWlZdXFXN1NuTXNyM2tyY0tzbzREbEZUd0FkclVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLeVJ3OC9KRHlFd2hERFQ4WTlOT3RkZXE1VlAyOFU3YTlpSlRxSzQ1R2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9vVEhmVHdpR0luVHE3REc0VDgvL1lEak9xN3Y3OTZBOUhYc3E0a2pDUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENCVWNNWm5vZG53RTNJNnJTaTh6MWU4dVBGMVJwbVJFSzdWZTlzMERWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9UNmJBMUdlZkRBVzlWNit1empnK2NrbWJqRFdLcDVqaE91OHZkblh6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd5L3FHTkZiS3NSckZzcjE1NXVJQk1ZcUcyTEhHOHQ4WlRPUTJXYlZwOUplTHVzZ0FnZ2VTbTVmNityS3hNWjZ1QXc4WEQ0b0JrNmFjN1plWVNIRGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IklGNDBCR2l5QTJsdlNUbU50QlNIUjZiNkQ5NnRGbmc4ZVA5dlQxY1FOZEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzA3Njc2MTM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg1MzNCRUU0MjlCN0U0M0M3QjU4RTRCMTk3QjlCM0NDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAwOTQ2ODB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijd5NHk4d0wtU1g2b0RTNXptUUVRZXciLCJwaG9uZUlkIjoiZThkOTcxZWQtZjM4ZC00MmRiLTk5YjYtNzg1ZmIyMGNlNjFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhWUk11enZjdTU5QUpTRGJ0SzFHWUZsMFVjQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UlJEaWN2ZkZWSDVXZUJhL2RUQWg1WjE3MHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFM4ODZEV1kiLCJtZSI6eyJpZCI6IjkyMzMwNzY3NjEzNzozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMkc3U3dReVorYXRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3L2ZjVGtvZ3ljOW1GMUV5QzZOVWNKK1VVaHFYNkFYQmpoU040d05TRTFVPSIsImFjY291bnRTaWduYXR1cmUiOiJEK0FYT2F0bUZ5cmpEWE5GMlYyVjM3MFZPZTQ4VWZFTTEyKzFwbnVid1h3WTlXK1JEeEc1cytQdzVUWXlVNkljOWJpMWxKS2RwR1VUbDBuLytTTnZBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNVFTa1JsS01xWEw4QlJuVyswYkZqeC9FSmV5WnpHVk1hS0pMNjBQOVMrWU9JanR3U0k2WXlUTCtVaHJwaTh5N2tCV1l6OUU3Mm9kSlY2ZnZkbE81Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDc2NzYxMzc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlLzMzRTVLSU1uUFpoZFJNZ3VqVkhDZmxGSWFsK2dGd1k0VWplTURVaE5WIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDk0Njc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUkvWCJ9tvZ3ljOW1GMUV5QzZOVWNKK1VVaHFYNkFYQmpoU040d05TRTFVPSIsImFjY291bnRTaWduYXR1cmUiOiJHaDJPbzBKNTNjVHBkV25HYnJUdHhZbW1kcHN3eUtiRXA3SlltTHNROEhWRUcrODdtdXBwS211clkyc29na2RWRWlDSDBmS01jU0hDb0FubEczbnNEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTVRydTJKTjFZNXdjQkdPVitVMG8wbGk0OEZYOEQ1UDFHdzZLakMvcWtjVHg1d3hBRnlXT3F1UGV1cEYyYjVxdktvUUVVT1V3N2lvUmhhM0NJMzlWQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDc2NzYxMzc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlLzMzRTVLSU1uUFpoZFJNZ3VqVkhDZmxGSWFsK2dGd1k0VWplTURVaE5WIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDkxODkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUkvVyJ95zM0gwTTkvL3kvamxHaHV2MFlBbGtWM3RCeUxhRU5wbTJzV29MbDhTZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibjV2QkxkWk5ncE1iK1ZIL1dKT1dZdkxIcG0xRTFCWnptTHJiZXNaV2Uyc0Y5S2ZIdHhHNEYreThRYjVmUE9uWnpxOU5UaTczbkxUN3JUSllmSHV4QlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImEzOHJFZGhYbkZOSFV2blpPa0tkNFM3SlVDcTAwV2lLckJLelN2U2VYUjFjWUp1aU8ySkxGVnh2a0ZGdXNLTlZSdVQ1Nm5SQTdBTFFQK2tiaHdlRmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDAzMDM1NTE2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWpiTng5RFBmLzh2NDVSb2JyOUdBSlpGZDdRY2kyaERhWnRyRnFDNWZFbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDAxMzM1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBZU4ifQ=="
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
