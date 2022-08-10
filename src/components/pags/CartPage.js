import { Link } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi';
import Header from "../layout/Header";
import ItenCart from "../layout/ItenCart";

import styles from '../layout/modules/CartPage.module.css';


function CartPage({cartItens, removeFruitsCart, addFruitsCart, clearFruitsCart}){
    return (
        <>
            <Header pageTitle="Shopping List" cartItens={cartItens}/>
            <section className={styles.cartItensWrapper}>
                <div className={styles.headerCartItens}>
                    <Link to={'/'}><BiArrowBack className={styles.iconRetornPage} /></Link>
                    {cartItens.length >= 1 && (
                            <button className={styles.btnClearCart} onClick={() => clearFruitsCart()}>
                                Clear Cart
                            </button>
                    )}
                </div>
                <div className={styles.ItensWrapper}>
                    {cartItens.length === 0 && (<h2>There are no items in your cart</h2>)}
                    {cartItens.map((fruit) => {
                        return <ItenCart 
                            key={fruit.id} 
                            fruit={fruit} 
                            removeFruitsCart={removeFruitsCart} 
                            addFruitsCart={addFruitsCart} 
                            />
                    })}
                </div>
            </section>
        </>
    )
}

export default CartPage;