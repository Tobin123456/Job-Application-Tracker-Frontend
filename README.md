# Application-Tracker Frontend

A web application for visualizing and managing job applications. Users can view existing applications, create new ones, and update application states.

---

## Features

- **View Applications**: Browse all existing job applications with details like title, company, and status.
- **Create Applications**: Add new job applications directly from the UI.
- **Update Application Status**: Change the status of an application (e.g., APPLIED → INTERVIEW → OFFER → REJECTED).
- **Integrated with Backend**: Communicates with the (Application Tracker Backend)[https://github.com/Tobin123456/Job-Application-Tracker-Backend] for data persistence and authentication.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


### Docker Deployment Full Stack

The project can be deployed together with the backend by following the instruction in the deployment [project](https://github.com/Tobin123456/Job-Application-Tracker).

- If you want to use the backend as-is, no further action is needed.
- If you have branched this backend or made changes, you need to **push your updated image** to your own GitHub Container Registry and update the deployment [docker-compose](https://github.com/Tobin123456/Job-Application-Tracker/blob/main/docker-compose.yml) in the deployment project to use your own registry.

**Steps to deploy your own backend image:**
1. Login in your GitHub Container Registry with your personal access token (if not already done)
   ```bash
   echo <YOUR_GITHUB_TOKEN> | docker login ghcr.io -u <YOUR_GITHUB_USERNAME> --password-stdin
   ```
2. Build your updated docker image
   ```bash
   docker build -t ghcr.io/<YOUR_GITHUB_USERNAME>/application-tracker-frontend:1.0 .
   ```
3. Push your image to your GitHub Container Registry
   ```bash
   docker push ghcr.io/<YOUR_GITHUB_USERNAME>/application-tracker-frontend:1.0
   ```
4. Update the [docker-compose](https://github.com/Tobin123456/Job-Application-Tracker/blob/main/docker-compose.yml) to reference your own registry. For more information see this [README](https://github.com/Tobin123456/Job-Application-Tracker/blob/main/README.md)

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
