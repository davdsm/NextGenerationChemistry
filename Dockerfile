# Use a base Node.js image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and lock file first to install dependencies
COPY package*.json ./

# Install only production dependencies (if applicable)
RUN npm install --production

# Copy the build folder to the container
COPY ./build ./build

# If your server needs other files like public assets, copy those too
COPY ./public ./public

# Expose the port that your app will use
EXPOSE 3000

# Run the command to start your server
CMD ["npm", "run", "start"]