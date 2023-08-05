import express, { Router } from 'express';
import { NotesRoute } from '../modules/notes/notes.route';

const router = express.Router();

type IModuleRoutes = {
  path: string;
  route: Router;
};

const moduleRoutes: IModuleRoutes[] = [
  {
    path: '/notes/',
    route: NotesRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
