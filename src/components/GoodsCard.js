import React from 'react';
import style from './GoodsCard.module.css';

function GoodsCard(props) {
    return (
        <div className={style.goodsCard}>
            <div>
                <img className={style.goodsCardImage} src={props.image} alt={props.name}/>
            </div>
            <h3 className={style.goodsCardTitle}>{props.name}</h3>
            <p className={style.goodsCardPrice}>{props.price} грн</p>
        </div>
    );
}

export default GoodsCard;