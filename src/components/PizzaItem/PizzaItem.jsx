/* Import needed libraries */
import { useSelector, useDispatch } from 'react-redux';

/* Import css */
import './PizzaItem.css';

function PizzaItem({ pizza }) {
  const dispatch = useDispatch();
  const [isAddVisible, setIsAddVisible] = useState(true);

  /* handle ADD */
  const addPizzaToOrder = () => {
    dispatch({
      type: 'ADD_TO_ORDER',
      payload: pizza,
    });
    setIsAddVisible(!isAddVisible);
  };

  /* handle REMOVE */
  const removePizzaFromOrder = () => {
    dispatch({
      type: 'REMOVE_FROM_ORDER',
      payload: pizza.id,
    });
    setIsAddVisible(!isAddVisible);
  };

  return (
    <div className="pizza-item">
      <img
        src={pizza.image_path}
        alt={pizza.description}
        width="200"
        height="200"
      />
      <div className="pizza-description">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <p className="pizza-price">${pizza.price}</p>
      </div>
      {isAddVisible ? (
        <div className="add-remove" onClick={addPizzaToOrder}>
          <h4>Add</h4>
        </div>
      ) : (
        <div className="add-remove" onClick={removePizzaFromOrder}>
          <h4>Remove</h4>
        </div>
      )}
    </div>
  );
}

export default PizzaItem;
