node:14

WORKDIR /app

COPY package.json .

COPY index.js .

RUN npm install --save

CMD ["npm","start"]

