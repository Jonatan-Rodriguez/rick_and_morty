import { useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/form';


const email = 'joe@gmail.com';
const password = 'joe123';

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access,setAccess] = useState(false);


   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   const logout = () => {
      setAccess(false);
   }

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>

         {  location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>
            /* otra forma de hacer un renderizado condicional
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/>
            : null 
            */
         }

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
