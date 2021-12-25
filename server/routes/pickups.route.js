const express = require("express");
const { schedulePickup, getAllPickups, getPickupsByFilter, updatePickup } = require("../controllers/pickups.controller");
const pickupsRouter = express.Router();

pickupsRouter.post('/schedule', schedulePickup);
pickupsRouter.get('/', getPickupsByFilter);
pickupsRouter.put('/:orderId', updatePickup);
module.exports = pickupsRouter;