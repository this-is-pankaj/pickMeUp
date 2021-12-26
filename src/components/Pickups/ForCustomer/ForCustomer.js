import { useEffect, useState } from 'react';
import { handleReq } from '../../../utils/requests';
import Table from '../../shared/Table/Table';
import Modal from '../../shared/Modal/Modal';
import Classes from './ForCustomer.module.css';

const ForCustomer = ({ userId }) => {
  const theads = ['#', 'Order ID', 'Pickup Location', 'Drop Location', 'Ordered At', 'Delivered At', 'Status', ''];
  const [orders, setOrders] = useState([]);
  const [modalObj, setModalObj] = useState({show: false, content: ''});
  useEffect(async() => {
    const res = await handleReq({
      action: 'getPickups',
      qs: {
        userId,
        status: ['pending', 'assigned', 'in-transit'],
      },
    })
    .catch((err) => []);
    setOrders(res);
  }, []);

  const getStatus = async (orderId) => {
    try {
      const updates = await handleReq({
        action: 'getPickupById',
        variables: {
          id: orderId
        }
      });
      setModalObj({ show: true, content: updates});
    } catch(exc) {
      console.log(exc);
      alert('Unable to track the shipment. PLease try again');
    }
  }
  
  const getTBodys = () => {
    const tbodys = [];
    if(orders.length) {
      for(let i=0; i<orders.length; i++) {
        const { orderId, pickupAddress, dropAddress, createdAt, deliveredAt, status} = orders[i];
        const createdAtStr = new Date(createdAt).toLocaleString();
        const deliveredAtStr = deliveredAt? new Date(deliveredAt).toLocaleString(): 'Awaiting Delivery';
        const arr = [i+1, orderId, pickupAddress, dropAddress, createdAtStr, deliveredAtStr, status.toUpperCase(),
          (<button className='btn' onClick={() => getStatus(orderId)}> Track </button>)
        ];
        tbodys.push(arr);
      }
    }
    return tbodys;
  };

  const onModalClose = () => {
    setModalObj({show: false, content: ''});
  };

  return (
    <div className={Classes['for-customer']}>
      <h3 className='text-center'>My Undelivered Parcels</h3>
      <div className={Classes['orders-container']}>
        <Table
          tableId="my-orders-table"
          theads={theads}
          tbodys={getTBodys()}
        />
      </div>
      {
        modalObj.show
          ?<Modal
              title="Track Parcel"
              onClose={onModalClose}
            >
              <div className={Classes['tracking-report']}>
                <div className={Classes['report-meta']}>
                  <p> Booking ID: {modalObj.content.orderId}</p>
                  <p> Parcel Booked on: {new Date(modalObj.content.createdAt).toLocaleString()} </p>
                </div>
                <div className={Classes['report-detail']}>
                  <p>Pickup Address: {modalObj.content.pickupAddress}</p>
                  <p>Drop Address: {modalObj.content.dropAddress}</p>
                </div>
                <h4 className='text-center'>Current status: {modalObj.content.status.toUpperCase()}</h4>
                <div className={Classes['tracking-detail']}>
                  {
                    !modalObj.content.tracker.length
                      ? <p className='text-center'> No Details available yet. </p>
                      : modalObj.content.tracker.map((t, idx) => {
                          return <div className={Classes['tracker-card']} key={`tracker-${idx}`}>
                            <p>Status: {t.status.toUpperCase()}</p>
                            <p>Updated On: {new Date(t.updatedAt).toLocaleString()}</p>
                          </div>
                        })
                  }  
                </div>
              </div>
            </Modal>
          : null
      }
      

    </div>
  )
};

export default ForCustomer;