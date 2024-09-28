// Product.jsx

import React, { useState } from 'react';
import s from './Product.module.scss';

import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



const Product = ({ product }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    if (!product) {
        return null;
    }

    return (
        <section className={s.product}>
            <div className="container">

                <div className={s.wrap}>
                    <div className={s.images}>
                        <Swiper
                            modules={[Pagination, Navigation, Thumbs]}
                            style={{ '--swiper-navigation-color': '#1F2A37', '--swiper-pagination-color': '#1F2A37', 'padding': '0 50px' }}
                            spaceBetween={50}
                            navigation
                            // pagination={{ clickable: true }}
                            thumbs={{ swiper: thumbsSwiper }}
                            className={s.mainSwiper}
                        >
                            {product.images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.url} alt={product.name} className={s.img} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={30}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress
                            className={s.thumbsSwiper}

                            breakpoints={{
                                500: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {product.images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.url} alt={product.name} className={s.thumbImg} />
                                </SwiperSlide>
                            ))}
                        </Swiper>



                    </div>

                    <div className={s.box}>

                        <h3>{product.brand}</h3>
                        <h2>{product.name}</h2>
                        <h4>{product.price} {product.currency}</h4>
                        <p>
                            Все налоги и таможенные сборы включены. <br />
                            Стоимость доставки рассчитывается на этапе оформления заказа.
                        </p>

                        <b>*Бирка на ваших кроссовках поможет выбрать правильный размер.</b>

                        <button>Купить</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;
