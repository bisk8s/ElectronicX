import { Router } from 'express';
import UserRoutes from '@routes/UsersRoutes';
import AuthRoutes from '@routes/AuthRoutes';
import ItemsRoutes from '@routes/ItemsRoutes';
import ItemCategoriesRoutes from '@routes/ItemCategoriesRoutes';

const rootRoutes = Router();

rootRoutes.use('/users', UserRoutes);
rootRoutes.use('/auth', AuthRoutes);

rootRoutes.use('/items', ItemsRoutes);
rootRoutes.use('/itemCategories', ItemCategoriesRoutes);

export default rootRoutes;
