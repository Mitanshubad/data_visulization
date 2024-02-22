import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div  >
     
      <div >
      <h1>Dashboard</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className='font-bold'>{item.title}</h2>
          <p>Intensity: {item.intensity}</p>
          <p>Likelihood: {item.likelihood}</p>
          <p>Relevance: {item.relevance}</p>
          <p>Year: {item.year}</p>
          <p>Country: {item.country}</p>
          <p>Topics: {item.topic}</p>
          <p>Region: {item.region}</p>
          <p>City: {item.city}</p>
        </div>
      ))}
      </div>
       
   
    </div>
  );
};

export default Dashboard;
