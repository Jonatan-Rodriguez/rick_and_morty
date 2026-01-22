import axios from './config/axiosConfig';
// hooks
import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// components
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
// views
import About from './views/About/About.jsx';
import Error from './views/Error/Error.jsx';
import Detail from './views/Detail/Detail.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Landing from './views/Landing/Landing.jsx';
import Home from './views/Home/Home.jsx';
import Create from './views/Create/Create.jsx';
import MyCreations from './views/MyCreations/MyCreations';
import Footer from './components/Footer/Footer';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [, setAccess] = useState(true);

   async function login(userData) {
      try {
         const { email, password } = userData;
         const { data } = await axios.get(`/login?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error);
      }
   }

   async function loginInvited() {
      try {
         const email = "joe@gmail.com";
         const password = "joe123";
         const { data } = await axios.get(`/login?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   }

   // Función para mostrar el Nav
   const showNav = () => {
      const validPathsWithNav = ['/home', '/about', '/favorites', '/create', '/my-creations', '/detail'];
      return validPathsWithNav.some(path => location.pathname.startsWith(path));
   }
   
   return (
      <div className='App' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
         {showNav() && <Nav />}

         <div style={{ flex: 1 }}>
            <Routes>
               <Route path='/' element={<Landing />} />
               <Route path='/form' element={<Form login={login} loginInvited={loginInvited}/>}/>
               
               <Route path='/home' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/favorites' element={<Favorites />} />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/create' element={<Create />} />
               <Route path='/my-creations' element={<MyCreations />} />

               <Route path='*' element={<Error />} />
            </Routes>
         </div>
         <Footer />
      </div>
      
   );
}

export default App;