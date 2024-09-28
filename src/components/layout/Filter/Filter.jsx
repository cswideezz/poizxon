import PriceSlider from '../../ui/PriceSlider/PriceSlider'
import s from './Filter.module.scss'

const Filter = () => {
    return (
        <>
            <section className={s.filter}>
                <div className="container">
                    <div className={s.wrap}>
                        <PriceSlider />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter