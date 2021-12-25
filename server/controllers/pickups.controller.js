const { filterListByStatus, filterListByUserId } = require("../components/pickups.component");
const pickups = require("../data/pickups");
const { uuid } = require("../utils/common");

const schedulePickup = (req, res) => {
  try {
    const { userId, body: {
      pickupAddress: pickupAddress,
      dropAddress: dropAddress
    }} = req;
    const orderId = uuid();
    pickups.push({
      pickupAddress,
      dropAddress,
      createdAt: Date.now(),
      status: 'pending',
      userId,
      orderId,
    });
    res.status(200).send({orderId, status: 'pending'});
  } catch(exc) {
    res.status(500).send('Internal Server Error');
  }
};

const getPickupsByFilter = (req, res) => {
  try {
    const { userId, status } = req.query;
    let filteredList = [...pickups];
    
    if(status) {
      filteredList = filterListByStatus(filteredList, status.toLowerCase());
    }

    if(userId) {
      filteredList = filterListByUserId(filteredList, userId);
    }

    res.status(200).send(filteredList);
  } catch(exc) {
    res.status(500).send('Server Error');
  }
};

const updatePickup = (req, res) => {
  try {
    const { userId, body, params: {orderId: orderId} } = req;
    // The userId in this case is the delivery guy's ID
    // As modification by user is out of scope
    let hasUpdated = false;
    for(let i=0; i<pickups.length; i++) {
      if(pickups[i].orderId === orderId && !hasUpdated) {
        pickups[i].updatedAt = Date.now();
        pickups[i] = {...pickups[i], ...body};
        hasUpdated = true;
      }
    }
    if(!hasUpdated) {
      res.status(204).send('Invalid orderId');
      return;
    }
    res.status(200).send({orderId: orderId});
  } catch(exc) {
    console.log(exc);
    res.status(500).send(exc);
  }
};

module.exports = {
  schedulePickup,
  getPickupsByFilter,
  updatePickup,
};
