import React, {useState } from 'react'
import "./popupForm.css"
import PopupForm2 from './popupForm2';


const PopupForm1 = () => {
  const [currentStep, SetCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    SetCurrentStep(2);
  }

  return (
    <>
      {currentStep === 1 ?
        <div>
          <div className="popup-form">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="float-right text-lg font-poppins mb-4">Step 1</h2>
              <h2 className="text-lg font-poppins mb-4">Create a Job</h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="jobtitle">
                  Job title
                  <span className="required">*</span>
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  placeholder="ex. UX UI Designer"
                  type="text"
                  name="jobtitle"
                  id="jobtitle"
                  required
                  onChange={(event) => setFormData({ ...formData, jobtitle: event.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                  Company name
                  <span className="required">*</span>
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  placeholder="ex. Google"
                  type="text"
                  name="company"
                  id="company"
                  required
                  onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="industry">
                  Industry
                  <span className="required">*</span>
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  placeholder="ex. Information Technology"
                  type="text"
                  name="industry"
                  id="industry"
                  required
                  onChange={(event) => setFormData({ ...formData, industry: event.target.value })}
                />
              </div>
              < div className="mb-4">
                <label className=" text-gray-700 font-bold mb-2" htmlFor="location">
                  Location
                </label>
                <label className="float-right text-gray-700 font-bold mr-28" htmlFor="remotetype">
                  Remote type
                </label>
                <div className="mt-2">
                  <input
                    className=" border border-gray-400 p-2 rounded-lg"
                    placeholder="ex. Chennai"
                    type="text"
                    name="location"
                    id="location"
                    onChange={(event) => setFormData({ ...formData, location: event.target.value })}
                  />
                  <input
                    className="float-right  border border-gray-400 p-2 rounded-lg mr-2"
                    placeholder="ex. In-office"
                    type="text"
                    name="remotetype"
                    id="remotetype"
                    onChange={(event) => setFormData({ ...formData, remotetype: event.target.value })}
                  />
                </div>
              </div>
              <div className="float-right mt-16">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div> : <PopupForm2 data={formData} />
      }
    </>
  )
}

export default PopupForm1