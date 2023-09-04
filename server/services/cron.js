const cron = require('node-cron');
const logger = require('./logger');
const {
  sendNewsletterEmail,
  checkServerStatus,
  countNewArticles,
} = require('./mail');

// Create a cron job to send a newsletter email every day at 09:00 AM
cron.schedule('* * * * *', () => {
  sendNewsletterEmail()
    .then(() => {
      logger.logNewUserSignup('Newsletter email sent');
    })
    .catch((error) => {
      logger.logFailedSignInAttempt(
        `Failed to send newsletter email: ${error}`
      );
    });
});

// Create a cron job to check and log the server status every hour
cron.schedule('0 * * * *', () => {
  checkServerStatus()
    .then((status) => {
      logger.logBlogOrAuthorChange('Server Status', `Status: ${status}`);
    })
    .catch((error) => {
      logger.logFailedSignInAttempt(`Failed to check server status: ${error}`);
    });
});

// Create a cron job to count and log the number of new articles at the end of every day
cron.schedule('0 0 * * *', () => {
  countNewArticles()
    .then((count) => {
      logger.logBlogOrAuthorChange(
        'New Articles Count',
        `Number of new articles: ${count}`
      );
    })
    .catch((error) => {
      logger.logFailedSignInAttempt(`Failed to count new articles: ${error}`);
    });
});
