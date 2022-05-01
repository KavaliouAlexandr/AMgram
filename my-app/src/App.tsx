import React from 'react';
import { TodoForm } from './Components/form';
import { Navbar } from './Components/Navbar';



const App: React.FC = () => {
  return ( <>
  

  <Navbar />
  <div className="container">
    

   <TodoForm />
    
  </div>

  </>
  )
}

export default App;
