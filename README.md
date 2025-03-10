## FINTOPIO MINING BOT

![fintopio](assets/img1.jpg)

Register : [Register Here](https://fintop.io/2uLXyDu5Hi)

Let's earn $HOLD together 
Join me in farming HP points now 
Invite more friends for 10% bonus HP 
Let's earn $HOLD together 
Join me in farming HP points now 
Invite more friends for 10% bonus HP 
Let's get Rich together.

Airdop wallet, its usually jackpot.

## BOT FEATURE

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Daily Check In
- Auto Start Mining / Farming
- Auto Claim Mining / Farming
- Auto Complete Missions (Completable Missions)
- Auto Claim Mission Reward
- Auto Break And Claim Diamond Reward

## PREREQUISITE

- Git
- Node JS
- TELEGRAM APP_ID & TELEGRAM APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (REQUIRED IF YOU WANT USE SESSIONS)
- Fintopio Account , Create [Here](https://fintop.io/2uLXyDu5Hi)
Let's earn $HOLD together 
Join me in farming HP points now 
Invite more friends for 10% bonus HP) join and claim join reward

## SETUP & CONFIGURE BOT

### LINUX

1. Clone project repository
  
   ```bash
   git clone https://github.com/Rambeboy/fintopio-bot.git && cd fintopio-bot
   ```

2. Install dependencies
   ```bash
   npm install && npm i telegram@2.22.2 && npm run setup
   ```

3. Make new accounts folder
   ```bash
   mkdir -p accounts
   ```
4. Configure the bot config
   ```bash
   nano config/config.js
   ```
   And add your telegram app id and hash there.

5. (If You Use Proxy) To configure the Proxy, run
   ```bash
   nano config/proxy_list.js
   ```
   And add your proxy list there, it currently only support https proxy.
 
6. To start the app, run
   ```bash
   npm run start
   ```
   
## UPDATE BOT

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

## SETUP ACCOUNTS

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
   

## SESSION TROUBLESHOOT

If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions. 

Example Case
- Example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it or just delete all folder inside `accounts` directory with prefix `sessions-`

## QUERY TROUBLESHOOT

If your bot get eror, with some error code `401` it mean your query expired, go get new query and run bot again and choose option `4` for query modification. 

## NOTE

Don't use bot with `session` type if you using telegram account that bought from someone because it can make your telegram account deleted. instead of using `session` type, use `query` type.

This bot can use Telegram Query and Telegram Sessions. if you want to use sessions, and ever use one of my bot that use telegram sessions, you can just copy the sessions folder to this bot. Also for the telegram APP ID and Hash you can use it on another bot. If you want to use Telegram Query, get your query manually.

If you got error `Invalid ConstructorId` try to run this ```npm i telegram@2.22.2```

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.
