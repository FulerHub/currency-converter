import React, {FC} from 'react';
interface IHeader {
    title:string;
    children: any
}
const Header:FC<IHeader> = ({title, children}) => {
    return (
        <div className={'header'}>
            <h1 className={'h1 header__h1'}>{title}</h1>
            {children}
        </div>
    );
};

export default Header;