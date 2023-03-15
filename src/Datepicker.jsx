import React, { useState } from 'react';

export default function Datapicker() {
  const [startData, setStartData] = useState('');
  const [endData, setEndData] = useState('');
  const [dataList, setDataList] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const dt1 = new Date(startData).getTime();
    const dt2 = new Date(endData).getTime();
    const days = 1000 * 60 * 60 * 24;

    for (let j = dt1; j < dt2; j += days) {
      let dt3 = new Date(j).toISOString().split('T')[0];
      console.log(dt3, 'dt3');
      setDataList((d) => [...d, dt3]);
      console.log(dataList, 'datalist');
    }
    setStartData('');
    setEndData('');
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div>
          <label> Start Data :</label>
          <input
            type="date"
            value={startData}
            onChange={(e) => setStartData(e.target.value)}
          />
        </div>
        <div>
          <label> End Data :</label>
          <input
            type="date"
            value={endData}
            onChange={(e) => setEndData(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      <div>
        {dataList.length > 0 && (
          <div>
            <h3> Dates List </h3>

            {dataList.map((item, ind) => {
              return (
                <li key={ind}>
                  {' '}
                  <b> {item} </b>{' '}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
