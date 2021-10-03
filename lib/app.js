import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import villagerRoutes from './controllers/villagers.js';
import fossilRoutes from './controllers/fossils.js';
import bugRoutes from './controllers/bugs.js';
import fishRoutes from './controllers/fishs.js';
import artRoutes from './controllers/arts.js';

const app = express();

app.use(express.json());

app.use('/api/v1/villagers', villagerRoutes);
app.use('/api/v1/fossils', fossilRoutes);
app.use('/api/v1/bugs', bugRoutes);
app.use('/api/v1/fishs', fishRoutes);
app.use('/api/v1/arts', artRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
