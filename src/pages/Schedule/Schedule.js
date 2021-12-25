import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { pickups } from '../../utils/static';
import Classes from './Schedule.module.css';

const Schedule = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState({
    pickupAddress: '',
    dropAddress: '',
  });
  const updateFormValues = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setSchedule(initValue => ({...schedule, [fieldName]: fieldValue}));
  };

  const requestPickup = (event) => {
    event.preventDefault();
    const requestDetails = {...schedule};
    pickups.push(requestDetails);
    navigate('/pickups');
  };

  return (
    <div className={Classes.schedule}>
      <form className={Classes['schedule-form']} onSubmit={requestPickup}>
        <div className="form-header">
          <h2 className="text-center"> Schedule Pickup</h2>
        </div>
        <div className="form-group">
          <label className="field-label">Pickup Address:</label>
          <input className="form-field text-field" type="text" name="pickupAddress" placeholder="Pickup Address"
            value={schedule.pickupAddress}
            onChange={updateFormValues}
            />
        </div>
        <div className="form-group">
          <label className="field-label">Drop Address:</label>
          <input className="form-field text-field" type="text" name="dropAddress" placeholder="Drop Address"
            value={schedule.dropAddress}
            onChange={updateFormValues}
            />
        </div>
        <div className="form-options text-center">
          <button className={`btn ${Classes['submit-btn']}`}>Request Pickup</button>
        </div>
      </form>
    </div>
  )
};

export default Schedule;