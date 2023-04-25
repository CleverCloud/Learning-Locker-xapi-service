# xAPI service

![Build Status](https://github.com/LearningLocker/xapi-service/actions/workflows/integration.yml/badge.svg?branch=master)
[![Renovate badge](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg)](https://renovateapp.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Join the chat at https://gitter.im/LearningLocker/learninglocker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/LearningLocker/learninglocker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

_Learning Locker is a trademark of [Learning Pool](http://learningpool.com)_

### Development: Installation

Do not use sudo for any of these installations or commands. If you're working on Learning Locker Enterprise, please make sure you've followed the [Enterprise Development Setup](https://github.com/LearningLocker/enterprise/blob/master/README.md#development-setup) first.

#### Setup Repository

1. Change to your Documents directory (or whichever directory you want to contain the repository) with `cd ~/Documents`.
1. Clone the repository with `git clone git@github.com:LearningLocker/xapi-service.git`.
1. Switch to the repository directory with `cd xapi-service`.
1. Install dependencies with `yarn`.
1. Copy the ".env.example" file in the repository into a new ".env" file.
1. Build the code `yarn build` or `yarn build --watch` if you want to make changes.
1. Start Mongo and Redis with `docker-compose up -d`. If you've followed the [Enterprise setup instructions](https://github.com/LearningLocker/enterprise/blob/master/README.md) already you won't need to do this.
1. Run the server with `yarn start` or `yarn start:dev` if you want to make changes.

### Development: Testing

Before you follow these instructions you may want to exit your `yarn start` command above with Ctrl + C. This ensures that the running app doesn't interfere with your testing by using Mongo and Redis.

1. Install dependencies with `yarn --frozen-lockfile`.
1. Start Mongo and Redis with `docker-compose up -d`. If you've followed the [Enterprise setup instructions](https://github.com/LearningLocker/enterprise/blob/master/README.md) already you won't need to do this.
1. Lint the code with `yarn lint`.
1. Build the code with `yarn build`.
1. Test the code with `yarn test-local`.
1. Stop the Mongo and Redis with `docker-compose down`. Use `-v` at the end to delete data.

### Production: Installation

To install all of Learning Locker, see the [installation documentation](http://docs.learninglocker.net/guides-installing/). To install just the xAPI service, you can follow the instructions below.

1. Clone the repository with `git clone git@github.com:LearningLocker/xapi-service.git`.
1. Switch to the repository directory with `cd xapi-service`.
1. Install dependencies with `yarn --frozen-lockfile`.
1. Build the code with `yarn build`.
1. Start the server with `yarn start`.

### Docker

You can use the steps below to install and run the xAPI service.

- Create a ".env" file using the ".env.example" file in this Github repository.
- Pull the image from DockerHub `docker pull learninglocker/xapi-service:latest`.
- Run the image in a container `docker run -d -p 8080:80 --env-file .env learninglocker/xapi-service:latest`.

## Deploy on Clever Cloud

![clever cloud logo](readme-assets/clever-cloud-logo.png)

The code has been optimized to connect to dependencies deployed on Clever Cloud and process environment variables dynamically.

To summarize : I replaced variables like `MONGO_URL` by `MONGODB_ADDON_URI`and so on. I also modified the `FS_BUCKET` variable and replaced it by `CELLAR_ADDON`.

Basically, this service can be deployed and connected to the relevant dependencies.

### UI ?

To deploy the app, I advise you commit the `/dist` repository, but I'm not sure there is any client UI, so maybe it doesn't matter.

### Steps to deploy on Clever Cloud

Follow this procedure to deploy on Clever Cloud.

#### 1. Declare the app

Click on **Create > an application**, select your preferred deployment method (Git or GitHub intgartion). Select a **Node.js** runtime. An XS size is enough to deploy.

#### 2. Add a Database

When prompted with an addon selection, select a MongoDB addon. This way, the database can be started as you configure your app.

I advise you better opt for the `XS Small Space` to get started, you'll get backups and logs, while `DEV` plans don't have that.

#### 3. Add variables

Click on **Expert** mode and add the following environment variables:

```javascript
CC_NODE_BUILD_TOOL="yarn"
CC_WEBROOT="/dist"
CELLAR_ADDON_BUCKET="xapi-storage"
ENABLE_QUEUE_PRIORITY="true"
EVENTS_REPO="redis"
EXPRESS_PORT="8080"
MODELS_REPO="mongo"
QUEUE_NAMESPACE="DEV"
REDIS_PREFIX="LEARNINGLOCKER"
STORAGE_REPO="S3"
```

Don't forget to save changes.

These are the variables this repository uses. If you use any other in-app variables, don't forget to add it **before** deploying, so the new parameters can be injected.

If you forget, just wait until the deployment is over, add it, and restart the app.

**Notes on environment variables on Clever Cloud**

There is a lot you can do on Clever cloud with environment variables. You can find all the references [in the doc](https://www.clever-cloud.com/doc/reference/reference-environment-variables/).

Do not push your code yet, you'll need to add 2 more addons.

#### 4. Add a Redis and Cellar bucket to your app

Click on **Create > an addon** and choose a Redis. A small plan is enough as well.

Repeat this operation to create a **Cellar** addon. Then, go to the Cellar addon menu, and from **addon dashboard** create a new bucket.

You are ready to connect it to your soo-to-be-deployed app! Go back to you app menu, and from **Environment variables**, add `CELLAR_ADDON_BUCKET` = `<name-of-your-bucket>`, and **update**.

On your app menu go to **Information** and copy the git command to push your code.

**Git tip**: Sometimes, when you clone from GitHub, the default branch is `main`. If `git push clever master` doesn't work, `git push clever main:master` will do the trick. This way, you can even deploy test apps from any branch on Clever Cloud without merging. This is a good way of checking the deployment process as you code.
