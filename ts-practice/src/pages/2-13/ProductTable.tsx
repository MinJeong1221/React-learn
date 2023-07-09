import React, { useEffect, useState } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export interface IRroduct{
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface ProductTableProps{
    filterText: string;
    inStockOnly: boolean;
    products: Array<IRroduct>;
}

function ProductTable(props: ProductTableProps): React.ReactElement {
  const [rows, setRows] = useState([]);
  const {products, filterText, inStockOnly} = props;

  const getCategory = () => {
    let lastCategory: string = null;

    props.products.forEach((product) => {
      if(product.name.indexOf(filterText) ===- 1){
        return;
      }
      if(inStockOnly && !product.stocked){
        return;
      }
      if( product.category !== lastCategory){
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      rows.push(<ProductRow product={product} key={product.category}/>);
      lastCategory = product.category;
    })
  }
  useEffect(()=>{
    getCategory();
  },[])

  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
  )
}

export default ProductTable