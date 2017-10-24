const next = require('next');

const express = require('express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // use pages/index.js as /
  server.get('/', (req, res) => app.render(req, res, '/', req.query));

  // use pages/post.js as /blogger/:id
  server.get('/blogger/:id', (req, res) => app.render(req, res, '/blogger', Object.assign({ id: req.params.id }, req.query)));

  // redirect from /post to /blogger or /post?id to /blogger/:id
//   server.get('/post', (req, res) => {
//     if (req.query.id) {
//         return res.redirect('/blogger');
//     }
//     res.redirect(301, `/blogger/${req.query.id}`);
//   });

  // redirect / to /blogger
//   server.get('/', (req, res) => {
//     res.redirect(301, '/blogger');
//   });

  // handle each other url
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
