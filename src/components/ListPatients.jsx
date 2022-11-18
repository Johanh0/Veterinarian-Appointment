import Patients from "./Patients"

const ListPatients = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-3xl text-center">
          List Patients
        </h2>
        <p className="text-lg mt-2 text-center mb-10">
          Manage Your{` `}
          <span className="text-indigo-600 font-bold">Patients {`&`} Appointments.</span>
        </p>
      <div className="md:h-screen md:overflow-y-scroll">
      <Patients/>
      <Patients/>
      <Patients/>
      <Patients/>
      <Patients/>
      <Patients/>
      <Patients/>
      </div>

    </div>
  )
}

export default ListPatients