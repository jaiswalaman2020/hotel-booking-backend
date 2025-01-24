require("dotenv").config();
const express = require("express");

const app = express();
const logger = require("./utils/logger");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const AppError = require("./utils/appError");
// const globalErrorHandler = require("./controller/errorController");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

//serving static files
app.use(express.static(path.join(__dirname, "public")));
// using morgan dev
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

//set security HTTP headers
app.use(helmet());
//limit the number of requests from an IP
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/", limiter);

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());
//Data sanitization against XSS
app.use(xss());
//Prevent parameter pollution

app.use(hpp());

//defining routes
app.use("/api/v1/bookings", require("./routes/bookings.routes"));

app.use("/api/v1/cabins", require("./routes/cabins.routes"));

app.use("/api/v1/guests", require("./routes/guest.routes"));

app.use("/api/v1/seetings", require("./routes/seeting.routes"));
app.use("/api/v1/auth", require("./routes/auth.routes"));

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use(globalErrorHandler);

module.exports = app;
