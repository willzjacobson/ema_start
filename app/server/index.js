import cors from 'cors';
import { join } from 'path';
import express from 'express';

const app = express();
import serverRender from '../renderers/server';
import { PORT } from '../config';
import routes from './routes';

// Allow cross-domain requests
app.use(cors());
console.log('moose');
// Serve bundles as static files
const webpackOutputDir = join(__dirname, '../../dist');
app.use(express.static(webpackOutputDir));

app.use('/api', routes);

// Use EJS as templating engine
// (makes it easy to inject pre-rendered React code into the markup)
app.set('view engine', 'ejs');

app.get('*', async (req, res) => {
  // Markup to send preloaded to client (this is what server rendering is)
  const initialContent = await serverRender();
  // The pre-rendered markup is injected into the EJS template and sent to the client,
  // So the client does not have to fetch it AFTER receiving the initial markup
  res.render(join(webpackOutputDir, 'index.ejs'), { initialContent });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.log('Request reached error handling', err);
  res.sendStatus(err.status || 500);
});

app.listen(PORT, () =>
  console.log(`The server is listening closely on port ${PORT}...`)
);
