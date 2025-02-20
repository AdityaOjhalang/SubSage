import {Router} from "express";
const subscriptionRouter = Router();

subscriptionRouter.get("/upcoming-renewals", (req, res) => res.send({title:"Get upcoming renewals"}));
subscriptionRouter.get("/user/:id", (req, res) => res.send({title:"Get the users subcriptions"}));

subscriptionRouter.get("/", (req, res) => res.send({title:"Get all subscriptions"}));
subscriptionRouter.get("/:id", (req, res) => res.send({title:"Get all subscriptions of that id"}));
subscriptionRouter.post("/", (req, res) => res.send({title:"Create  subscription"}));
subscriptionRouter.put("/:id", (req, res) => res.send({title:"Update Subscription"}));
subscriptionRouter.delete("/:id", (req, res) => res.send({title:"Delete Subscription"}));
subscriptionRouter.put("/:id/cancel", (req, res) => res.send({title:"Cancel the subscroptions"}));

export default subscriptionRouter;
