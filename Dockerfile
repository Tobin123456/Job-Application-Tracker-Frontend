# Build project
FROM node:20-alpine AS build
WORKDIR /application_tracker_frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Create lightweigth image
FROM nginx:alpine
# Copy browser contents (replace Nginx welcome page)
COPY --from=build /application_tracker_frontend/dist/application_tracker_frontend/browser/. /usr/share/nginx/html/

# Copy extra files
COPY --from=build /application_tracker_frontend/dist/application_tracker_frontend/prerendered-routes.json /usr/share/nginx/html/
COPY --from=build /application_tracker_frontend/dist/application_tracker_frontend/3rdpartylicenses.txt /usr/share/nginx/html/

# Copy own conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# Starts Nginx and keeps it running in foreground
CMD ["nginx", "-g", "daemon off;"]