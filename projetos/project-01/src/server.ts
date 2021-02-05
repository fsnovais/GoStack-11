import express from 'express';

const app = express();

app.listen(3333, () => console.log('😎 server started at port 3333!'));

app.get('/', (request, response) => response.json({ message: 'Hello World!' }));
