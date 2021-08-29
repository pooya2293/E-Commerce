import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useFilterContext } from '../context/filter_context'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS){
    let maxPrice = action.payload.map((p)=>p.price)//seperate all of price in array
    maxPrice = Math.max(...maxPrice)//seperate max of price to all of price

    return {
      ...state,
      filtered_products: [...action.payload],
      all_products:[...action.payload],
      filters:{...state.filters,max_price:maxPrice,price:maxPrice}
    }
  }

  if(action.type === SET_LISTVIEW){
    return {...state,grid_view:false }
  }
  if(action.type === SET_GRIDVIEW){
    return {...state,grid_view:true }
  }

  if(action.type === UPDATE_SORT){
    return { ...state,sort:action.payload }
  }

  if(action.type === SORT_PRODUCTS){
    const {filtered_products,sort} = state;
    let tempProducts = filtered_products;

    if(sort === 'price-lowest'){
      tempProducts = tempProducts.sort((a,b)=>{
        if(a.price < b.price){
          return -1
        }
        if(a.price > b.price){
          return 1
        }
        return 0
      })
    }
    if(sort === 'price-highest'){
      tempProducts = tempProducts.sort((a,b)=>b.price - a.price)
    }
    if(sort === 'name-a'){
      tempProducts = tempProducts.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
    }
    if(sort === 'name-z'){
      tempProducts = tempProducts.sort((a,b)=>{
        return b.name.localeCompare(a.name)
      })
    }
    return {...state,filtered_products:tempProducts}
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
