import React, { useEffect, useState } from 'react'
import PopupForm1 from './Form/popupForm1'
import JobCard from './jobCard';
import axios from 'axios';

const Home = () => {
    const [popup, setPopup] = useState(false);
    const [data,setData]=useState();
    console.log(popup);
    const handleClick = () => {
        setPopup(!popup);
    }
    useEffect(()=>{
       axios.get('https://642291b577e7062b3e1c986f.mockapi.io/data')
        .then(response=>{
            console.log("data received",response);
            setData(response.data);
        })
        .catch((error)=>{
            console.log("error is received",error);
        });
        
    },[]);


    useEffect(()=>{
        setData(data);
    },[data]);
    

    return (
        <div>
            <button className=" m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}>Create Job</button>
            {popup && <PopupForm1 />}
            <div>
            <JobCard
                job={data}
            />
            </div>

        </div>
    )
}

export default Home