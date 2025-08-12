ToDoWebApp – Setup Guide
Prerequisites
Java 17 or higher

Node.js & npm

MySQL (or compatible SQL database)

(Optional) Angular CLI — install with: npm install -g @angular/cli

1. Set Up the Database
Open MySQL or any SQL client.

Create a new database:
CREATE DATABASE tododb;

Import the SQL schema from one of these paths:

todoappserver/src/main/resources/todo-app.sql

database/tododb.sql
(Contains required tables and sample data)

2. Configure the Backend
Navigate to the backend folder.

Open: src/main/resources/application.properties

Update database settings:

spring.datasource.url=jdbc:mysql://localhost:3306/tododb

spring.datasource.username=root

spring.datasource.password=9090

Start the Spring Boot application:

Option 1: Run the main class from your IDE

Option 2: In terminal, run mvn spring-boot:run

3. Run the Frontend
Open a new terminal and navigate to the frontend folder.

Install dependencies: npm install

Start the Angular development server: ng serve

Open your browser and go to: http://localhost:4200

4. Run Unit Tests
Backend (Spring Boot)
Open the project in your IDE (IntelliJ, Eclipse, etc.)

Navigate to: src/test/java

Right-click the test class or method → select Run
