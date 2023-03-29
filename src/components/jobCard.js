import React from 'react'
import template from "../images/img.png"

const JobCard = ({ job }) => {
    console.log(job);
    return (
        <>
            {job?.map((element =>
                <div className="inline-flex flex-wrap bg-white shadow-md rounded-md overflow-hidden m-8">
                    <div className="px-4 pr-24 mr-24 py-3 border-b border-gray-200">
                        <div className="flex">
                            <img src={template} alt="Company Logo" className="w-12 h-12 object-contain" />
                            <div className="ml-4">
                                <h2 className="text-lg font-medium text-gray-800">{element.jobtitle}</h2>
                                <p className="mt-0 text-sm font-medium text-gray-700">{element.company}-{element.industry}</p>
                                <p className="mt-0 text-sm text-gray-500">{element.location} ({element.remotetype})</p>
                                <p className="mt-8 text-sm font-medium text-gray-600">Part-time (9.00 am - 5.00 pm IST)</p>
                                <p className="mt-2 text-sm font-medium text-gray-600">Experience ({element.experiencemin}-{element.experiencemax} years)</p>
                                <p className="mt-2 text-sm font-medium text-gray-600">INR (₹) {element.salarymin}-{element.salarymax} / Month</p>
                                <p className="mt-2 text-sm font-medium text-gray-600">{element.employee} employess</p>
                                <div>
                                    {element.option === "Quick Apply" ?
                                        <div>
                                            <button className="mt-6 mr-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">Apply Now</button>
                                            <button className="mt-6 inline-block border border-blue-500 text-blue-500 bg-white  font-medium py-2 px-4 rounded-md transition-colors duration-300">External Apply</button>
                                        </div> :
                                        <div>
                                            <button className="mt-6 inline-block border border-blue-500 text-blue-500 bg-white  font-medium py-2 px-4 rounded-md transition-colors duration-300">Apply Now</button>
                                            <button className="mt-6 mr-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">External Apply</button>

                                        </div>}</div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}

export default JobCard