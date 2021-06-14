FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY release/api.bundle.js .

EXPOSE 8000
CMD [ "node", "bundle.js" ]
