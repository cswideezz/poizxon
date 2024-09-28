// import React from 'react'
import { useEffect, useState } from 'react';
import ButtonTg from '../../ui/ButtonTg/ButtonTg';
import s from './Header.module.scss'

import Links from './Links.js'

import { Link } from 'react-router-dom';

const Header = () => {

    const [isMenu, setIsMenu] = useState(false)

    const openMenu = () => {
        setIsMenu(true)
    }

    const closeMenu = () => {
        setIsMenu(false)
    }

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(s.overlay)) {
            console.log(e.target);
            closeMenu()
        }
    }

    useEffect(() => {
        if (isMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenu])

    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>

                    <Link to={'/'}>
                        <img src="/logo.svg" alt="logo" />
                    </Link>

                    <div onClick={handleOverlayClick} className={`${s.overlay} ${isMenu ? `${s.overlay_open}` : ''}`}>
                        <div className={s.menu}>

                            <div className={s.menu_top}>
                                <Link to={'/'} onClick={closeMenu}>
                                    <img src="/logo.svg" alt="logo" />
                                </Link>

                                <div onClick={closeMenu} className={s.close_btn}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5406 13.9999L26.0513 4.4892C26.223 4.32344 26.3598 4.12517 26.454 3.90595C26.5482 3.68673 26.5978 3.45095 26.5998 3.21236C26.6019 2.97378 26.5564 2.73717 26.4661 2.51634C26.3758 2.29552 26.2423 2.0949 26.0736 1.92619C25.9049 1.75748 25.7043 1.62405 25.4835 1.53371C25.2626 1.44336 25.026 1.3979 24.7874 1.39997C24.5489 1.40204 24.3131 1.45161 24.0939 1.54578C23.8746 1.63995 23.6764 1.77684 23.5106 1.94846L13.9999 11.4592L4.4892 1.94846C4.15031 1.62115 3.69642 1.44004 3.22529 1.44413C2.75417 1.44822 2.3035 1.6372 1.97035 1.97035C1.6372 2.3035 1.44822 2.75417 1.44413 3.22529C1.44004 3.69642 1.62115 4.15031 1.94846 4.4892L11.4592 13.9999L1.94846 23.5106C1.77684 23.6764 1.63995 23.8746 1.54578 24.0939C1.45161 24.3131 1.40204 24.5489 1.39997 24.7874C1.3979 25.026 1.44336 25.2626 1.53371 25.4835C1.62405 25.7043 1.75748 25.9049 1.92619 26.0736C2.0949 26.2423 2.29552 26.3758 2.51634 26.4661C2.73717 26.5564 2.97378 26.6019 3.21236 26.5998C3.45095 26.5978 3.68673 26.5482 3.90595 26.454C4.12517 26.3598 4.32344 26.223 4.4892 26.0513L13.9999 16.5406L23.5106 26.0513C23.8495 26.3787 24.3034 26.5598 24.7745 26.5557C25.2456 26.5516 25.6963 26.3626 26.0295 26.0295C26.3626 25.6963 26.5516 25.2456 26.5557 24.7745C26.5598 24.3034 26.3787 23.8495 26.0513 23.5106L16.5406 13.9999Z" fill="#1F2A37" />
                                    </svg>
                                </div>
                            </div>

                            {Links.map((item, index) => (
                                <Link key={index} to={item.to} onClick={closeMenu}>{item.label}</Link>
                            ))}

                            <div className={s.btn_mobile}>
                                <ButtonTg to="https://web.telegram.org/a/#7310239199" showImage={true} variant="solid" />
                            </div>
                        </div>
                    </div>

                    <div className={s.inner}>
                        <Link to={'/'} className={s.cart_icon}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5261 13.1983C18.7779 13.1984 19.0229 13.1205 19.2239 12.9764C19.4249 12.8323 19.5709 12.6299 19.6399 12.3998L21.9557 4.70081C22.0048 4.53713 22.0132 4.36486 21.9803 4.19756C21.9474 4.03026 21.8741 3.87249 21.7662 3.73667C21.6582 3.60085 21.5185 3.49068 21.3581 3.41484C21.1977 3.33899 21.021 3.29954 20.8418 3.29959H5.52308L4.83414 0.819397C4.76894 0.584554 4.62374 0.376814 4.4212 0.228588C4.21866 0.0803615 3.97016 -1.43146e-05 3.71447 1.9122e-09H1.15788C0.85079 1.9122e-09 0.556279 0.115878 0.339135 0.322142C0.12199 0.528406 0 0.808161 0 1.09986C0 1.39156 0.12199 1.67132 0.339135 1.87758C0.556279 2.08385 0.85079 2.19972 1.15788 2.19972H2.82291L3.51763 4.67991V4.69091V4.70081L5.83339 12.3998L6.69717 15.684C6.12533 15.9249 5.63257 16.3079 5.27092 16.7927C4.90927 17.2775 4.69215 17.8461 4.64248 18.4384C4.59281 19.0307 4.71245 19.6248 4.98875 20.1579C5.26505 20.6909 5.68776 21.1433 6.21225 21.4671C6.73674 21.7908 7.34355 21.9741 7.96859 21.9974C8.59363 22.0208 9.21372 21.8834 9.76337 21.5998C10.313 21.3161 10.7718 20.8968 11.0914 20.3859C11.4109 19.8751 11.5793 19.2918 11.5788 18.6977C11.5749 18.3221 11.5029 17.95 11.3657 17.5978H14.1076C13.9705 17.95 13.8984 18.3221 13.8945 18.6977C13.8945 19.3503 14.0983 19.9882 14.48 20.5308C14.8616 21.0734 15.4041 21.4963 16.0389 21.7461C16.6736 21.9958 17.372 22.0612 18.0458 21.9338C18.7197 21.8065 19.3386 21.4923 19.8244 21.0308C20.3102 20.5694 20.641 19.9814 20.7751 19.3414C20.9091 18.7013 20.8403 18.0379 20.5774 17.435C20.3145 16.832 19.8693 16.3167 19.298 15.9542C18.7268 15.5916 18.0552 15.3981 17.3682 15.3981H9.00829L8.42935 13.1983H18.5261ZM19.3065 5.49931L17.653 10.9986H7.82031L6.16686 5.49931H19.3065ZM9.26303 18.6977C9.26303 18.9152 9.19512 19.1278 9.06789 19.3087C8.94066 19.4896 8.75982 19.6306 8.54825 19.7138C8.33667 19.797 8.10386 19.8188 7.87926 19.7764C7.65465 19.7339 7.44834 19.6292 7.2864 19.4754C7.12447 19.3216 7.01419 19.1256 6.96952 18.9122C6.92484 18.6989 6.94777 18.4777 7.03541 18.2768C7.12304 18.0758 7.27145 17.904 7.46186 17.7832C7.65228 17.6623 7.87614 17.5978 8.10515 17.5978C8.41224 17.5978 8.70675 17.7137 8.92389 17.9199C9.14104 18.1262 9.26303 18.406 9.26303 18.6977ZM17.3682 19.7975C17.1392 19.7975 16.9153 19.733 16.7249 19.6122C16.5345 19.4913 16.3861 19.3195 16.2984 19.1186C16.2108 18.9176 16.1879 18.6964 16.2325 18.4831C16.2772 18.2697 16.3875 18.0738 16.5494 17.9199C16.7114 17.7661 16.9177 17.6614 17.1423 17.6189C17.3669 17.5765 17.5997 17.5983 17.8113 17.6815C18.0228 17.7648 18.2037 17.9057 18.3309 18.0866C18.4581 18.2675 18.5261 18.4801 18.5261 18.6977C18.5261 18.9894 18.4041 19.2691 18.1869 19.4754C17.9698 19.6816 17.6753 19.7975 17.3682 19.7975Z" fill="#73818E" />
                            </svg>
                        </Link>

                        <div className={s.btn_pc}>
                            <ButtonTg to="https://web.telegram.org/a/#7310239199" showImage={true} variant="main" />
                        </div>

                        <div onClick={openMenu} className={s.burger}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.625 4.66675H0.875C0.391751 4.66675 0 5.08462 0 5.60008V7.46675C0 7.98221 0.391751 8.40008 0.875 8.40008H2.625C3.10825 8.40008 3.5 7.98221 3.5 7.46675V5.60008C3.5 5.08462 3.10825 4.66675 2.625 4.66675Z" fill="#1F2A37" />
                                <path d="M2.625 12.1334H0.875C0.391751 12.1334 0 12.5513 0 13.0667V14.9334C0 15.4489 0.391751 15.8667 0.875 15.8667H2.625C3.10825 15.8667 3.5 15.4489 3.5 14.9334V13.0667C3.5 12.5513 3.10825 12.1334 2.625 12.1334Z" fill="#1F2A37" />
                                <path d="M2.625 19.6001H0.875C0.391751 19.6001 0 20.0179 0 20.5334V22.4001C0 22.9155 0.391751 23.3334 0.875 23.3334H2.625C3.10825 23.3334 3.5 22.9155 3.5 22.4001V20.5334C3.5 20.0179 3.10825 19.6001 2.625 19.6001Z" fill="#1F2A37" />
                                <path d="M26.25 8.40008H8.75C8.28587 8.40008 7.84075 8.20341 7.51256 7.85335C7.18437 7.50328 7 7.02849 7 6.53341C7 6.03834 7.18437 5.56355 7.51256 5.21348C7.84075 4.86341 8.28587 4.66675 8.75 4.66675H26.25C26.7141 4.66675 27.1593 4.86341 27.4874 5.21348C27.8156 5.56355 28 6.03834 28 6.53341C28 7.02849 27.8156 7.50328 27.4874 7.85335C27.1593 8.20341 26.7141 8.40008 26.25 8.40008Z" fill="#1F2A37" />
                                <path d="M26.25 15.8667H8.75C8.28587 15.8667 7.84075 15.6701 7.51256 15.32C7.18437 14.9699 7 14.4952 7 14.0001C7 13.505 7.18437 13.0302 7.51256 12.6801C7.84075 12.3301 8.28587 12.1334 8.75 12.1334H26.25C26.7141 12.1334 27.1593 12.3301 27.4874 12.6801C27.8156 13.0302 28 13.505 28 14.0001C28 14.4952 27.8156 14.9699 27.4874 15.32C27.1593 15.6701 26.7141 15.8667 26.25 15.8667Z" fill="#1F2A37" />
                                <path d="M26.25 23.3334H8.75C8.28587 23.3334 7.84075 23.1367 7.51256 22.7867C7.18437 22.4366 7 21.9618 7 21.4667C7 20.9717 7.18437 20.4969 7.51256 20.1468C7.84075 19.7967 8.28587 19.6001 8.75 19.6001H26.25C26.7141 19.6001 27.1593 19.7967 27.4874 20.1468C27.8156 20.4969 28 20.9717 28 21.4667C28 21.9618 27.8156 22.4366 27.4874 22.7867C27.1593 23.1367 26.7141 23.3334 26.25 23.3334Z" fill="#1F2A37" />
                            </svg>

                        </div>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header