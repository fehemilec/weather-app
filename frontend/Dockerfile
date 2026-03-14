FROM node:20

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies inside the container
RUN npm install

# Copy all frontend files
COPY . .

# Build Tailwind CSS assets during the container build
RUN npm run build

# Expose the port React uses
EXPOSE 3000

# Start the React development server (hot reload works inside Docker)
CMD ["npm", "start"]