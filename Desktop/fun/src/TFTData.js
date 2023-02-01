import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';

const TFTData = () => {
  const [legends, setLegends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await mongoose.createconnect('mongodb://localhost/tft_db', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        const legendData = await mongoose.model('Legend').find();
        setLegends(legendData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {legends.map(legend => (
        <div key={legend._id}>
          <h2>{legend.name}</h2>
          <p>{legend.items.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default TFTData;
