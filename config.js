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
global.allowJids = process.env.ALLOW_JID || "923115937575@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/LiGGtYFn5OkHNqbdYCpONt";
global.website = process.env.GURL || "https://chat.whatsapp.com/LiGGtYFn5OkHNqbdYCpONt";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1441bbf27b342c9ba15c1.jpg";
global.devs = "923288330026";
global.sudo = process.env.SUDO || "923288330026";
global.owner = process.env.OWNER_NUMBER || "923115937575";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/88bd9f1a98bb9d171a3a2.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tnZGw5UmFnbW9hUUtHS3NyaWp0MVhuV0ZVMFNTWXR0VWdMZnd0YlNFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickZrcjZxRGptTHQ4SEJZeU9zRHlHZ29IeHlhdnJObWxZQnBmRzg1WWRDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTkNST2x6Q1VNZE40QXNGbkc4RDhjTVEvcFZDQjJvTGxZb3kwQWZXYUc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSmpMVDRhN0NQOC90YzJDU05tNWZkRndIdUFMV3BHVWtBTkpNQkMzeXdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PQk1FTDJJY0M4T1hMOU5yajFnUWNmMzljU2x4TGJiZXJDRGxqTDdVVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJWR3RISFlZcDdjTnhoUFQza1ZtL3I5a3FrT2VkUExkOTUwMThMemhaMTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hNUHFlRGljc0lCc3k2UXBBdWlxQUl6YXZ0MjNLcWtWU3VheEV6bHQxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0R3M1ZrK1d4VEZNbHhDT1lkOVBVN0FST2VWOWtNWmdpQmpRNTBEZDJHaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii96YS9FTEJ1aVhoaUFRRG1WcEVxUnh0Mms5RjloOHRId3hYN2hYcXJCNTZUVVNUd2pNUmlnbFZlN2t6Sm5OV1hUZGNQT2M0YnROclluMm9FZGdLakNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IjE2b2tZSTFNNDhnWFhUYWo1TmpEN0J2N0F4LzY2NGxobUtjSlpNSklWQVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJubWxPUDdEUXRtS0tvOUs5cDFBOEEiLCJwaG9uZUlkIjoiMjY5MGY3M2QtNWY0OS00YWVlLTk5NWYtODkzNGJiMzllNWViIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlqMDg3UDRUc051TWw5QUc5MytMc0VXMmJrcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bm5xeWYzWm1tdzBJZmlnVjJCbW9kUzhhL2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUThNMjVaUFMiLCJtZSI6eyJpZCI6Ijk3MTU0NzM1OTM1NDoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkYXwnZup8J2brfCdm6/wnZupIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdi9xNzRHRU9yQ2hMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrZnBSYWZwYWNUR0FrUkhGMmZWOUZBMjlKaTE3SjhLNDFSZ1BZV1NXRm1FPSIsImFjY291bnRTaWduYXR1cmUiOiJVUk04eFZOVzRlNk8rZVE1NDlKc0RWdzlkc2xrcjVEM2FEeVhhQ3ZwbzZGZVl6NzZnNkpMSkk1Y014VEdta0NyQndvM1VHbFJ2bllKS3BWT0ZmWnJCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNTdHNWtqR0owcnZ5emVtYURGbmlSVDFkKzhaa0ZsL2x4bHZudGdkT2hzMUMyU0RlMk5lbWVCb09UZ0t5RUZGUDRCM0JKclJVT2RhcUNWdW10eDhmQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NzE1NDczNTkzNTQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmbjZVV242V25FeGdKRVJ4ZG4xZlJRTnZTWXRleWZDdU5VWUQyRmtsaFpoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzM4NzQyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "> `𓆩𝑅𝛩𝛭𝛯𝛩𓆪`",
  author: process.env.PACK_AUTHER || "🦋",
  packname: process.env.PACK_NAME || "𝑅𝛩𝛭𝛯𝛩",
  botname: process.env.BOT_NAME || "`𓆩𝑅𝛩𝛭𝛯𝛩𓆪`",
  ownername: process.env.OWNER_NAME || "𓆩𝑅𝛩𝛭𝛯𝛩𓆪",
  errorChat: process.env.ERROR_CHAT || "923115937575",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "Public",
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
