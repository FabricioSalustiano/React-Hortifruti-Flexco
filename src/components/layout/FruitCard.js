import { Link } from 'react-router-dom';

import styles from './modules/FruitCard.module.css';
import imgDefault from '../../img/img-default-placeholder.jpg';

function FruitCard({fruit, addFruitsCart}) {
    const {nutritions} = fruit;

    return (
        <div className={styles.fruitCardWrapper}>
            <Link to={`/produto/:${fruit.name}`}><img src={imgDefault}alt={fruit.name}></img></Link>
            <div className={styles.elementsText}>
                <Link to={`/produto/:${fruit.name}`} className={styles.titleLink}><h2>{fruit.name}</h2></Link>
                <p>Carbohydrates: {nutritions.carbohydrates}g</p>
                <p>Protein: {nutritions.protein}g</p>
                <p>Fat: {nutritions.fat}g</p>
            </div>
            <button className={styles.btnAddFruitsCart} onClick={() => addFruitsCart(fruit)}>
                Add to Cart
            </button>
        </div>
    )
}

export default FruitCard;