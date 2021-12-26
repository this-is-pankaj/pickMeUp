const express = require("express");
const { schedulePickup, getPickupsByFilter, updatePickup, getPickupsByOrderId } = require("../controllers/pickups.controller");
const pickupsRouter = express.Router();

pickupsRouter.post('/schedule', schedulePickup);
pickupsRouter.get('/', getPickupsByFilter);
pickupsRouter.get('/:orderId', getPickupsByOrderId);
pickupsRouter.put('/', updatePickup);
module.exports = pickupsRouter;