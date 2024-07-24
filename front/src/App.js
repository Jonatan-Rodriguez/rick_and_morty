import axios from 'axios';
//hooks
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
//components
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer.jsx';
//views
import About from './views/About';
import Error from './views/Error';
import Detail from './views/Detail/Detail.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Landing from './views/Landing/Landing.jsx';
import Home from './views/Home/Home.jsx';


function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`);

         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         throw Error(error.message);
      }
   }

   async function loginInvited() {
      try {
         const email = "joe@gmail.com";
         const password = "joe123"
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`);

         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         throw Error(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav />}
         <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/form' element={<Form login={login} loginInvited={loginInvited}/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route component={Error} />
         </Routes>
         <Footer/>
      </div>
   );
}

export default App;
