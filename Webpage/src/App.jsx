import './App.css';
import About_Page from './Pages/About_Page/About_Page';
import Contact_Page from './Pages/ContactPage/Contact_Page';

import Homepage from './Pages/HomePage/Homepage';
import Plant from './Pages/Plant/Plant';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Homepage />}></Route> 
          <Route path='/plant' element={<Plant />}></Route>
          <Route path='/about' element={<About_Page />}></Route>
          <Route path='/contact' element={<Contact_Page />}></Route>

        </Routes>



        {/* <Plant /> */}

        {/* <ReactHookForm /> */}

        {/* <About_Page /> */}

        {/* <Contact_Page /> */}

      </BrowserRouter>

    </>
  );
}

export default App;
