import React from 'react'
import Navbar from '../../components/Navbar'

function Docs() {
  return (
    <div className="bg-[#E4D9FF]">
      <Navbar isLoggedIn />
      <div>
        <h1 className="text-4xl text-black font-bold text-center p-10">
          Documentation
        </h1>
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            1. Introduction
        </h2>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            The FaceTrustApi is the Api which helps in detecting a human face from a profile image uploaded. This Api also differentaiates between a cartoon and a real human face . This Api uses the Url of the images to detect human faces along with the age ,gender and compare between two images.
        </p>
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            2. Getting Started
        </h2>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            Python and its different libraries are required for deploying this api as a service.
        </p>       
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            3. Endpoints
        </h2>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            a. The developer has to add this endpoint for human face detction:/api/img/detect <br />
                This Endpoint helps to detect the face from an image uploaded. The Developer has to change only the header by adding application/json
        </p>       
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            b. For Gender Detection the enpoint that has to be added is:/api/img/gender <br />  
                This Endpoint helps to detect the gender from an image uploaded. The Developer has to change only the header by adding this endpoint with application/json
        </p>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            c. Additionally for detecting the age of the human the endpoint is:/api/img/age <br />
                This Endpoint helps to detect the age from an image uploaded. The Developer has to change only the header by adding this endpoint with application/json
        </p>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            d. For Face Recognition the endpoint is:/api/img/verify <br />
                This Endpoint helps to recognize the gender from an image uploaded. The Developer has to change only the header by adding this endpoint with application/json
        </p>
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            4. Request and Response Format:
        </h2>
        {/* <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            a. The developer has to add this endpoint for human face detction:/api/img/detect <br />
                This Endpoint helps to detect the face from an image uploaded. The Developer has to change only the header by adding application/json
        </p> */}
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            5. Best Practices
        </h2>
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            6. Support
        </h2>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            For any queries you can contact to abc@xyz.com. To connect with us join our newsletter by subscribing to it
        </p>
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            7. Versioning:
        </h2>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            This is the first version of the prototype developed by the team Nerd.js
        </p>
        <hr className="border border-gray-500 my-4" />
        <h2 className="text-[#4051A3] text-3xl font-bold mx-64 text-left mb-4">
            8. Terms of Use:
        </h2>
        <p className='text-black text-2xl text-left font-semibold mx-64 my-10'>
            All the above mentioned documentation should be followed along with the environment that is required.
        </p>
      </div>
      <div>
        <footer className="bg-[#090E40] py-4 mt-24">
          <div className="container mx-auto text-center text-white font-bold h-10">
            <p>Our Website And the services we provide</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Docs