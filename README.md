# GreenZone - Modern Web Application

Welcome to GreenZone, a modern web application built with Nuxt 3 for the frontend and Spring Boot for the backend, using PostgreSQL as the database.

## Tech Stack

### Frontend
- Nuxt 3
- Vue.js
- TypeScript
- Tailwind CSS

### Backend
- Spring Boot
- PostgreSQL
- Maven

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v16.x or higher)
- npm (v8.x or higher)
- Java Development Kit (JDK) 17 or higher
- PostgreSQL

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anevski-stefan/green-zone
   ```

2. **Frontend Setup**:
   ```bash
   cd front-end
   npm install
   ```

3. **Backend Setup**:
   ```bash
   cd back-end
   ./mvnw clean install
   ```

4. **Database Setup**:
   - Ensure PostgreSQL is running
   - Create a database named `greenzone`
   - Configure database connection in backend application properties

## Running the Application

1. **Start the Frontend**:
   ```bash
   cd front-end
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

2. **Start the Backend**:
   ```bash
   cd back-end
   ./mvnw spring-boot:run
   ```
   The backend API will be available at `http://localhost:8080`

## Support

For any issues or queries, feel free to reach out to the development team:
- Email: [anevskistefan11@gmail.com](mailto:anevskistefan11@gmail.com)

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
