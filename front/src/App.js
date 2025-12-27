import axios from './config/axiosConfig';
//hooks
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
//components
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
//views
import About from './views/About';
import Error from './views/Error';
import Detail from './views/Detail/Detail.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Landing from './views/Landing/Landing.jsx';
import Home from './views/Home/Home.jsx';
import Create from './views/Create/Create.jsx';
import MyCreations from './views/MyCreations/MyCreations';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   async function login(userData) {
      try {
         const { email, password } = userData;
         // Usamos la instancia configurada
         const { data } = await axios.get(`/login?email=${email}&password=${password}`);

         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         // Es buena práctica manejar el error visualmente o por consola
         console.log(error);
      }
   }

   async function loginInvited() {
      try {
         const email = "joe@gmail.com";
         const password = "joe123";
         
         // Usamos la instancia de axios configurada (ya incluye la URL base)
         const { data } = await axios.get(`/login?email=${email}&password=${password}`);

         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
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
            <Route path='/create' element={<Create />} />
            <Route path='/my-creations' element={<MyCreations />} />
            <Route component={Error} />
         </Routes>
      </div>
   );
}

export default App;
