import { useState, useEffect } from "react";
// import { v1 as uuid } from "uuid";
import Fruit from "./Fruit";

const Fruits = () => {

  const [fruits, setFruits] = useState([]);
  const [fruitCounter, setFruitCounter] = useState(1);

  useEffect(() => {
    const getFruits = async () => {
      const result = await fetch("http://localhost:8000/fruits");
  
      const tmp = await result.json().then(data => {
        setFruits(data);
        // console.log("data ", data);
      });
    };

    getFruits()
  }, []);

  const loadFruits = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if(bottom) {
      console.log("Bottoms up");
      const tmp = fruitCounter + 1;
      setFruitCounter(tmp);
    }
  }

  const limitFruits = () => {
    const tmpArr = [];
    for(const [index, value] of fruits.entries()) {
      if(index < (fruitCounter*5)) {
        tmpArr.push(value);
      }
    }

    return tmpArr;
  }


  return (
    <div className="fruits" onScroll={loadFruits} >
      <h2>Fruits</h2>
      <div className="fruit-list">
        {
          limitFruits().map((f, i) => (
            <Fruit fruit={f} key={f.id} />
          ))
         }
      </div>
    </div>
  )
}

export default Fruits;