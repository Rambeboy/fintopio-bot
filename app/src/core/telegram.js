import input from "input";
import { Helper } from "../utils/helper.js";
import { Api, TelegramClient } from "telegram";
import { StoreSession } from "telegram/sessions/StoreSession.js";
import logger from "../utils/logger.js";
import { FloodWaitError } from "telegram/errors/RPCErrorList.js";
import { accounts } from "../../accounts/accounts.js";  // <--- Perubahan pada impor
import { HttpsProxyAgent } from "https-proxy-agent";

export class Telegram {
  storeSession;

  constructor() {
    this.accountName = "accounts";
    this.url = "https://fintopio-tg.fintopio.com/";
    this.bot = "fintopio";
  }

  async init() {
    try {
      await this.onBoarding();
    } catch (error) {
      console.log(error);
      logger.error(`${JSON.stringify(error)}`);
      throw error;
    }
  }

  async onBoarding() {
    try {
      let ctx = "Welcome to Fintopio Mining Bot \nBy : Nofan Rambe \n \nLet's get started.\n\nYour Session List:\n";
      const accountList = Helper.getSession("accounts");

      ctx += accountList.length === 0 ? "<empty>" : accountList.map((sess, index) => `- ${sess}`).join("\n");
      ctx += "\n\nPlease Choose a menu: \n";
      ctx += "\n1. Create Account \n2. Reset Account \n3. Start Bot\n4. Query Modification\n \nInput your choice: ";

      const choice = parseInt(await input.text(ctx));

      switch (choice) {
        case 1:
          await this.accountType();
          break;
        case 2:
          Helper.resetAccounts();
          await Helper.delay(3000);
          await this.onBoarding();
          break;
        case 3:
          if (Helper.getSession(this.accountName)?.length === 0) {
            console.info("You don't have any accounts, please create one first.");
            await this.onBoarding();
          }
          break;
        case 4:
          await this.queryModification();
          break;
        default:
          console.error("Invalid input, Please try again.");
          await this.onBoarding();
      }
    } catch (error) {
      throw error;
    }
  }

  async queryModification() {
    try {
      const accountList = Helper.getSession("accounts");
      const queryAccountList = accountList.filter((item) => item.includes("query"));

      if (queryAccountList.length === 0) {
        console.log("You don't have any Query Account.");
        await this.onBoarding();
        return;
      }

      let ctx = "Your Query Account List:\n\n" + queryAccountList.map((acc, i) => `${i + 1}. ${acc}`).join("\n");
      ctx += "\n\nPlease select a Query Account for modification:";

      const choice = parseInt(await input.text(ctx));

      if (choice > 0 && choice <= queryAccountList.length) {
        const account = queryAccountList[choice - 1];
        this.accountName = `accounts/${account}`;

        const oldQuery = Helper.readQueryFile(`${this.accountName}/query.txt`);
        const newQuery = await input.text(`Old Query: ${oldQuery}\n\nPlease enter the new query:`);

        await Helper.saveQueryFile(this.accountName, newQuery);
        await Helper.delay(3000);
        await this.onBoarding();
      } else {
        console.error("Invalid input, Please try again.");
        await this.queryModification();
      }
    } catch (error) {
      throw error;
    }
  }
}
