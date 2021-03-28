import { useHistory } from "react-router-dom";

const Fruit = ({ fruit }) => {

  const history = useHistory();

  const redirectFruitDetails = (id) => {
    history.push(`/fruits/${id}`);
    // console.log(`fruit `, id)
  }

  return (
    <div className="fruit" onClick={() => redirectFruitDetails(fruit.id)}>
      <div className="fruit-image">
        <img src={fruit.image} alt="image" width="200" />
      </div>
      <div className="fruit-info">
        <h4>{fruit.bangla}</h4>
        <p className="cap">English: {fruit.name} </p>
        <p>Scientific name: <i className="cap">{fruit.scientific_name}</i> </p>
        <p className="cap">Season: {fruit.season} </p>
      </div>
    </div>
  )
}


export default Fruit;