import { Link } from 'react-router-dom';

import styles from './modules/Header.module.css';
import logo from '../../img/Orange.png';
import carrinhoCompras from '../../img/CarrinhoComprasBtn.png';

function Header({pageTitle, cartItens}) {
    return (
        <header className={styles.titles}>
            <Link to={'/'}><img src={logo} alt="Logo da loja"></img></Link>
            <h1>{pageTitle}</h1>
            <div>
                {cartItens.length !== 0 && (
                    <div className={styles.spanItensCart}>
                        <span>{cartItens.length}</span>
                    </div>
                )}
                <Link to={'/carrinho'}>
                    <img src={carrinhoCompras} alt='' className={styles.carrinhoLogo}></img>
                </Link>
            </div>
        </header>
    )
}

export default Header;