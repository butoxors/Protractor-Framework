import * as log4js from "log4js";

export default class Logger {

    static getLogger() {
        let date = new Date();
        log4js.configure({
            appenders: { customLogger: { type: 'file', filename: 'target/' + date.getUTCDate() + '-log.log'} },
            categories: { default: { appenders: ['customLogger'], level: 'info' } }
        });
        let logger = log4js.getLogger();
        logger.info("Looger was succesfully configured");
        return logger;
    }
}

module.exports = Logger;