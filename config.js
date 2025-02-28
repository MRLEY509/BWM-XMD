const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUy5KiSBT9l9xqNYmAiBEVMQiKliKggFZN9CKBBFMwQUh8VbibXW86ZjWb/on5svqECeoRVYvpnppdkpmce/Kcc+8joDmp8BSfQf8RFCU5IIabJTsXGPTBoI5jXII2iBBDoA/OE1zuVV3o5dOySh0dDqA5cCaqfDnyi2V94VKFzXc+l47DW3Btg6IOMhL+AnA8lKp87tL04SHHymQANeR7KmVdnVd03Y+XrmdFIzlWoHkLrg0iIiWhybDY4B0uUTbFZxuR8nP0O6pd3hmaUUcJn3VTbul3WpxXuO7ZbUnufLWArXOls70xhJ+jL0dUE+PlKp5H7jL3WGyNizASHHrquJztWBxbrXfLmUYhfKFfkYTiaBJhygg7f1r3lQ29Qepx20DQ7XlG0lV9mcj+7C4NqLNv9UaIMV5IDT1zPkc8PuoPujLyXDiRwrguOY1wB8G4s+d7gwtdX7lb7SXKnXR3+JG4Xb5lJf0/ui/NZDKyyVBQqsRNDmos90QF+v5mnSj7ZDGZHx7ukVd42vr4Ofpmq9BrzRvlMKPKHAsnr2vpwb1O9BEdno05Fbeu5XudYGG+00esLn/Fsgi5YdL1pbQ37yCr9nzZ40PGJZlnt6KQX4yirdWVW9vLqSz05SqfEoznvO+U5cnaStnMX3rjzj3bYLELhyrpztzdJklun1+U4vMkAn3+2gYlTkjFSsRITp/3ukoboOiwxGGJ2bO8oEBBHRwLeTJrDcbxSoCMYwfD4jvdg97dQclDTIYum4163i1og6LMQ1xVOBqTiuXl2cRVhRJcgf7vX9uA4hN7Ma4pJ/BtEJOyYh6tiyxH0Zurb4coDPOasuWZhlqzwCXow/dtzBihSdXoWFNUhhtywNoGsQr0Y5RV+NoGET6QEDd4wK57Ij4eXCeYavEpcKdmLRVqQ3mT05crvIhCqRd1bgQZBjcigvimJ0riDQ8RxELU4xGPQRuQ155p/vmphTa9aCvxqN57zti1KHTSwlI4MjhZ3rMNL9rjEkegz8oat0GAwrQu3DzF9Be4a8OoV0LKn/CxO7X8raD2jrScrGfq8APui6eg//g+p7Q8avAWgjoYLRwRtMHuOYKkebkEFZEXeEVW+D4v/lZ9OTY6oqL4QjEDbUBRcxk8/fnt76cf3789/fj+x9OP7381303RV0cauAgzRLIK9IF2R6cnOx0PZ6vLRhYNQx0mqpY0kr85+NYKL1HzBxdkbvbBaiZpRu+BQfM4WQv2qIyNzSQOyGTrwGp/t9aP8PZfQBoDu+aDVCuCPjPzbuyOaBnK626Xa4XGwK46B70n9iILnazRkFtL65CNpnRazol2n9QXzTzsT+IptIx9Fm3RwoaOoo7v9ONtU+0lSR+LmcHR4+ngfnjeDxg/Vs2kw467lM8gFeRoiwYmHJjQte8fatxaHJeaYxgRmmIvc7u1XqzkgM+0c5WdNN3KUTW3yv10+9qkz0Miex3O5Ll9Hl9zFxP8POteLfkv5947AF7bHyBeh+dPUjbwnbCznaAdT1rO5mAEkW5qI+VyQsIpX447IpnA+WxK/GNvDq7Xr21QZIjFebkDfVDtAgTaIEMVU9872CU7XDG0K0Cfl0UoS7IoStd/AGSOvBX3BwAA',
    PREFIXE: process.env.PREFIX || "📍",
    OWNER_NAME: process.env.OWNER_NAME || "LEY-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " LEY-MD",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'LEY-MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/qcmwzl.jpeg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '3',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || '1',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

