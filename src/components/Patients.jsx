

const Patients = ({ patients, setPatient, deletePatient }) => {

  const {petName, ownerName, email, date, symptoms, id} = patients;

  const handleDelete = () => {
    const respond = confirm(`Do you want to delete this patient?`);

    if(respond) deletePatient(id);
  }

  return (
    <>
        <div className="md:m-3 mb-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5">
          <p className="font-bold mb-3 text-gray-700 uppercase">Pet Name: {``}
              <span className="font-normal normal-case">{petName}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Owner Name: {``}
              <span className="font-normal normal-case">{ownerName}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {``}
              <span className="font-normal normal-case">{email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Discharged: {``}
              <span className="font-normal normal-case">{date}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {``}
              <span className="font-normal normal-case">{symptoms}</span>
          </p>

          <div className="mt-8">
            <button 
            type="button"
            className="py-2 px-10 mr-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPatient(patients)}
            >Edit</button>

            <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleDelete}
            >Delete</button>
          </div>
        </div>
    </>
  )
}

export default Patients