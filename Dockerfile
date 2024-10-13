
FROM node:20-alpine3.19 

# Set the working directory to /app
WORKDIR /app

# Copy the package.json over in the intermediate "build" image
COPY package.json 


# Install dependencies using pnpm
RUN npm install


# Copy the rest of your Qwik.js app files (e.g., source code, assets, etc.)
COPY . .


# Build the Qwik.js app bundle
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
