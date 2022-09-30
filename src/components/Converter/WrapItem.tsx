import React, {FC} from 'react';
interface WrapItem {
    title?: string;
    children: any
}
const WrapItem:FC<WrapItem> = ({title, children}) => {
    return (
        <div className="wrap-block">
            {title && <span className={'wrap-block__title'}>{title}</span>}
            {children}
        </div>
    );
};

export default WrapItem;