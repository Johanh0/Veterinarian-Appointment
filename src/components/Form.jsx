import { useState, useEffect } from "react";
import Err from "./Err";

const Form = ({ patients, setPatients, patient, setPatient }) => { 
  const [petName, setPetName] = useState(``);
  const [ownerName, setOwnerName] = useState(``);
  const [email, setEmail] = useState(``);
  const [date, setDate] = useState(``);
  const [symptoms, setSymptoms] = useState(``);

  const [err, setErr] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setPetName(patient.petName)
      setOwnerName(patient.ownerName)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }

  }, [patient])

  const createId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Form Validation
    if([petName, ownerName, email, date, symptoms].includes(``)){
      setErr(true);
    } else {
      setErr(false)

      // Patient Obj
      const patientsObj = {
        petName, 
        ownerName, 
        email, 
        date, 
        symptoms
      }

      if(patient.id) {
        // Editing the register
        patientsObj.id = patient.id

        const patientsUpdate = patients.map(patientState => patientState.id === patient.id ? patientsObj : patientState);

        setPatients(patientsUpdate);
        setPatient({});
      } else {
        // New register
        patientsObj.id = createId();
        setPatients([...patients, patientsObj]);
      }

      // Restart the form
      setPetName(``)
      setOwnerName(``)
      setEmail(``)
      setDate(``)
      setSymptoms(``)
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

          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all" value={ patient.id ? `Edit Patient` : `Add Patient` }/>

          {err && <Err><p>All fields are required</p></Err>}
        </form>
    </div>
  )
};

export default Form;
