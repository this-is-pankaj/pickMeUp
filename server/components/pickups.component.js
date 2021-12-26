const users = require('../data/users');

const filterbyBikerId = (list, bikerId) => {
  const result = list.filter((l) => {
    if(l.biker) {
      return l.biker.id === bikerId;
    }
  });
  return result;
};

const filterListByUserId = (list, userId) => {
  try {
    const userInfo = users.find((u) => u.id===userId);
    const { role } = userInfo;
    let result = [];
    if( role === 'delivery') {
      result = filterbyBikerId(list, userId);
    } else {
      result = list.filter((p) => {
        return p.userId === userId;
      });
    }
    return result;
  } catch(exc) {
    console.log(exc);
    return [];
  }
};


const filterListByStatus = (list, statusList) => {
  try {
    const result = list.filter((p) => {
        return statusList.includes(p.status);
    });
    return result;
  } catch(exc) {
    console.log(exc);
    return [];
  }
};

const updateAsPerAction = ({updates, order, bikerId}, action) => {
  try {
    const updatesNeeded = {};
    const user = users.find((u) => (u.id === bikerId));
    if(!user || !user.id) {
      throw 'Invalid Biker ID';
    }
    const bikerInfo = {...user};
    delete bikerInfo.password;
    delete bikerInfo.username;
    delete bikerInfo.sessions;
    switch(action){
      case 'assigned':
        if(order.status === 'assigned') {
          throw 'Already assigned to someone else';
        }
        order.lastUpdatedAt = Date.now();
        updatesNeeded.updatedAt = order.lastUpdatedAt;
        updatesNeeded.status = 'assigned';
        order.status = 'assigned';
        order.biker = {...bikerInfo};
        break;

      case 'pickedUp':
        order.lastUpdatedAt = Date.now();
        updatesNeeded.updatedAt = order.lastUpdatedAt;
        updatesNeeded.status = 'in-transit';
        order.status = 'in-transit';
        break;

      case 'delivered':
        order.lastUpdatedAt = Date.now();
        updatesNeeded.updatedAt = order.lastUpdatedAt;
        order.deliveredAt = order.lastUpdatedAt;
        updatesNeeded.status = 'delivered';
        order.status = 'delivered';
        break;

      default:
        throw 'Invalid operation';
    }
    order.tracker.push(updatesNeeded);
    return order;
  } catch(exc) {
    throw exc;
  }
};

module.exports = {
  filterListByStatus,
  filterListByUserId,
  updateAsPerAction,
};