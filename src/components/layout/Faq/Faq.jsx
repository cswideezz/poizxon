import { useState } from 'react'
import s from './Faq.module.scss'

import FaqData from './FaqData'

const Faq = () => {

    const [openAcc, setOpenAcc] = useState(null)

    const toggleAccordion = (index) => {
        if (openAcc === index) {
            setOpenAcc(null)
        } else {
            setOpenAcc(index)
        }
    }


    return (
        <section className={s.faq}>
            <div className="container">
                <h2 className={s.title}>Частые вопросы</h2>

                <div className={s.wrap}>

                    {FaqData.map((item, index) => (
                        <div className={s.item} key={index}>
                            <div className={s.item_top} onClick={() => toggleAccordion(index)}>
                                <h3>{item.title}</h3>
                                <div className={s.item_arrow}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0221 15C9.54477 14.9999 9.08701 14.8246 8.74952 14.5127L1.54952 7.85962C1.3776 7.70619 1.24047 7.52266 1.14614 7.31974C1.0518 7.11681 1.00214 6.89856 1.00007 6.67771C0.997991 6.45687 1.04353 6.23785 1.13404 6.03344C1.22454 5.82903 1.3582 5.64333 1.52721 5.48716C1.69621 5.33099 1.89719 5.20749 2.1184 5.12386C2.33961 5.04023 2.57664 4.99814 2.81564 5.00006C3.05464 5.00198 3.29084 5.04787 3.51045 5.13503C3.73005 5.2222 3.92867 5.34892 4.09472 5.50777L10.0221 10.9849L15.9495 5.50777C16.289 5.2048 16.7437 5.03715 17.2156 5.04094C17.6876 5.04473 18.1391 5.21965 18.4728 5.52804C18.8065 5.83642 18.9958 6.25358 18.9999 6.68969C19.004 7.12579 18.8226 7.54593 18.4947 7.85962L11.2947 14.5127C10.9572 14.8246 10.4995 14.9999 10.0221 15Z" fill="#1F2A37" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${s.item_box} ${openAcc === index ? `${s.open}` : ''}`}>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq