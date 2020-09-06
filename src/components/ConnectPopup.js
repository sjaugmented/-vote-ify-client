import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ConnectPopup = (props) => {
  const [open, setOpen] = useState(props.open);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          You need to Connect with Spotify first.
        </div>
      </Popup>
    </div>
  );
};

export default ConnectPopup