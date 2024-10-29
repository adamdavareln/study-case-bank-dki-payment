import { createLogger, format, transports } from "winston";
import "winston-daily-rotate-file";

const logger = createLogger({
	level: "info",
	format: format.json(),
	defaultMeta: { service: "payment-service" },
	transports: [
		new transports.File({ filename: "error.log", level: "error" }),
		new transports.File({ filename: "combined.log" }),
	],
});

export default logger;
