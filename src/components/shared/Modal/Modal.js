
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Classes from './Modal.module.css';

library.add([
  faTimesCircle
]);

const Modal = ({ title, children, onClose }) => {
  const close = () => {
    onClose();
  };

  return (
    <div className={Classes.modal}>
      <div className={Classes['modal-content']}>
        <div className={Classes['modal-header']}>
          <h3>Track Parcel</h3>
          <div className={Classes['modal-options']}>
            <button className="btn" onClick={close}>
              <FontAwesomeIcon icon="times-circle"/>
            </button>
          </div>
        </div>

        <div className={Classes['modal-body']}>
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal;