# Setting up

Run `npm install` then run `npm run setup`. That will bootstrap Lerna, set up links and do the initial build. After that run `npm test` to run the tests. All three tests will run, but the tests for `Three` should fail for some reason. Possibly due to how Karma is handling symlinks.