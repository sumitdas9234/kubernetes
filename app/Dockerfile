FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY public .
COPY views .
COPY api.bundle.js .

EXPOSE 8000
CMD [ "node", "api.bundle.js" ]
