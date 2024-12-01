### Personal Notes Manager
A full-stack Notes Manager application where users can securely sign up, log in, and manage their personal notes. The app features user authentication, note filtering, and user-specific data storage.

## Features

1. User Authentication: Secure signup and login using JWT.
2. User-Specific Notes: Each user's notes are stored and managed separately.
3. Filter Notes: Filter notes by category or search by title.
4. Responsive UI: Designed for both desktop and mobile devices.
5. Secure API: Protects routes with authentication middleware.

## Tech Stack
# Frontend

1. React.js: For building the user interface.
2. Axios: For making HTTP requests to the backend.
3. Bootstrap: For responsive and user-friendly design.

# Backend

1. Node.js: Runtime environment for server-side logic.
2. Express.js: Web framework for handling API routes.
3. MongoDB: Database to store user and notes data.
4. Mongoose: For MongoDB object modeling.
5. JWT: Secure user authentication with JSON Web Tokens.

## API Endpoints
# Authentication Routes

1. POST /auth/signup: Register a new user.
2. POST /auth/login: Log in an existing user and receive a JWT token.

# Notes Routes (Protected)
4. GET /notes: Retrieve all notes for the logged-in user (supports filters).
5. POST /notes: Create a new note (user-specific).
6. PUT /notes/:id: Update a specific note.
7. DELETE /notes/:id: Delete a specific note.

## Usage

1. Sign Up: Register a new account on the signup page.
2. Log In: Log in with your credentials to receive a secure session token.
3. Manage Notes:
    1. Add, edit, or delete notes.
    2. Filter notes by category or search by title.
4. Secure Access: Only authenticated users can access the application.

## Troubleshooting
# Common Errors

1. Invalid or Expired Token:
    1. Ensure the token is correctly stored in Cookies and sent with the Authorization header. 
    2. Check the JWT_SECRET value in .env.
2. Database Connection Issues:
    1. Verify the DB_URI is correct and accessible.
    2. Ensure MongoDB service is running.
3. User-Specific Notes Not Appearing:
    1. Verify that userId is correctly populated from the token in the authenticate middleware.

## Future Enhancements
1. Implement note sharing with other users.
2. Add categories for better note organization.
3. Include additional security features like rate limiting and email verification.