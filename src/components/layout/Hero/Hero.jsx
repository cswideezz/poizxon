// import React from 'react'

import s from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.box}>
                        <h1>Оригинальные товары от POIZON </h1>
                        <ul>
                            <li>Доставка по всей России бесплатно</li>
                            <li>Официально зарегистрированное юридическое лицо</li>
                            <li>Оформление и оплата заказа как в магазине</li>
                            <li>Только сертифицированные товары из каталога POIZON</li>
                            <li>Доставили более 10 000 посылок за 3 года</li>
                        </ul>
                    </div>

                    <img className={s.img} src="./hero_img.png" alt="img" />
                </div>
            </div>
        </section>
    )
}

export default Hero