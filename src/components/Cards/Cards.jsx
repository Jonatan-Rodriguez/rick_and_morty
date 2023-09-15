import Card from '../Card/Card';

export default function Cards(props) {
   return (
   <div>
      {props.characters.map(element => {
         return (
         <Card
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={props.onClose}
         />
         )
      })}
   </div>
   );
}
