import s from './Income.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useRef } from 'react';
// import dataIncome from './dataIncome';

import { Pagination } from 'swiper/modules';
import ProductsData from '../../../data/ProductsData.js';
import { Link } from 'react-router-dom';

const Income = () => {

    const swiperRef = useRef(null);

    return (
        <section className={s.income}>
            <div className="container">
                <h2 className={s.title}>Новые поступления обуви</h2>

                <div className={s.wrap}>
                    <Swiper
                        className={s.swiper}
                        pagination={{
                            type: 'fraction',
                        }}

                        modules={[Pagination]}

                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={1}


                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1250: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    >

                        {ProductsData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={s.card}>
                                    <Link to={`/product/${item.id}`}>
                                        <img src={item.imageUrl} alt={item.name} />
                                    </Link>
                                    <h3>{item.name}</h3>
                                    <p>{item.brand}</p>
                                    <h4>{item.price} <span>{item.currency}</span></h4>

                                </div>
                            </SwiperSlide>

                        ))}

                    </Swiper>
                </div>

                <div className={s.btns}>
                    <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8571 17.1429L5.71426 10L12.8571 2.85714" stroke="#111C38" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>


                    <button onClick={() => swiperRef.current?.swiper.slideNext()}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.14288 2.85715L14.2857 10L7.14288 17.1429" stroke="#111C38" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                <button className={s.btn_all}>
                    Посмотреть все
                </button>
            </div>
        </section>
    )
}

export default Income