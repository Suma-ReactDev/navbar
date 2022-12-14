import {Routes, Route} from 'react-router-dom'
import {Navbar, Home, Form1, App2, Form3, Form4, Form5, Login, NoPageMatch, Signup, PaginationProvider} from './components/main'
import {SingleEmployee} from './components/pages/forms/Form5';

function App() {
  return (
    <>
      <Navbar />
      <>
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='form1' element={<Form1 />} />
        <Route path='form2' element={<App2 />} />
        <Route path='form3' element={<Form3 />} />
        <Route path='form4' element={<Form4 />} />
        <Route path='form5' >
          <Route index element={<PaginationProvider><Form5 /></PaginationProvider>} />
          <Route path=':id' element={<SingleEmployee />} />
        </Route>
        <Route path='/' element={<Login />} />
        <Route path ='/signup' element={<Signup />} />
        <Route path='*' element={<NoPageMatch />} />
      </Routes>
      </>
    </>
  );
}

export default App;
