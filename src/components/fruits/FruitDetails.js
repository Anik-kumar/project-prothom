import { useEffect, useState } from "react";

const FruitDetails = (props) => {

  const [fruit, setFruit] = useState('');
  const fruitId = props.match.params.id;

  useEffect(() => {
    const getFruit = async () => {
      const result = await fetch(`http://localhost:8000/fruits/${fruitId}`);

      const data = await result.json();
      // console.log("result ", data);
      if(data.id == fruitId) {
        setFruit(data);
      }
    }

    getFruit();
  }, []);

  return (
    <div>
      <h2>{fruit.bangla}</h2>
      <p className="cap">English: {fruit.name}</p>
      <p>Scientific name: <i className="cap">{fruit.scientific_name}</i></p>
      <p className="cap">Season: {fruit.season} </p>
      <img src={fruit.image} alt={fruit.name} width="400px" />
    </div>
  )
}

export default FruitDetails;