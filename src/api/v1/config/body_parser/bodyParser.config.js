import express from "express";

export default function bodyParserConfig(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}
