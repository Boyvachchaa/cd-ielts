
import './AddUserModal.scss';

import {Link} from 'react-router-dom'

export default function Modal({ isOpen, title, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h5 className="modal-title">{title}</h5>
        <p className="modal-message">{message}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <Link
            to='/users'
            className='btn btn-primary mt-3'
            onClick={onClose}
          >
            Close
          </Link>

          <Link
            className='btn btn-primary mt-3'
            onClick={onClose}
          >
            Add new user
          </Link>
        </div>
     </div>
    </div>
  );
}
