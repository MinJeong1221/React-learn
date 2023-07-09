import React from 'react'
import {IRroduct} from './ProductTable'

export interface ProductRowProps{
    product: IRroduct;
    key: string;
}

function ProductRow(props: ProductRowProps): React.ReactElement {
    const name = props.product.stocked ?
        props.product.name :
        <span style={{color: 'red'}}>
            {props.product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductRow