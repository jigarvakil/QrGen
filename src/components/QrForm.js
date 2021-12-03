import React, { useState } from 'react';
import defaulrQRimg from './qr.png';
function QrForm() {
  const [data, setData] = useState('');
  const [qrURL, setqrURL] = useState('');
  const handleTextChange = event => {
    setData(event.target.value);
  };
  const handleQrClick = async () => {
    console.log('Qr Genrator');
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${data}`;
    let fetchdata = await fetch(url);
    setqrURL(fetchdata.url);
  };

  return (
    <div>
      <div
        className="card"
        style={{ backgroundColor: '#135b6a8c', color: 'white' }}
      >
        <div className="card-header">
          <h2>Generate QR of your data now</h2>
        </div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{ backgroundColor: '#135b6a8c', color: 'white' }}
          >
            <div className="container">
              <label>Enter Data To Generate QR Code</label>
              <br />
              <div className="input-group">
                <textarea
                  style={{
                    border: 'solid black 1px',
                    borderRadius: '20px',
                  }}
                  className="form-control"
                  aria-label="With textarea"
                  onChange={handleTextChange}
                ></textarea>
              </div>
              <br />
              <button
                disabled={data.length === 0 ? true : false}
                onClick={handleQrClick}
                className="btn btn-outline-info bg-dark"
              >
                Generate QR Code
              </button>
            </div>
          </li>
        </ul>
        <br />
        <div className="text-center">
          <img src={qrURL === '' ? defaulrQRimg : qrURL} alt="Your QR Code" />
          <br />
          <br />
          <hr />
          {/* <a href={qrURL} download={qrURL}>
            <button
              disabled={qrURL === '' ? true : false}
              className="btn btn-primary"
            >
              Download this QR
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default QrForm;
