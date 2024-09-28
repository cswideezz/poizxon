// import React from 'react'
import { Link } from 'react-router-dom'
import s from './Mix.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { useRef } from 'react';
import MixData from './MixData.js'


const Mix = () => {

    const swiperRef = useRef(null);

    return (
        <section className={s.mix}>
            <div className="container">
                <div className={s.top}>
                    <h2>Категории. <span>Гарантированно оригинальные товары</span></h2>

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
                </div>
            </div>

            <div className={s.wrap}>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={1}

                    breakpoints={{
                        768: {
                            slidesPerView: 1.8,
                            spaceBetween: 40,
                        },
                        1250: {
                            slidesPerView: 2.6,
                            spaceBetween: 50,
                        },
                    }}
                >

                    {MixData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={s.card}>
                                <div>
                                    <h3>{item.title} <span>{item.icon}</span></h3>
                                    <p>{item.desc}</p>
                                    <Link to={item.link}>Выбрать</Link>
                                </div>

                                <img src={item.image} alt="img" />
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>

        </section>
    )
}

export default Mix