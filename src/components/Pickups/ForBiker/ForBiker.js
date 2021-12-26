import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleReq } from '../../../utils/requests';
import Table from '../../shared/Table/Table';
import Classes from './ForBiker.module.css';

const ForBiker = () => {
  const theads = ['#', 'Order ID', 'Pickup Location', 'Drop Location', 'Ordered At', 'Status'];
  const [pickups, setPickups] = useState([]);
  const navigate = useNavigate();
  useEffect(async() => {
    const res = await handleReq({
      action: 'getPickups',
      qs: {
        status: ['pending']
      }
    })
    .catch((err) => []);
    setPickups(res);
  }, []);

  const getTBodys = () => {
    const tbodys = [];
    if(pickups.length) {
      for(let i=0; i<pickups.length; i++) {
        const { orderId, pickupAddress, dropAddress, createdAt, status} = pickups[i];
        const createdAtStr = new Date(createdAt).toLocaleString();
        const arr = [i+1, orderId, pickupAddress, dropAddress, createdAtStr, status.toUpperCase()];
        tbodys.push(arr);
      }
    }
    return tbodys;
  };

  const assignPickup = async (orderId) => {
    const confirmed = window.confirm(`Assign pickup ID ${orderId} to you?`);

    if(!confirmed) {
      return;
    }
    try {
      await handleReq({
        action: 'updatePickup',
        data: {},
        qs: {
          action: 'assigned',
          orderId,
        }
      });
      alert('Assigned to you');
      navigate('/dashboard');
    } catch (exc) {
      console.log(exc);
      alert('Unable to assign this pickup to you. Please try again');
    }
  };

  return (
    <div className={Classes['for-biker']}>
      <h3 className='text-center'>Available Pickups</h3>
      <div className={Classes['pickups-container']}>
        <Table
          tableId="available-pickups-table"
          theads={theads}
          tbodys={getTBodys()}
          rowClick={assignPickup}
        />
      </div>
    </div>
  )
};

export default ForBiker;