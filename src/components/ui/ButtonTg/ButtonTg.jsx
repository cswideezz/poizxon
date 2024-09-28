// import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import s from './ButtonTg.module.scss'

const ButtonTg = ({ to = '/', showImage = true, variant = 'main' }) => {
    const buttonClass = classNames(s.btn, {
        [s.btn_main]: variant === 'main',
        [s.btn_solid]: variant === 'solid',
    })

    const imgSrc = variant === 'solid' ? '/logo3.svg' : '/logo2.svg'

    return (
        <Link to={to} className={buttonClass}>
            {showImage && <img src={imgSrc} alt="logo" />}
            <div>
                <b>Наш телеграм канал</b>
                <p>Telegram web app</p>
            </div>
        </Link>
    )
}

export default ButtonTg
