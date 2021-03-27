
const Fruit = ({ fruit }) => {

  return (
    <div className="fruit">
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