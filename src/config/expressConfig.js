import express from "express";
import homeRoutes from "../routes/homeRoute.js";

export default () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(homeRoutes);

  return app;
};
