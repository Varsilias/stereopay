## StereoPay Task Assessment

There are 2 ways to setup this project on your Machine

- With Docker
- Without Docker

### Setup Instructions - Without Docker

_NB:_ **This setup assumes that you have some kind of MySQL database visualizer installed on your machine an example would be `Sequel Pro`, `MySQL Workbench` or `PhpMyAdmin`**

**Also these tools work with a locally installed version of a `mysql server` which runs in the background**

[Checkout this link on how to install Xampp & PhpMyAdmin](https://www.wikihow.com/Install-XAMPP-for-Windows)

1. Open your terminal and clone this project by running the command `git clone
git@github.com:danielokoronkwo-coder/stereopay.git`
2. Navigate into the project folder by running the command `cd stereopay`
3. Create a .env file by copying the contents of `.env.example` to `.env`. run the command `npm run cp:env` or `yarn cp:env`
4. If **3** above does not work manually create the .env file at the root of the project folder and proceed to copy the contents of the `.env.example` file into your newly created `.env` file
5. Fill the rest of the credentials in the **Database** section of the `.env` file with your Database credentials
6. Run `npm install` or `yarn` to install all the project dependencies
7. Start the local development server by running the command `yarn start:dev` or `npm run start:dev`
8. If everything goes as planned your database will have a new table named **media** created automatically in the database you created earlier
9. Seed the database with test data by running the command `npm run seed` or `yarn seed`
10. Sip your coffee while you test.

### Setup Instructions - With Docker

_NB:_ **This setup assumes that you have Docker and Docker compose installed on your machine**

1. Open your terminal and clone this project by running the command `git clone
git@github.com:danielokoronkwo-coder/stereopay.git`
2. Navigate into the project folder by running the command `cd stereopay`
3. Create a .env file by copying the contents of `.env.example` to `.env`. run the command `npm run cp:env` or `yarn cp:env`
4. If **3** above does not work manually create the .env file at the root of the project folder and proceed to copy the contents of the `.env.example` file into your newly created `.env` file
5. Fill the rest of the credentials in the **Database** section of the `.env` file with your Database credentials
6. Take note of the credentials you added, you will need in later stages of this setup
7. Run the command `docker compose up` to boot up the **MySQL server(database)** and **adminer**, this command will take a while depending on the speed of your machine and the strength of your network
8. If all went well login to **ADMINER** by visiting **http://localhost:8080** in your browser of choice and login with the **credentials** you filled in the `.env` file earlier
9. Back to the project directory, run `npm install` or `yarn` to install all the project dependencies
10. Start the local development server by running the command `yarn start:dev` or `npm run start:dev`
11. If everything goes as planned(local development server starts successfully) when you **refresh** the **adminer** page you will have a new table named **media** created automatically
12. Seed the database with test data by running the command `npm run seed` or `yarn seed`
13. Sip your coffee while you test.
