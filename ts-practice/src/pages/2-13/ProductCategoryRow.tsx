import React from 'react'

export interface ProductCategoryRowProps{
  category: string;
  key: string;
}

function ProductCategoryRow(props: ProductCategoryRowProps): React.ReactElement {
  return (
    <tr>
        <th>
          {props.category}
        </th>
      </tr>
  )
}

export default ProductCategoryRow