import * as express from 'express';
import * as cors from 'cors';
import rootRoutes from '@routes/Root';

const app = express();

// add rules
app.use(cors());

app.use(express.json());
app.use(rootRoutes);

export default app;
