![image](https://user-images.githubusercontent.com/55165113/231558197-7f3fc1b7-2b4e-463f-8ce4-d87a553a9408.png)
# EzBook. Your one stop hotel booking app.

## Installation
Make sure the repo is locally cloned before installation.
### NodeJS + NPM
Install [npm](https://nodejs.org/en/download) here if it is not installed on your system.\
To verify the installation, use `node -v` and `npm -v` in your terminal. 

### MySQL
Install [MySQL](https://dev.mysql.com/downloads/installer/) if it not on your system.\
During setup, **make sure the username and password is root and password, respectively. The DB may not work properly if you do not. All settings are default.**

Once the wizard is completed, you should have MySQL Workbench on your station. 

In workbench, login to the default database that was created. Then goto `File > Open SQL Script` Navigate to `backend/hotelProjectInit.sql` and load the script. Execute the script once loaded by clicking on the lighting bolt symbol. This should create the database with the needed data, views, and triggers. 

### Start the backend
Navigate to `backend` in your terminal. Then run:
```
npm i
npm start
```
This should start the backend. To verify, make sure the terminal says `Connected to db!`

### Start the frontend
Navigate to `hotel-app` in your terminal. Then run:
```
npm i
npm start
```

The website should now be running on [http://localhost:3000/](http://localhost:3000/)

## Debugging

If there are any issues with the database, run this SQL query:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
This already exists in the SQL script, but sometimes for new installations it doesn't execute. Restarting the workstation also seems to fix some problems. 


