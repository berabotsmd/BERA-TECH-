//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Brucebera5@gmail.com";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/berabotsmd/BERA-TECH-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/Alphatrex";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254743982206";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ZDZStDUmZFbE1vNDNlTmNCL3pUNktxVGszaVNwRGJ3dm9QcVpVTkJYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTdQZTZhZ3VmVitYQ3NYZUFyVnhWMFVvanJlb2hKd0F3SEZtUThOY093ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUFBrcDYxdmlNUHhPSkMrTTJDN1FFVnc1dCs4SXZ6bW9ITktvSVZwZWxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR0xkL1EzRll5aTVWZG5vU0k3bnZoS1Mra3dRN3F0elFOdURRemFhYUdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJWUdMUlV2SDdWSEdzcEZERVJ6TUxsai9MZXprS3lPbzN3eUwzNTd4MGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJtbDdqYXRhcENGZ29mbmpsbWVqcHRLWTRzdGFsa200Z2xqY3ZqOTRJZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERaVi9SR2ZjdjY5ejdxa0FxY21XQThwRWFkYlJQN1ZmOGhIc1JQazdGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXVtTE91V1VBeE1DWW1iaGpLV3NvWHlZRCtVV3NWRTBuazJycUVTQ3NGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNvTUFsZVA2WkFRemdoUmZqcTF2S2k3WnhYN3EvUm84Z2ZFWTNsYTU0ZTZJMHJWdis4eDZ0cldOd0dKNVdnT0xFOC9jNzVlcVNQaWVobVA4OFJOaERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJKdUc3Skt3dGFQZkRkMGVkWXpvREtWUGZzd0pMRGNZTU0vNmpWYlhOY3JrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkRTBnOXVCY1JWZTk0NlJGcTV5eU13IiwicGhvbmVJZCI6IjJlNmVhMGIxLTdiZDctNDI3Yy05ODk2LTdmZmE4ZWFlYWMzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTjVwTmNQMEtCbEU1SzcrUnk4TE5yR00xNGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczgwS3JPZFNvWjJJRDR6andnM1A3UzZOUzdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFRMkRNTlYzIiwibWUiOnsiaWQiOiIyNTQ3NDM5ODIyMDY6NzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifmBgYEJFUkEgVEVDSGBgYH4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01qeDlOb0dFT2ZPLzdVR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRPcVVvc3MwUjZWeUpFOWtNSWM2ZzBrV3duUkhGaHp3RUR3akZMZU9weEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9xUm1rRjZzT2RBK0NRcjZOa0pmRUdSYjBTa0tnbVErWnVDc2RxZmd5SVovVzVQc2ZySHdYSlhhTUx5ODdoVnQ1VGI2NVZ6cHcvRHlXU282ekIwWENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3K1AzdmpacGpyYnNrZ2tsTk5KU0QzSUVtZzFOVnozZ0NWZkExTXhMc200bGhvQXU0RlVLYnBFRElpcG0xN1B0SlcwZU8xTGs3bktWUEZ6K1BZNGJCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc0Mzk4MjIwNjo3OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYVHFsS0xMTkVlbGNpUlBaRENIT29OSkZzSjBSeFljOEJBOEl4UzNqcWNRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzODUyNjYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxjbiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BERA-TECH-™`",
  author: process.env.PACK_AUTHER || "BERA-TECH-",
  packname: process.env.PACK_NAME || "B E R A",
  botname: process.env.BOT_NAME || "BERA-TECH-",
  ownername: process.env.OWNER_NAME || "Bruce Bera",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "B E R A").toUpperCase(),
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
