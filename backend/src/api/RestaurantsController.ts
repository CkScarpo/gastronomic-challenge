import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Restaurants } from "../entity/Restaurants";

export async function save(request: Request, response: Response) {
  const userRepository = getRepository(Restaurants);

  const saveRestaurants = await userRepository.save(request.body);

  return response.json(saveRestaurants);
}

export async function getAll(request: Request, response: Response) {
  const userRepository = getRepository(Restaurants);

  const allRestaurants = await userRepository.find();

  return response.json(allRestaurants);
}
