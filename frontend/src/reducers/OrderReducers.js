import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_DETAILS_CLEAR
}from '../constants/orderConstants'

export const orderCreateReducer = (state={}, action) =>{
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {loading: true}

    case ORDER_CREATE_SUCCESS:
      return {loading: false, success:true, order: action.payload}
  
    case ORDER_CREATE_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const orderDetailsReducer = (state={}, action) =>{
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {...state, loading:true} //...state to avoid running into trouble
  
    case ORDER_DETAILS_SUCCESS:
      return {...state, loading:false, order: action.payload}

    case ORDER_DETAILS_FAIL:
      return {loading: false, error: action.payload}

    case ORDER_DETAILS_CLEAR:
      return {}

    default:
      return state
  }
}

export const orderPaymentReducer =(state={}, action)=>{
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {...state, loading:true}

    case ORDER_PAY_SUCCESS:
      return {...state, loading:false, success:true}
  
    case ORDER_PAY_FAIL:
      return {...state, loading: false, error: action.payload}
    case ORDER_PAY_RESET:
      return {}

    default:
      return state
  }
}

export const orderMyListReducer =(state={}, action)=>{
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {...state, loading:true}

    case ORDER_LIST_MY_SUCCESS:
      return {...state, loading:false, listOrders: action.payload}
  
    case ORDER_LIST_MY_FAIL:
      return {loading: false, error: action.payload}

    case ORDER_LIST_MY_RESET:
      return {}

    default:
      return state
  }
}