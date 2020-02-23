To check the test you have to:
1. Be sure that node.js is installed on youor machine
2. Make sure that npm is recognised at your machine - simply you can type
npm --version
if version is returned it means that npm is working
3. Clone the project at your local machine
4. In command prompt simply pass to project location
5. Run command npm install to download all required node modules
6. Run application via command npm run start
7. In separate command prompt window run protractor tests via command
npm run protractor:localhost
8. In case of issue with running protractor do the following:
- delete node_modules
- delete package-lock.json
- run 'npm install'
- run 'npm install -g webdriver-manager'
- run 'npm run webdriver-manager update'
- repeat step 6
- repeat step 7