import { useState, useEffect} from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './views/About';
import Error from './views/Error';
import Detail from './views/Detail/Detail.jsx';
import Form from './components/Form/Form';
import Favorites from './views/Favorites';

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

   //https://rym2-production.up.railway.app/api/character/${id}?key=henrym-jonatan-rodriguez
   
   const onSearch = (id) => {

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            const copy = characters.filter(element => element.id === data.id)

            if(!copy[0]){
               setCharacters((oldChars) => [...oldChars, data]);
            }else{
               alert('Personaje repetido')
            }
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFiltered);
      
   }

   function randomHandler() {
      let memoria = [];

      let randomId = (Math.random() * 826).toFixed();

      randomId = Number(randomId);

      if (!memoria.includes(randomId)) {
         memoria.push(randomId);
         onSearch(randomId);
      } else {
         alert("Ese personaje ya fue agregado");
         return;
      }
   }

   return (
      <div className='App'>

         {  location.pathname !== '/' && <Nav logout={logout}/>
            /* otra forma de hacer un renderizado condicional
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/>
            : null 
            */
         }

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards onSearch={onSearch} randomize={randomHandler} characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
