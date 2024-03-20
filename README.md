# GreenZone Nuxt Application with Spring Boot Backend

Welcome to GreenZone, an application built with Nuxt.js for the frontend and Spring Boot for the backend, with PostgreSQL as the database. This README will guide you through setting up and running the application properly.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Java Development Kit (JDK) 8 or higher
- PostgreSQL

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anevski-stefan/green-zone
2. **Switch to Develop Branch**:
   ```bash
   git checkout develop
3. **Frontend Setup**:
      - Navigate to the frontend directory:
          ```bash
          cd frontend
      - Install dependencies:
          ```bash
          npm install
      - Make necessary changes in the frontend:
          - Uncomment any lines of code related to local setup (if any).
          - Ensure frontend configurations point to the correct backend URL.
3. **Backend Setup**:
      - Navigate to the backend directory:
          ```bash
          cd ../backend
      - Ensure PostgreSQL is running.
      - Create a PostgreSQL database named greenzone with user greenzone and password greenzone.
      - Start the Spring Boot application.

## Running the Application

1. **Run Frontend**:
      - Ensure you are in the frontend directory.
      - Execute the following command to start the development server:
          ```bash
          npm run dev
2. **Run Backend**:
      - Ensure you are in the backend directory.
      - Start the Spring Boot application.
3. **Access the Application**:
      - Once both frontend and backend servers are running, access the application at the specified URL.

## Support
For any issues or queries, feel free to reach out to the development team at this email: [anevskistefan11@gmail.com](mailto:anevskistefan11@gmail.com).

Thank you for using GreenZone! Happy coding!
