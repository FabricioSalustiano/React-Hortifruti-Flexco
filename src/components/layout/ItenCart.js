import styles from './modules/ItenCart.module.css';
import imgDefault from '../../img/img-default-placeholder.jpg'


function ItenCart ({fruit, removeFruitsCart, addFruitsCart}) {
    return (
        <>
            <div key={fruit.id} className={styles.listItensCart}>
                <img className={styles.cartItensImage} src={imgDefault} alt={fruit.name}></img>
                <div className={styles.elementsInterface}>
                    <h2>{fruit.name}</h2>
                    <div className={styles.elementsQuantity}>
                        <button onClick={() => addFruitsCart(fruit)}>+</button>
                        <label>{fruit.quantity}</label>
                        <button onClick={() => removeFruitsCart(fruit)}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItenCart;