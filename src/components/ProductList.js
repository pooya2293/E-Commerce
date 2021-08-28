import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_products:products,grid_view} = useFilterContext();
  if(products.length == 0){
    return <h4 className={{ textTransform : 'none' }}>Sorry,no products matched you search...</h4>
  }
  if(grid_view === false){
    return <ListView products={products} />
  }
  return <GridView products={products}>products list</GridView>
}

export default ProductList
