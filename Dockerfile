# Dockerfile - serves pre-built Vite app from dist/
FROM nginx:stable-alpine AS runtime
LABEL maintainer="Sahil Raval <your-email>"

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from Jenkins workspace (dist/)
COPY dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
