const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(), // Console transport for logging to the console
    new winston.transports.File({ filename: 'logs.log' }), // File transport for logging to a file
  ],
  format: winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to each log entry
    winston.format.printf(
      (info) => `${info.timestamp} [${info.level}]: ${info.message}`
    ) // Format the log message
  ),
});

// Log every failed sign-in attempt to the console
function logFailedSignInAttempt(userEmail) {
  const message = `Error: Failed sign-in attempt - User email: ${userEmail}`;
  logger.error(message);
}

// Log every new user sign up to a file
function logNewUserSignup(userData) {
  const message = `Info: New user signup - User data: ${JSON.stringify(
    userData
  )}`;
  logger.info(message);
}

// Log every change to a blog or author to a file
function logBlogOrAuthorChange(changeType, data) {
  const message = `Info: ${changeType} - Data: ${JSON.stringify(data)}`;
  logger.info(message);
}

// Log every invalid request to the console
function logInvalidRequest(request) {
  const message = `Error: Invalid request - Request: ${JSON.stringify(
    request
  )}`;
  logger.error(message);
}

module.exports = {
  logFailedSignInAttempt,
  logNewUserSignup,
  logBlogOrAuthorChange,
  logInvalidRequest,
};

const logger = require('./services/logger');

// Example usage
logger.logFailedSignInAttempt('user@example.com');
logger.logNewUserSignup({ name: 'John Doe', email: 'john.doe@example.com' });
logger.logBlogOrAuthorChange('Blog Updated', { id: 1, title: 'New Blog Post' });
logger.logInvalidRequest({ method: 'GET', path: '/api/invalid' });
