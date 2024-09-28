import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './PriceSlider.module.scss';

const PriceSlider = () => {
  const [values, setValues] = useState([3076, 334485]);
  const minPrice = 3076;
  const maxPrice = 334485;

  const handleReset = () => {
    setValues([minPrice, maxPrice]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Range
          step={1}
          min={minPrice}
          max={maxPrice}
          values={values}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values,
                    colors: ['#ccc', '#007bff', '#ccc'],
                    min: minPrice,
                    max: maxPrice
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                backgroundColor: '#007bff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA'
              }}
            >
              <div
                
              />
            </div>
          )}
        />
      </div>
      <div className={styles.priceInputs}>
        <div className={styles.inputContainer}>
          <label htmlFor="minPrice">От</label>
          <input
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), values[1] - 1);
              setValues([value, values[1]]);
            }}
          />
          <span>₽</span>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="maxPrice">До</label>
          <input
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), values[0] + 1);
              setValues([values[0], value]);
            }}
          />
          <span>₽</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => console.log('Filters Applied')}>
          Готово
        </button>
        <button onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default PriceSlider;
