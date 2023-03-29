import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./popupForm.css"

const PopupForm2 = (props) => {
    const { data } = props;
    const [ formData, setFormData ] = useState({});
    const [selectedOption, setSelectedOption] = useState('');
    const [popup,setPopup]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setFormData(data);
        },1000)
    },[])

    useEffect(() => {
        setFormData(formData);
    }, [formData])

    useEffect(()=>{
        setFormData({ ...formData,option: selectedOption})
    },[selectedOption])

  
    const handleOptionChange = (e) => {
       setSelectedOption(e.target.value);
    };
     const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('https://642291b577e7062b3e1c986f.mockapi.io/data', formData)
            .then(response => {
                console.log('Form data saved successfully.', response);
            })
            .catch(error => {
                console.error('Error saving form data:', error);
            });
            console.log(formData);
        setPopup(!popup);
        window.location.reload(false);

    }
    return (
        popup?
            <div>
            <div className="popup-form">
                <form  onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="float-right text-lg font-poppins mb-4">Step 2</h2>
                    <h2 className="text-lg font-poppins mb-4">Create a Job</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="job">
                            Experience
                        </label>
                        <input
                            className="w-half border border-gray-400 p-2 rounded-lg"
                            placeholder="Minimum"
                            type="text"
                            name="experience"
                            onChange={(event) => setFormData({ ...formData, experiencemin: event.target.value })}
                        />
                        <input
                            className=" float-right w-half border border-gray-400 p-2 rounded-lg"
                            placeholder="Maximum"
                            type="text"
                            name="experience"
                            onChange={(event) => setFormData({ ...formData, experiencemax: event.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
                            Salary
                        </label>
                        <input
                            className="w-half border border-gray-400 p-2 rounded-lg"
                            placeholder="Minimum"
                            type="text"
                            name="salary"
                            onChange={(event) => setFormData({ ...formData, salarymin: event.target.value })}
                        />
                        <input
                            className=" float-right w-half border border-gray-400 p-2 rounded-lg"
                            placeholder="Maximum"
                            type="text"
                            name="salary"
                            onChange={(event) => setFormData({ ...formData, salarymax: event.target.value })}
                        />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="employee">
                            Total Employee
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-lg"
                            placeholder="ex.100"
                            type="text"
                            name="employee"
                            id="employee"
                            onChange={(event) => setFormData({ ...formData, employee: event.target.value })}
                        />
                    </div>
                    <div div className="mb-4">
                        <label className=" text-gray-700 font-bold mb-2" htmlFor="type">
                            Apply Type
                            <div className='mt-4'>
                                <label className='text-gray-500 font-normal' >
                                    <input
                                        type="radio"
                                        value="Quick Apply"
                                        checked={selectedOption === "Quick Apply"}
                                        onChange={handleOptionChange}
                                    />
                                    Quick Apply
                                </label>
                                <label className='text-gray-500 font-normal ml-4'>
                                    <input
                                        type="radio"
                                        value="External Apply"
                                        checked={selectedOption === "External Apply"}
                                        onChange={handleOptionChange}
                                    />
                                    External Apply
                                </label>
                            </div>
                        </label>
                    </div>
                    <div className="float-right mt-16">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>:""
    )
}

export default PopupForm2