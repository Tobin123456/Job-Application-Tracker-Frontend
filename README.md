# ApplicationTrackerFrontend
A website which visualizes existing applications, their properties like title, company and state. Allows for creating additonal applications and changes of application state.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Docker Deployment
The project can be deployed together with the backend in deployment [project](https://github.com/Tobin123456/Job-Application-Tracker). If you want to use the frontend as is, you do not need to do anything. If you branched the frontend, you need to push the updated image to your own GitHub Container Registry and update the [docker-compose](https://github.com/Tobin123456/Job-Application-Tracker/blob/main/docker-compose.yml) in the deployment [project](https://github.com/Tobin123456/Job-Application-Tracker) to use your own registry.
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
4. Update the [docker-compose](https://github.com/Tobin123456/Job-Application-Tracker/blob/main/docker-compose.yml) to reference your own registry. For more information see the this [README](https://github.com/Tobin123456/Job-Application-Tracker/blob/main/README.md)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
