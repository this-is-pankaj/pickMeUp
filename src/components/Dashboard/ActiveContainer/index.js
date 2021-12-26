import { useEffect, useState } from 'react';
import { handleReq } from '../../../utils/requests';
import Table from '../../shared/Table/Table';
import Classes from './active-container.module.css';

const ActiveContainer = ({userId, user, role}) => {
  const tHeaders = {
    customer: ['#', 'Order ID', 'Pickup Location', 'Drop Location', 'Scheduled At', 'Assigned To', 'Status'],
    delivery: ['#', 'Order ID', 'Pickup Location', 'Drop Location', 'Scheduled At', 'Status', 'Options']
  };

  const title = `Hello ${user.firstName}! Your Active ${role === 'customer'? 'Orders': 'Pickups'}`;
 
  const [activeOrder, setActiveOrder] = useState([]);
  // Execute the fetch active API only once
  useEffect(async () => {
    const orders= await handleReq({
      action: 'getPickups',
      qs: {
        status: ['pending', 'assigned', 'in-transit'],
        userId,
      },
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
    setActiveOrder(orders);
  }, [activeOrder]);
  const deliveryWorkflow = (currentStatus) => {
    const workFlow = {
      pending: {
        nextState: {
          btnText: 'Assign To Me',
          action: 'assigned'
        }
      },
      assigned: {
        nextState: {
          btnText: 'Pick Up Complete',
          action: 'pickedUp'
        }
      },
      'in-transit': {
        nextState: {
          btnText: 'Delivered',
          action: 'delivered'
        }
      }
    };
    return workFlow[currentStatus].nextState;
  };

  const updateStatus = async (orderId, action) => {
    await handleReq({
      action: 'updatePickup',
      qs: {
        orderId,
        action
      }
    })
    .catch((err) => {
      console.log(err);
      alert('Unable to update status. Please try again');
    });
  }

  const getTBodys = () => {
    const tbodys = [];
    if(activeOrder.length) {
      for(let i=0; i<activeOrder.length; i++) {
        const { orderId, pickupAddress, dropAddress, createdAt, status, biker} = activeOrder[i];
        const createdAtStr = new Date(createdAt).toLocaleString();
        if(role === 'delivery') {
          const arr = [i+1, orderId, pickupAddress, dropAddress, createdAtStr, status.toUpperCase(),
            (<button className='btn' onClick={() => updateStatus(orderId, deliveryWorkflow(status).action)}>{deliveryWorkflow(status).btnText}</button>)];
          tbodys.push(arr);
        } else {
          const arr = [i+1, orderId, pickupAddress, dropAddress, createdAtStr, `${biker?.user.firstName || '-'} ${biker?.user.lastName || ''}`, status.toUpperCase()];
          tbodys.push(arr);
        }
      }
    }
    return tbodys;
  };

  return (
    <div className={Classes["active-container"]}>
      <div className={Classes['section-title']}>
        <h3 className='text-center'>{title}</h3>
      </div>
      {
        activeOrder
          ? <Table
            tableId="active-table"
            theads={tHeaders[role]}
            tbodys={getTBodys()}
          />
          : <div className='text-center'> No Active Orders </div>
      }
      
    </div>
  )
};

export default ActiveContainer;