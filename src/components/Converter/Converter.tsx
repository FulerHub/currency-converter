import React, {useEffect, useState} from 'react';
import {Input, Select} from "antd";
import {useGetCurrenciesQuery} from "../../redux/services/currency";
import {useSelectorEx} from "../../hooks/redux";
import {selectCurrenciesList} from "../../redux/selectors/selectors";
import Preloader from "../Preloader";
import WrapItem from "./WrapItem";
import {
    getConvertFixedNumberToString,
    getConvertFixedStringToNumber
} from "../../helpers/scripts";
const { Option } = Select;


const Converter = () => {
    const {isLoading} = useGetCurrenciesQuery();
    const [currency, setCurrency] = useState('1');
    const [result, setResult] = useState('1');
    const currencies = useSelectorEx(selectCurrenciesList);
    const [currencyValue, setCurrencyValue] = useState(0);
    const [resultValue, setResultValue] = useState(0);

    useEffect(()=>{
        if(currencies.length > 0){
            setCurrencyValue(currencies[0].value);
            setResultValue(currencies[0].value);
        }
    },[currencies]);

    if(isLoading) return <Preloader/>;
    let filterOption = (input:any, option:any) =>(option!.children as unknown as string).toLowerCase().includes(input.toLowerCase());
    const handleChangeSelectCurrency = (value:number)=>{
        let res = getConvertFixedNumberToString((resultValue/value)*parseFloat(currency));
        setResult(res);
        setCurrencyValue(value);
    };
    const handleChangeSelectResult = (value:number)=>{
        let res = getConvertFixedNumberToString((currencyValue/value)*parseFloat(result));
        setCurrency(res);
        setResultValue(value);
    };

    const handleChangeCurrency = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value === '') e.target.value = '0';
        let value:number = getConvertFixedStringToNumber(e.target.value);
        if(!isNaN(value)){
            setCurrency(e.target.value);
            let res = getConvertFixedNumberToString((resultValue/currencyValue)*value);
            setResult(res);
        }
    };
    const handleChangeResult = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value === '') e.target.value = '0';
        let value:number = getConvertFixedStringToNumber(e.target.value);
        if(!isNaN(value) ){
            setResult(e.target.value);
            let res = getConvertFixedNumberToString((currencyValue/resultValue)*value);
            setCurrency(res);
        }
    };
    return (
        <div className={'converter'}>
            <WrapItem title={'I have'}>
               <Input type={'number'} placeholder={'Value'} defaultValue="0" min="0" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" onChange={handleChangeCurrency} onBlur={handleChangeCurrency} value={currency}/>
                <Select showSearch value={currencyValue} style={{ width: 120 }} onChange={handleChangeSelectCurrency} filterOption={filterOption}>
                    {currencies.length > 0 ? currencies.map((item,index)=> <Option key={index} value={item.value}>{item.name}</Option>):""}
                </Select>
            </WrapItem>
            <WrapItem title={'I will got'}>
                <Input type={'number'} placeholder={'Result'} defaultValue="0" min="0" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" onChange={handleChangeResult} onBlur={handleChangeResult} value={result} />
                <Select showSearch value={resultValue} style={{ width: 120 }} onChange={handleChangeSelectResult} filterOption={filterOption}>
                    {currencies.length > 0 ? currencies.map((item,index)=> <Option key={index} value={item.value}>{item.name}</Option>):""}
                </Select>
            </WrapItem>
        </div>
    );
};

export default Converter;