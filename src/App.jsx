 import Header from "./components/Header"
 import Form from "./components/Form"
 import ListPatients from "./components/ListPatients"
 
 function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 flex flex-col md:flex-row">
      <Form/>
      <ListPatients/>
      </div>

    </div>
  )
}

export default App
