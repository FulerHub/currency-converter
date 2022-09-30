import {
    createSelector
} from '@reduxjs/toolkit'

import {currencyApi} from "../services/currency";
import {ICurrency, ICurrencyContent} from "../../helpers/types";

export const selectCurrencies = currencyApi.endpoints.getCurrencies.select();

export const selectCurrenciesList = createSelector(selectCurrencies, (currencies)=>{
    let rates = currencies?.data?.rates;
    let newCurrencies:ICurrency[] = [];
    for(let item in rates){
        newCurrencies.push({
            name:item,
            value:rates[item]
        });
    }
    return newCurrencies;
});
export const selectCurrenciesListEx = createSelector(selectCurrencies, (currencies)=>{
    let rates = currencies?.data?.rates;
    let newCurrencies:ICurrencyContent[] = [];
    for(let item in rates){
        if(item === "USD" || item === "EUR" || item === "PLN"){
            newCurrencies.push({
                title:`${item} -> UAH`,
                content:`1 ${item} = ${(rates['UAH']/rates[item]).toFixed(4)} UAH`
            });
        }

    }
    return newCurrencies;
});