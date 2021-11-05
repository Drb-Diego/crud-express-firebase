import express from "express";

export default () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  return app;
}