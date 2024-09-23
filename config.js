const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;

global.SESSION_ID = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"YFrQLrUFMk2/RZYILOyXx6oU9KXHZkkPy7WpPHw/cVg="},"public":{"type":"Buffer","data":"OmZux/aGV6EZDr9R6pfIDp1VxqjPsYMn3U3UoCsYZQ8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GGOWQO/Fx5h/Kn+jlSRevI1/7u0hxLGWROYgfOxpBl4="},"public":{"type":"Buffer","data":"PikEc0yD/JQfnBveWUscj5s+xHT6XHdDEnuyS0RYL2E="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+ICV7GArJSA+Djsp9iz0L8KY3vzJ+hPMgP3zt/PRvn4="},"public":{"type":"Buffer","data":"yfNOO8iWK+iBMWAyWgVARLJiJXtIrwAdhOMS9pL3zA0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UNF5NCF/J9QAIxCrmcX23NognvmSIH+tJctzKtAvu1o="},"public":{"type":"Buffer","data":"yEud3pbzsO0l1OP6EehSoKCuhLjjV7kItzvjbPmV1Bc="}},"signature":{"type":"Buffer","data":"Xza966FKTj4sjgSmzUHzbnm6UG5c9bwvcqd2ymoMes/ithFTWtFhMTgWkLXfTEeIgUQseLx5jn33Y2aHBkRigw=="},"keyId":1},"registrationId":38,"advSecretKey":"tjf/Kg0+ZAcxXLuO/AWkmVDHy1zhwzjH3MRBNb2o9L0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"n3oK0IgKTZSpGB6ra-F26w","phoneId":"f28471bc-5f62-4528-a492-a36bd4e6871c","identityId":{"type":"Buffer","data":"vB31qWCBESsnfI33jDy+c5zAwzU="},"registered":true,"backupToken":{"type":"Buffer","data":"mA2fp+FW9Dz9WFwP9izo5D5cTzg="},"registration":{},"pairingCode":"9MRQJYLH","me":{"id":"254728705726:70@s.whatsapp.net"},"account":{"details":"CNDr+7kBEJ2ax7cGGAQgACgA","accountSignatureKey":"ydeN+1alw3gZH9FPP1fZbEQv6N4Tn8U4+CGao9nm5gM=","accountSignature":"x2I2g6dS6Qpr29Z0e0hqQaNjKqudYTlWzkVK6bDplJrXRULscRzEF5gQfquQWI1cmfZS1btBMdty4gQaLyh/Dw==","deviceSignature":"NkQE7f6X4D48n9jQtLMvWeABHe2ot8lHnuwNiHmz+Qh6h7srfGXt78tni2RZZnDHHMU7mILQjoLG0Nj8yjAXgQ=="},"signalIdentities":[{"identifier":{"name":"254728705726:70@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcnXjftWpcN4GR/RTz9X2WxEL+jeE5/FOPghmqPZ5uYD"}}],"platform":"android","lastAccountSyncTimestamp":1727122731,"myAppStateKeyId":"AAAAALkx"}"
global.Owner = ["254728705726"]; //like 2347080968564 
global.OwnerName =  "ELIAKIM PYTHON PROGRAMMER";
global.BotName = "ELIAKIM PYTHON PROGRAMMER";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; 
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
