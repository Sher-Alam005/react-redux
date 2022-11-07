import React from "react";
import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state'
import {useSelector} from 'react-redux'

const Shop = () =>{
    const dispatch = useDispatch();
    const {withDraw, deposit} = bindActionCreators(actionCreators, dispatch)

    const amount = useSelector(state => state.amount);
    return(
        <>
        <button onClick={() => (deposit(100))}>+</button>
        <span>10000</span>
        <button onClick={() =>(withDraw(50))}>-</button>
        <button disabled={true}>your blance is{amount}</button>
        </>
    )
}

export default Shop;