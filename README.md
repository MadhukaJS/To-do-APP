# ToDoWebApp

How to Run the Project

Make sure you have the following installed:

Java 17+ ,
Node.js & npm ,
MySQL (or compatible SQL database) ,
(Optional) Angular CLI for development (npm install -g @angular/cli) ,
---------------------------------- 
Step 1: Set Up the Database 
Open MySQL or your preferred SQL tool. 
Create a new database named tododb. 

Import the SQL schema file provided in one of the following locations: 

todoappserver/src/main/resources/todo-app.sql 
or 
database/tododb.sql  

This file contains the required table structure and sample data (if any). 

---------------------------------------------------------------------------------------
step 2: Configure the Backend 
Navigate to the backend directory. 

Open src/main/resources/application.properties. 

Update the database connection properties: 
spring.datasource.url=jdbc:mysql://localhost:3306/tododb, 
spring.datasource.username=root, 
spring.datasource.password=9090, 
start the springboot application.
----------------------------------------------------------------------------------------

Step 3: Run the Frontend 
Open a new terminal and navigate to the frontend directory. 

Install dependencies:
npm install,

Start the Angular development server: 

ng serve 
Open your browser and visit: 
http://localhost:4200 
-----------------------------------------------------------------------------------------

run unit tests in springboot,

Using an IDE (e.g., IntelliJ IDEA, Eclipse)
Open the project in your IDE.

Navigate to src/test/java.

Right-click the test class or method you want to run.

Click Run to execute tests individually or as a suite.
-------------------------------------------------------------------------------------------

## Running unit tests in angular

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
