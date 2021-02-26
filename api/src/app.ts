import * as express from 'express';
import rootRoutes from '@routes/Root';

const app = express();

// add rules
app.use(express.json());
app.use(rootRoutes);

export default app;
