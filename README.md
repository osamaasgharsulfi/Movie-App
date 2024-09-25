# Movie App

Welcome to the Movie App! This project is designed to provide a platform for users to rate and recommend movies based on their preferences.

## Features

- User authentication and management
- Movie rating system
- Movie recommendations based on user ratings
- Categorization of movies

## Tech Stack

- **Backend**: NestJS
- **Database**: PostgreSQL (with Prisma ORM)
- **Authentication**: JWT (JSON Web Tokens) using Guards
- **Frontend**: Next JS

## Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- PostgreSQL
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/osamaasgharsulfi/movie-app.git
cd movie-app

2. Install Dependencies
Navigate to the backend directory and install the necessary dependencies:
cd .\backend\User-service\
npm install

3. Set Up the Database
Create a PostgreSQL database for the application.
Create a .env file in the backend directory and set up your environment variables:

DATABASE_URL="postgresql://postgres:1234@localhost:5432/postgres?schema=public"
JWT_SECRET="jwt_secret"

4. Run Migrations and Seed the database with script i had written in package.json file
Run the following script to create the necessary tables in your database and seed populate your database with initial data:
npm run prisma:migrate
npm run db:seed

5.Start the Application
To start the backend server, run:
npm run start:dev
The application will be available at http://localhost:3000

6.Repeat the same process for application recommendation-service also 
This The application will be available at http://localhost:4000

7.Testing the API
You can test the APIs using Postman.

Import the provided Postman collection file into your Postman.
Start testing the endpoints as per your requirements.
Example Postman Endpoints
User Signup: POST /auth/signup
User Login: POST /auth/login
Get All Categories: GET /categories/getAllCategories
Rate Movie: POST /ratings
Get Recommendations: GET /recommendation/user/:userId


Contribution
Contributions are welcome! If you want to contribute to this project, please fork the repository and create a pull request.

Contact
For any questions, feel free to reach out to me at asgharusama4@gmail.com.