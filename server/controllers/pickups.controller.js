const { filterListByStatus, filterListByUserId, updateAsPerAction } = require("../components/pickups.component");
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
      tracker: []
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
    if(status && status.length) {
      filteredList = filterListByStatus(filteredList, status.map((s)=>{
        return s.toLowerCase();
      }));
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
    const { userId, body, query: {action: action, orderId: orderId} } = req;
    
    if(!action) {
      res.status(400).send('Invalid inputs for updating order');
      return;
    }
    // The userId in this case is the delivery guy's ID
    // As modification by user is out of scope
    let hasUpdated = false;
    for(let i=0; i<pickups.length; i++) {
      if(pickups[i].orderId === orderId && !hasUpdated) {
        pickups[i] = updateAsPerAction({
          bikerId: userId,
          updates: body,
          order: pickups[i]
        }, action)
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

const getPickupsByOrderId = (req, res) => {
  try {
    const { orderId } = req.params;
    const order = pickups.find((p) => p.orderId === orderId);
    if(!order) {
      res.status(204).send('No order found');
      return;
    }
    res.status(200).send({...order});
  } catch(exc) {
    res.status(500).send(exc);
  }
}

module.exports = {
  schedulePickup,
  getPickupsByFilter,
  updatePickup,
  getPickupsByOrderId
};
