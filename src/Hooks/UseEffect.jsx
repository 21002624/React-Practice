import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response =await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                const jsonData=await response.json();
                setData(jsonData);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]) //[] is used for this effect runs only once

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {
            data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default UseEffect
