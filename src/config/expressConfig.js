import express from "express";
import homeRoutes from "../routes/homeRoute.js";
import { startFirebase } from "../database/startFirebase.js";

export default () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(homeRoutes);

  startFirebase();

  return app;
};
