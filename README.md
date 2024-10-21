# This is a playwright typescript project, which applies POM design pattern.

**To secure the crednetials**, you can update .env file with your valid credentials, for example you should replace username and password with your valid credentials.
```
USERNAME_STAGE=username
PASSWORD_STAGE=password
```

Tests can be run through one of the following commands which are configured in package.json file.
```
npm run test:addArtwork-chrome-headed  >> this is used to run the addArtWork tests in chrome browser in headed mode.
npm run test:addArtwork-chrome-headed-10times >> this is used to run the addArtWork tests in chrome browser in headed mode 10 times to check if the tests are flaky or not.
npm run test:addArtwork-allBrowsers-headed  >> this is used to run the addArtWork tests in chrome, firefox and webkit browsers in headed mode.
```

# Also you can write these commands to update the env variables before run
```
$env:USERNAME_STAGE="username"; $env:PASSWORD_STAGE="password";  npm run test:addArtwork-chrome-headed
```
