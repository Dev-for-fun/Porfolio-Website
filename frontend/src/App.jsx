import {About,Experience,Contact,Work,Header} from "./container";
import {Navbar} from "./components";
import "./App.scss"

function App() { 

  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App
