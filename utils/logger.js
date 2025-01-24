require("dotenv").config();

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [new transports.File({ filename: "app.log" })],
});

// Add console transport only in production
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: consoleLogFormat,
    })
  );
}

module.exports = logger;
