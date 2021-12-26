import { useEffect, useState } from 'react';
import { handleReq } from '../../../utils/requests';
import Table from '../../shared/Table/Table';
import Classes from './ForCustomer.module.css';

const ForCustomer = ({ userId }) => {
  const theads = ['#', 'Order ID', 'Pickup Location', 'Drop Location', 'Ordered At', 'Delivered At', 'Status'];
  const [orders, setOrders] = useState([]);
  useEffect(async() => {
    const res = await handleReq({
      action: 'getPickups',
      qs: {
        userId
      }
    })
    .catch((err) => []);
    setOrders(res);
  }, []);
  
  const getTBodys = () => {
    const tbodys = [];
    if(orders.length) {
      for(let i=0; i<orders.length; i++) {
        const { orderId, pickupAddress, dropAddress, createdAt, deliveredAt, status} = orders[i];
        const createdAtStr = new Date(createdAt).toLocaleString();
        const deliveredAtStr = deliveredAt? new Date(deliveredAt).toLocaleString(): 'Awaiting Delivery';
        const arr = [i+1, orderId, pickupAddress, dropAddress, createdAtStr, deliveredAtStr, status.toUpperCase()];
        tbodys.push(arr);
      }
    }
    return tbodys;
  };

  return (
    <div className={Classes['for-customer']}>
      <h3 className='text-center'>My Orders</h3>
      <div className={Classes['orders-container']}>
        <Table
          tableId="my-orders-table"
          theads={theads}
          tbodys={getTBodys()}
        />
      </div>
    </div>
  )
};

export default ForCustomer;