import {Navbar} from './components/main'
import {Routes, Route} from 'react-router-dom'
import {Home, Form1, App2, Form3, Form4, Login, NoPageMatch, Signup} from './components/main'
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
        <Route path='/' element={<Login />} />
        <Route path ='/signup' element={<Signup />} />
        <Route path='*' element={<NoPageMatch />} />
      </Routes>
      </>
    </>
  );
}

export default App;
