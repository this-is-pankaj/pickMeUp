
const filterListByUserId = (list, userId) => {
  try {
    const result = list.filter((p) => {
      return p.userId === userId;
    });
    return result;
  } catch(exc) {
    console.log(exc);
    return [];
  }
};


const filterListByStatus = (list, status) => {
  try {
    const result = list.filter((p) => {
        return p.status === status;
    });
    return result;
  } catch(exc) {
    console.log(exc);
    return [];
  }
};

module.exports = {
  filterListByStatus,
  filterListByUserId,
};