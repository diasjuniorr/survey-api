import { Router } from "express";
import { SurveyController } from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();

//Users
router.get("/users", userController.get);
router.post("/users", userController.create);

//Surveys
router.get("/surveys", surveyController.get);
router.post("/surveys", surveyController.create);

export { router };
