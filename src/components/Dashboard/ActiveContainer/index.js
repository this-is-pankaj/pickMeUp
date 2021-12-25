import Classes from './active-container.module.css';

const ActiveContainer = ({userId, user, role}) => {
  const tHeaders = {
    customer: ['#', 'Pickup Location', 'Drop Location', 'Scheduled At', 'Picked Up At', 'Status'],
    delivery: ['#', 'Pickup Location', 'Drop Location', 'Scheduled At', 'Picked Up At', 'Status', 'Options']
  };

  const title = `Hello ${user.firstName}, below is your active ${role === 'customer'? 'Order': 'Pickup'} details`;
  
  return (
    <div className={Classes["active-container"]}>
      <div className={Classes['section-title']}>
        <h3 className='text-center'>{title}</h3>
      </div>

      <div className={[Classes['active-order'], 'table-responsive'].join(' ')}>
        <table className='table'>
          <thead>
            <tr>
              {
                tHeaders[role].map((h, idx) => {
                  return (
                    <th
                      className='table-head table-cell'
                      key={`th-${idx}`}  
                    >{h}</th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            {<tr></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default ActiveContainer;