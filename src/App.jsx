 import { useState } from "react";
 import Header from "./components/Header"
 import Form from "./components/Form"
 import ListPatients from "./components/ListPatients"
 
 function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatient = id => {
    const patientsUpdate = patients.filter(patient => patient.id !== id);
    setPatients(patientsUpdate)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 flex flex-col md:flex-row">
      <Form
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
      />
      <ListPatients
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
      />
      </div>

    </div>
  )
}

export default App
