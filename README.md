# Blog cron jobs and logging

The objective of this assignment is for you to practice building and using cron jobs and logging using Node.js. We will build on top of our previous blog app which we worked on in module 4.

### Cron jobs

`cron` provides a way to repeat a task at a specific time interval. There may be repetitive tasks such as logging and performing backups that need to occur on a daily or weekly or monthly basis.

### Logging

Good logging practices are crucial for monitoring and troubleshooting your Node.js servers. They help you track errors in the application, discover performance optimization opportunities, and carry out different kinds of analysis on the system (such as in the case of outages or security issues) to make critical product decisions.

## Setup

Like always, the first steps for this assignment are:

1. Open your terminal and navigate to your dedicated assignments folder.
2. Then clone this assignment repo on your local machine.
3. Now follow the instruction below use docker.

## Working with docker

This app is bootstrapped with `docker` and `docker-compose`. It containerizes the server, as well as the database. The database comes with predefined data for testing purposes.

### To start the server

Run the command `yarn && yarn start`. This will install all the dependencies and build the docker image.

### To install packages

When you run `yarn add PACKAGE` the package will be installed in docker as well automatically. However, if you run into issues, you need to stop the server first with `yarn run stop` then you can run `yarn run build` to rebuild the docker image and start again.

### To prune the containers and data

> ⚠️ WARNING: This is a destructive command that would delete the containers and all the data inside like database data, and uploads.

You can run `yarn run prune` to shut down the server and delete all the volumes associated with it. This serves as a start fresh command, that will return your server environment to its original. It will not affect your code changes though.

## Starter code

You should be familiar with the starter code since we're using our previous blog app fully working with authentication and CRUD implemented. In this assignment, you will add your code to the related files inside the `services` folder.

### Logging

We're going to use [winston](https://www.npmjs.com/package/winston) to log the errors and info. For this purpose, 

Each message should definitely include the following information:

- The log type (such as Error: Failed sign-in attempt or Info: New user signup)
- The log message details (This can include user information, request information, etc.)

## Logging requirements

In `services/logger.js`, you will need to implement the following:

### Part 1: Log every failed sign-in attempt to the console

A log message should be sent when a user tries to sign in with an invalid email or password.

### Part 2: Log every new user sign up to a file

A log message should be sent when a new user signs up to the application.

### Part 3: Log every change to a blog or author to a file

A log message should be sent when any blog or author is updated or deleted.

### Part 4: Log every invalid request to the console

A log message should be sent when an invalid request is made to the application.

You can import and use the logger service file and its functions in different parts of the codebase as is required for the above features.

---

## Cron jobs requirements

We're going to use [node-cron](https://www.npmjs.com/package/node-cron) to schedule the cron jobs and [nodemailer](https://www.npmjs.com/package/nodemailer) to send the emails.

In `services/cron.js` and `services/mail.js`, you will need to implement the following:

### Part 1: Create a cron job to send a newsletter email

A newsletter email that includes the latest blogs and articles should be sent to all users every day at 09:00 AM.

### Part 2: Create a cron job to check and log the server status

The server status should be checked every hour and the status log message should be sent to the logger.

### Part 3: Create a cron job to count and log the number of new articles

Count the number of newly published articles at the end of every day and send the number in a log message.

## Submission

Once you're ready to submit the assignment, follow these steps on your terminal:

1. Stage your changes to be committed: `git add .`
2. Commit your final changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.
