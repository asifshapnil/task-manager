# task-manager

Task Manager App
This project is a task manager application built with Nest.js, PostgreSQL, and authenticated with JWT tokens. It allows users to manage tasks and categories, resembling functionalities similar to Jira.

NB: DB is deployed to render.com. env is added to git. So not need to bother about db and env. 

Features
--------------------------------------------------------------------------------------------------
User Authentication: JWT token-based authentication system.
Categories: Create, update, and delete categories.
Tickets: Manage tickets within categories, akin to tasks in a task management system.
Database: Uses PostgreSQL to store categories and tickets data.

Technologies Used
--------------------------------------------------------------------------------------------------
Nest.js: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
TypeORM: ORM (Object-Relational Mapping) library for TypeScript and JavaScript (ES7, ES6, ES5).
PostgreSQL: Open-source relational database.
JWT: JSON Web Tokens for secure authentication.
Deployed On: Render.com for hosting the application.

-------------------------------------------------------------------------------------------------
Getting Started
-------------------------------------------------------------------------------------------------

Prerequisites
--------------------------------------------------------------------------------------------------
Node.js installed on your local machine
PostgreSQL database (can be set up locally or on a cloud platform like render.com)
Nest.js CLI globally installed (npm install -g @nestjs/cli)
Installation

Clone the repository:
--------------------------------------------------------------------------------------------------------
git clone https://github.com/asifshapnil/task-manager.git
cd task-manager
Install dependencies:
npm install

Usage
Running the App
To start the Nest.js server:
npm run start

The server will start running at http://localhost:3000.

Deployment
The application is deployed on Render.com using PostgreSQL for database storage.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.



Acknowledgements
Mention any resources or individuals that helped or inspired you during the development of this project.
Contact
For questions or support, contact [Md Asif Adham] at asifshapnil@gmail.com.