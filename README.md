**ToDoWebApp – Setup Guide**

Before running the project, ensure you have Java 17 or higher, Node.js & npm, and MySQL (or a compatible SQL database) installed on your system. Installing the Angular CLI globally is optional but recommended, which can be done by running npm install -g @angular/cli.

To set up the database, open MySQL or your preferred SQL client and create a new database named tododb by running CREATE DATABASE tododb;. Then, import the SQL schema from either todoappserver/src/main/resources/todo-app.sql or database/tododb.sql, which contains the required tables and sample data if provided.

For the backend configuration, navigate to the backend folder and open the src/main/resources/application.properties file. Update the database connection properties with spring.datasource.url=jdbc:mysql://localhost:3306/tododb, spring.datasource.username=root, and spring.datasource.password=9090. You can start the Spring Boot application by running the main class from your IDE or executing mvn spring-boot:run in the terminal.

To run the frontend, open a new terminal window, navigate to the frontend folder, and install dependencies using npm install. Start the Angular development server with ng serve, and then open your browser to http://localhost:4200 to access the application.

For running unit tests, if you are testing the backend (Spring Boot), open the project in your IDE, navigate to src/test/java, right-click the desired test class or method, and select Run.
