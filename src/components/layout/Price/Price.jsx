import { useState } from 'react';
import s from './Price.module.scss';

const Price = () => {
    const [yuanPrice, setYuanPrice] = useState('');
    const [rubPrice, setRubPrice] = useState(0);
    const [dollarPrice, setDollarPrice] = useState(0);
    const conversionRateRub = 10; // Пример курса юань к рублю
    const conversionRateDollar = 0.15; // Пример курса юань к доллару

    const handleInputChange = (e) => {
        setYuanPrice(e.target.value);
    };

    const handleConvert = () => {
        if (yuanPrice) {
            setRubPrice(yuanPrice * conversionRateRub);
            setDollarPrice(yuanPrice * conversionRateDollar);
            setYuanPrice('')
        } else {
            setRubPrice(0);
            setDollarPrice(0);
        }
    };

    return (
        <section className={s.price}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.form}>
                        <h2>Рассчитай стоимость заказа прямо на сайте</h2>

                        <form action="" onSubmit={(e) => { e.preventDefault(); handleConvert(); }}>
                            <input
                                type="number"
                                placeholder='Цена на товар в юанях'
                                value={yuanPrice}
                                onChange={handleInputChange}
                            />

                            <button type="submit">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00002 1L8 7.99997L1.00002 15" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
                                    <path d="M8.00002 1L15 7.99997L8.00002 15" stroke="white" strokeWidth="1.5" />
                                </svg>
                            </button>
                        </form>

                        <h3>
                            Итоговая стоимость <br /> в рублях:
                            <span> {rubPrice}₽</span>
                        </h3>

                        <h3>
                            Итоговая стоимость <br /> в долларах:
                            <span> ${dollarPrice.toFixed(2)}</span>
                        </h3>

                        <p>С учётом доставки</p>
                    </div>

                    <div className={s.box}>
                        <h2>Подходит цена? <br />
                            - скорее заказывай!</h2>

                        <p>Выбирайте товары в POZION или покупайте прямо с нашего склада в Москве</p>

                        <div className={s.qr}>
                            <img src="/qrcode.svg" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;
