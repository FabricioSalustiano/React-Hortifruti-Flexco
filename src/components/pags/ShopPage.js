import Header from "../layout/Header";
import FruitCard from '../layout/FruitCard';

import styles from '../layout/modules/ShopPage.module.css';


function ShopPage({allFruits, addFruitsCart, cartItens}){

    return (
        <>
            <Header pageTitle="Catalog" cartItens={cartItens}/>
            <section className={styles.catalogWrapper}>
                <div className={styles.CardsWrapper}>
                    {allFruits && allFruits.map((fruit) => {
                        return <FruitCard key={fruit.id} fruit={fruit} addFruitsCart={addFruitsCart}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default ShopPage;