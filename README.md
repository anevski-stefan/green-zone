# Green Zone

A full-stack application built with Spring Boot backend and Nuxt.js frontend.

## Project Structure

The project is divided into two main parts:
- `back-end/`: Spring Boot application
- `front-end/`: Nuxt.js application

## Backend (Spring Boot)

### Technologies Used
- Java 17
- Spring Boot 3.2.2
- Spring Data JPA
- PostgreSQL
- Lombok
- Maven

### Database Configuration
The application uses PostgreSQL with the following default configuration:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/greenzone
spring.datasource.username=greenzone
spring.datasource.password=greenzone
```

### Running the Backend

1. Make sure you have Java 17 installed
2. Navigate to the `back-end` directory
3. Run the application using Maven:
```bash
./mvnw spring-boot:run
```

The backend server will start on `http://localhost:8080`

## Frontend (Nuxt.js)

### Technologies Used
- Nuxt.js 3
- Vue.js 3
- TypeScript

### Running the Frontend

1. Navigate to the `front-end` directory
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## API Endpoints

### Users
- POST `/users` - Create a new user
  - Request body: String (user name)
  - Response: User object
    ```json
    {
      "id": "Long",
      "name": "String"
    }
    ```

## Development Setup

### Prerequisites
- Java 17
- Node.js (LTS version recommended)
- PostgreSQL
- IDE (recommended: IntelliJ IDEA, VS Code)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/anevski-stefan/green-zone.git
   cd green-zone
   ```

2. Set up PostgreSQL database:
   - Create a database named `greenzone`
   - Configure username and password as `greenzone`
   - Make sure PostgreSQL is running on port 5432
3. Start the backend server:
   ```bash
   cd back-end
   ./mvnw spring-boot:run
   ```
4. Start the frontend development server:
   ```bash
   cd front-end
   npm install
   npm run dev
   ```
5. Access the application at `http://localhost:3000`

### IDE Configuration
- If using IntelliJ IDEA:
  - Open the project root directory
  - Make sure Java 17 SDK is configured
  - Enable Spring Boot and TypeScript support
- If using VS Code:
  - Install recommended extensions for Java, Spring Boot, and Vue.js
  - Configure Java 17 as the default JDK
