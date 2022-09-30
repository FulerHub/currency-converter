import React, {FC} from 'react';
import {Card} from "antd";
import {ICurrencyContent} from "../helpers/types";

interface ICurrencyList {
    currencies: ICurrencyContent[]
}
const CurrencyList:FC<ICurrencyList> = ({currencies}) => {
    return (
        <div className={'currency-list'}>
            {currencies.length > 0 && currencies.map(item=> <Card className={'currency-list__item'} title={item.title} bordered={false} style={{ width: 270 }}>
                <p>{item.content}</p>
            </Card>)}
        </div>
    );
};

export default CurrencyList;