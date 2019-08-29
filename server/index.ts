import express from 'express';
import next from 'next'
import bodyParser from 'body-parser';

const PORT = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/posts', (_req, res) => {
    res.json({ title: 'test' });
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // tslint:disable-next-line:no-console
 server.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
})
