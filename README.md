## FINTOPIO MINING BOT

![fintopio](assets/img1.jpg)

## Fintopio Airdrop

**New Airdrops : Fintopio**

Register : [Register Here](https://fintop.io/2uLXyDu5Hi)

Let's earn $HOLD together 
Join me in farming HP points now 
Invite more friends for 10% bonus HP 
Let's earn $HOLD together 
Join me in farming HP points now 
Invite more friends for 10% bonus HP 
Let's get Rich together

Airdop wallet, its usually jackpot

## Feature

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Daily Check In
- Auto Start Mining / Farming
- Auto Claim Mining / Farming
- Auto Complete Missions (Completable Missions)
- Auto Claim Mission Reward
- Auto Break And Claim Diamond Reward

## Prerequisite

- Git
- Node JS
- TELEGRAM APP_ID & TELEGRAM APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (REQUIRED IF YOU WANT USE SESSIONS)
- Fintopio Account , Create [Here](https://fintop.io/2uLXyDu5Hi)
Let's earn $HOLD together 
Join me in farming HP points now 
Invite more friends for 10% bonus HP) join and claim join reward

## Setup & Configure BOT

### Linux

1. Clone project repository
  
   ```bash
   git clone https://github.com/Rambeboy/fintopio-bot.git && cd fintopio-bot
   ```

2. Install dependencies
   ```bash
   npm install && npm i telegram@2.22.2
   ```

3. Run
   ```bash
   mkdir -p accounts && mkdir -p app/config
   ```

4. Run
   ```bash
   cp config/config_tmp.js config/config.js && cp config/proxy_list_tmp config/proxy_list.js
   ```

5. (If You Use Telegram Sessions) To configure the app, run `nano config/config.js` and add your telegram app id and hash there.

6. (If You Use Proxy) To configure the Proxy, run `nano config/proxy_list.js` and add your proxy list there, it currently only support https proxy.
 
8. To start the app run
   ```bash
   npm run start
   ```
   
### Windows

1. Open your `Command Prompt` or `Power Shell`.

2. Clone project repository
   ```bash
   git clone https://github.com/Rambeboy/fintopio-bot.git && cd fintopio-bot
   ```

4. Install dependencies
   ```bash
   npm install && npm i telegram@2.22.2
   ```

5. Navigate to `fintopio-bot` directory. 

6. Make new folder named `accounts`.

7. Manual copy the `config` folder to `/app` folder. 

8. Navigate to `app/` folder and paste the the `config` folder before.

9. Navigate to `config` folder.

10. At `/app/config/` folder, rename the `config_tmp.js` to `config.js` also the `proxy_list_tmp.js` to `proxy_list.js`.

11. To configure the app, open `config.js` and add your telegram app id and hash there.

12. To configure the Proxy, open `proxy_list.js` and add your proxy list there, it currently only support https proxy.

13. Now back to the `fintopio-bot` folder

14. To start the app open your `Command Prompt` or `Power Shell` again and run `node app/index.js`.

## Update Bot

To update bot follow this step :

1. Run
   ```bash
   git pull
   ```
   or
   ```bash
   git pull rebase
   ```
   if error run
   ```bash
   git stash && git pull
   ```

2. Run
   ```bash
   npm update
   ```

3. Start the bot

## Setup Accounts

1. Run bot `npm run start`

2. Choose option `1` to create account

3. Choose account type `Query` or `Sessions`

4. `Session` Type

- Enter Account Name

- Enter your phone number starting with countrycode ex : `+628xxxxxxxx`

- You will be asked for verification code and password (if any)

- Start The bot Again after account creation complete

5. `Query` Type

- Enter Account Name

- Enter Telegram Query (you can get query by opening bot app on browser > inspect element > storage / application > session storage > telegram init params > copy tg web app data value)

- Start The bot Again after account creation complete

- After bot started choose option 3 start bot
   

## Session Troubleshoot

If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions. 

Example Case
- example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it or just delete all folder inside `accounts` directory with prefix `sessions-`.

## Query Troubleshoot

If your bot get eror, with some error code `401` it mean your query expired, go get new query and run bot again and choose option `4` for query modification. 

## Note

Don't use bot with `session` type if you using telegram account that bought from someone because it can make your telegram account deleted. instead of using `session` type, use `query` type.

This bot can use Telegram Query and Telegram Sessions. if you want to use sessions, and ever use one of my bot that use telegram sessions, you can just copy the sessions folder to this bot. Also for the telegram APP ID and Hash you can use it on another bot. If you want to use Telegram Query, get your query manually.

if you got error `Invalid ConstructorId` try to run this ```npm i telegram@2.22.2```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
