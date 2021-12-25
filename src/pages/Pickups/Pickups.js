import { pickups } from '../../utils/static';
import Classes from './Pickups.module.css';

const Pickups = () => {
  const tableHeaders = ['#', 'Pickup From', 'Drop At', 'Status' ];
  const assignPickup = () => {
    const confirmed = window.confirm(`Assign this pickup to you?`);

    if(!confirmed) {
      return;
    }
    alert('Assigned to you');
  };
  return (
    <div className={[Classes.pickups, 'table-responsive'].join(' ')}>
      <table className='table'>
        <thead>
          <tr>
            { 
              tableHeaders.map((t, idx) => {
                return (
                  <th
                    key={idx}
                    className='table-cell table-head'
                  >
                    {t}
                  </th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            pickups.map((p, idx) => {
              return (
                <tr
                  key={idx}
                  className='text-center clickable'
                  onClick={() => assignPickup(p)}
                >
                  <td className='table-cell'> {idx + 1} </td>
                  <td className='table-cell'> {p.pickupAddress} </td>
                  <td className='table-cell'> {p.dropAddress} </td>
                  <td className='table-cell'> Pending </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Pickups;