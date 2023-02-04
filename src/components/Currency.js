import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {  currency, dispatch } = useContext(AppContext);

    const onCurrencyChange = (e) => {
        const { value } = e.target;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    return (
        <div class="alert alert-success" role="alert">
        Currency
        <select prefix='Currency' value={currency} onChange={onCurrencyChange} style={{color: 'black'}}>
            <option value='$'>$ Dollar</option>
            <option value='£'>£ Pound</option>
            <option value='€'>€ Euro</option>
            <option value='₹'>₹ Ruppee</option>
        </select>
        </div>
    );
};

export default Currency;