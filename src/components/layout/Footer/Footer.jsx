import React from 'react';
import s from './Footer.module.scss'

import { Link } from 'react-router-dom';
import ButtonTg from '../../ui/ButtonTg/ButtonTg';


const Footer = () => {
    const helpSection = [
        { title: 'Частые вопросы', link: '#' },
        { title: 'Доставка и самовывоз', link: '#' },
    ];

    const links = [
        // { title: 'Политика и условия', link: '#' },
        { title: 'Обмен и возврат', link: '#' },
        { title: 'Политика конфиденциальности', link: '#' },
        { title: 'Условия предоставления услуг', link: '#' },
    ];

    const customerSupportSection = [
        { title: 'support@thesorrage.com', link: 'mailto:support@thesorrage.com' },
        { title: '+7(995)788-00-58', link: 'tel:+79957880058' },
        { title: 'Звонки принимаются ежедневно с 10:00 до 22:00 по МСК.', text: true },
    ];

    const warehouseAddressSection = [
        { title: 'Москва, Кутузовский проспект 48 ТЦ Галерея "Времена года", 3 этаж.', text: true },
        { title: 'Время работы: ежедневно с 10:00 до 22:00.', text: true },
        { title: 'Московская область, деревня Воронки, д. 4, ТД Архангельское Аутлет.', text: true },
        { title: 'Время работы: ежедневно с 10:00 до 22:00.', text: true },
    ];

    return (
        <footer className={s.footer}>

            <div className="container">
                <div className={s.wrap}>
                    <div className={s.box}>
                        <h3>Помощь</h3>
                        <ul>
                            {helpSection.map((item, index) => (
                                <li key={index}>
                                    {item.link ? <Link href={item.link}>{item.title}</Link> : <span>{item.title}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.box}>
                        <h3>Политика и условия</h3>
                        <ul>
                            {links.map((item, index) => (
                                <li key={index}>
                                    {item.link ? <Link href={item.link}>{item.title}</Link> : <span>{item.title}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.box}>
                        <h3>Служба клиентской поддержки</h3>
                        <ul>
                            {customerSupportSection.map((item, index) => (
                                <li key={index}>
                                    {item.link ? <Link href={item.link}>{item.title}</Link> : <span>{item.title}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.box}>
                        <h3>Адреса складов</h3>
                        <ul>
                            {warehouseAddressSection.map((item, index) => (
                                <li key={index}>
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <ButtonTg to="https://web.telegram.org/a/#7310239199" showImage={true} variant="solid" />


            </div>


        </footer>
    );
};

export default Footer;