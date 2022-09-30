import React, {FC} from 'react';
import Header from "../components/Header";
import Converter from "../components/Converter/Converter";
import CurrencyList from "../components/CurrencyList";
import {useSelectorEx} from "../hooks/redux";
import { selectCurrenciesListEx} from "../redux/selectors/selectors";

const Home:FC = () => {
    const currencies = useSelectorEx(selectCurrenciesListEx);
    return (
        <div className={'container'}>
            <div className="wrap">
                <div className="content">
                    <Header title={'Converter currencies'}>
                        <CurrencyList currencies={currencies}/>
                    </Header>
                    <Converter/>
                </div>
            </div>
        </div>
    );
};

export default Home;