import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleReq } from '../../../utils/requests';
import Table from '../../shared/Table/Table';
import Classes from './MyDeliveriesForBiker.module.css';

const MyDeliveriesForBiker = ({userId}) => {
  const theads = ['#', 'Order ID', 'Pickup Location', 'Drop Location', 'Ordered At', 'Delivered At', 'Status'];
  const [deliveries, setDeliveries] = useState([]);
  const navigate = useNavigate();
  useEffect(async() => {
    const res = await handleReq({
      action: 'getPickups',
      qs: {
        status: ['delivered'],
        userId
      }
    })
    .catch((err) => []);
    setDeliveries(res);
  }, []);

  const getTBodys = () => {
    const tbodys = [];
    if(deliveries.length) {
      for(let i=0; i<deliveries.length; i++) {
        const { orderId, pickupAddress, dropAddress, createdAt, deliveredAt, status} = deliveries[i];
        const createdAtStr = new Date(createdAt).toLocaleString();
        const deliveredAtStr = new Date(deliveredAt).toLocaleString();
        const arr = [i+1, orderId, pickupAddress, dropAddress, createdAtStr, deliveredAtStr, status.toUpperCase()];
        tbodys.push(arr);
      }
    }
    return tbodys;
  };

  return (
    <div className={Classes['for-biker']}>
      <h3 className='text-center'>Successful Deliveries</h3>
      <div className={Classes['deliveries-container']}>
        <Table
          tableId="deliveries-table"
          theads={theads}
          tbodys={getTBodys()}
        />
      </div>
    </div>
  )
};

export default MyDeliveriesForBiker;