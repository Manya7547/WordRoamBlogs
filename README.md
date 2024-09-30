# Stack Overview:

1. Appwrite:

- Serving as the backend-as-a-service, Appwrite provides authentication, database, storage, and functions for the application.
- It helps in managing the backend without writing boilerplate server-side code.

2. TinyMCE:

- A rich text editor used to create and format blog content.
- Allows users to easily write, edit, and format text, including adding links, images, and other rich content elements.

3. react-router-dom:

- Used for client-side routing, providing a smooth navigation experience between different pages or sections of the application.
- Enables features like nested routes and dynamic routing, contributing to a single-page application (SPA) experience.

4. html-react-parser:

- Converts HTML strings into React components.
- This helps in rendering the rich text content (created using TinyMCE) directly in React, maintaining interactivity and responsiveness.

5. Redux:

- Manages the global state of the application, helping in sharing data between different components effectively.
- Useful for handling application-wide state such as user authentication status, blog posts, and editor settings.

6. react-hook-form:

- Used for form management, making it easier to handle input validation, submission, and error messages.
- Works efficiently with React hooks, providing a simple and effective way to manage user input, especially for creating and editing blog posts.

### Environment Variables

- If you're using Create React App, environment variables should be prefixed with REACT*APP*:

```javascript
console.log(process.env.REACT_APP_VARIABLENAME);
```

- If you're using Vite, the environment variables should be prefixed with VITE\_:

```javascript
console.log(import.meta.env.VITE_VARIABLE_NAME);
```
