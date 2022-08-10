import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi';
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import imgDefault from '../../img/img-default-placeholder.jpg'

import styles from '../layout/modules/ProductInfoPage.module.css';


function ProductInfoPage({cartItens}){
    const { name } = useParams();
    const cleanName = name.replace(':', '');
    const [fruit, setSingleFruit] = useState([]);
    const {nutritions} = fruit;
    


    const getSingleFruit = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setSingleFruit(data);
      }

      useEffect(() => {             
          const singleFruitUrl = `http://localhost:8080/api/fruityvice/${cleanName}`;
          getSingleFruit(singleFruitUrl);
      }, [cleanName]);

    return (
        <>
            <Header pageTitle="Product Information" cartItens={cartItens}/>
            <section className={styles.informationsItenWapper}>
                <Link to={'/'}><BiArrowBack className={styles.iconRetornPage}/></Link>
                <div className={styles.informationsWrapper}>
                    <div className={styles.informationElements}>
                        <img src={imgDefault} alt={fruit.name}></img>
                        <h2>{fruit.name}</h2>
                        <ul>
                            <li>Genus: {fruit.genus}</li>
                            <li>Family: {fruit.family}</li>
                            <li>Order: {fruit.order}</li>
                        </ul>
                        {nutritions && (
                            <div className={styles.informationTextWrapper}>
                                <p><strong>{fruit.name} </strong>fruit contains <strong>{nutritions.carbohydrates}g </strong> 
                                    of carbohydrates per 100 grams of its mass.</p>
                                <p>Your protein is <strong>{nutritions.protein}g</strong>, your fat is  
                                    <strong> {nutritions.fat}g</strong>, your calories are <strong>{nutritions.calories}g </strong>, 
                                    and your sugar is <strong>{nutritions.sugar}g </strong>.</p>
                                
                            </div>
                        )}
                    </div>
                </div> 
            </section>
        </>
    )
}

export default ProductInfoPage;