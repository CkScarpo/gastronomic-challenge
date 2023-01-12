import "reflect-metadata";
import express from 'express';
import { createConnections } from "typeorm";
import cors from 'cors';
import * as UserController from './src/api/UserController'
import * as RestaurantsController from './src/api/RestaurantsController'

const PORT = 3000;

async function startup() {
  await createConnections();
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post('/saveUsers', UserController.save);
  app.get('/allUsers', UserController.getAll);

  app.post('/saveRestaurants', RestaurantsController.save);
  app.get('/allRestaurants', RestaurantsController.getAll);

  app.listen(PORT, () => {
    console.log('App running on port ' + 3000)
  })
}

startup()