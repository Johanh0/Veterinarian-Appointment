import Patients from "./Patients"

const ListPatients = ({ patients, setPatient, deletePatient }) => {

  return (
    <div className="w-full md:w-1/2 lg:w-3/5">
      
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
              List Patients
          </h2>
          <p className="text-lg mt-2 text-center mb-10">
            Manage Your{` `}
            <span className="text-indigo-600 font-bold">Patients {`&`} Appointments.</span>
          </p>
        </>
      ) : (
        <>
        <h2 className="font-black text-3xl text-center">
            Add Patients
        </h2>
        <p className="text-lg mt-2 text-center mb-10">
          Start To Add{` `}
          <span className="text-indigo-600 font-bold">Your Patients.</span>
        </p>
      </>
      )}

    <div className="md:h-screen md:overflow-y-scroll">
      {patients.map( (patients) => {
        return(
          <Patients
            key={patients.id}
            patients={patients}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        )
      })}
    </div>

    </div>
  )
}

export default ListPatients