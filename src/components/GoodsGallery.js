// Компонент GoodsGallery, який відображає список товарів у вигляді галереї
import React from 'react';
import GoodsCard from './GoodsCard';
import styles from './GoodsGallery.module.css'

function GoodsGallery() {
    const products = [
        {
            id: 1,
            image: 'goodsImages/blueberry.png',
            name: 'Product 1',
            price: '10',
        },
        {
            id: 2,
            image: 'goodsImages/cherry.png',
            name: 'Product 2',
            price: '20',
        },
        {
            id: 3,
            image: 'goodsImages/peach.png',
            name: 'Product 3',
            price: '30',
        },
        {
            id: 4,
            image: 'goodsImages/pineapple.png',
            name: 'Product 4',
            price: '40',
        },
        {
            id: 5,
            image: 'goodsImages/raspberry.png',
            name: 'Product 5',
            price: '50',
        },
        {
            id: 6,
            image: 'goodsImages/strawberry.png',
            name: 'Product 6',
            price: '60',
        },
    ];

    return (
        <div className={styles.goodsGalleryContainer}>
            {products.map((product) => (
                <GoodsCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default GoodsGallery;