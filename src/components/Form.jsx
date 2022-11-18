import { useState, useEffect } from "react";

const Form = () => {
  const [petName, setPetName] = useState(``);
  const [ownerName, setOwnerName] = useState(``);
  const [email, setEmail] = useState(``);
  const [date, setDate] = useState(``);
  const [symptoms, setSymptoms] = useState(``);

  const [err, setErr] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Form Validation
    if([petName, ownerName, email, date, symptoms].includes(``)){
      setErr(true);
    } else {
      setErr(false)
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
          Form Patients
        </h2>
        <p className="text-lg mt-2 text-center mb-10">
          Add Patients{` & `}
          <span className="text-indigo-600 font-bold">Manage Them.</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        >
          <div className="mb-5">
            <label htmlFor="pet-name" className="block text-gray-700 uppercase font-bold">Pet Name</label>
            <input
              id="pet-name" 
              type="text" 
              placeholder="Type Name" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600" 
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="owner-name" className="block text-gray-700 uppercase font-bold">Owner Name</label>
            <input 
              id="owner-name" 
              type="text" 
              placeholder="Type Name" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}  
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Type E-mail" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="discharged " className="block text-gray-700 uppercase font-bold">discharged </label>
            <input 
              id="discharged " 
              type="date" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="discharged" className="block text-gray-700 uppercase font-bold">Symptoms</label>
            <textarea 
              placeholder="Describe the symptoms" 
              id="discharged" 
              cols="30" rows="10" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            ></textarea>
          </div>

          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all" value="Add Patient"/>

          {err && (<div className="bg-red-600 text-white text-center p-3 uppercase font-bold mt-3 rounded-md"><p>All fields are required</p></div>)}
        </form>
    </div>
  )
};

export default Form;
