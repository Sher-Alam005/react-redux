
export const deposit = (amount) =>{
   return (dispatch) =>{
    dispatch({
        type: 'deposit',
        payload: amount
    })
   }
}

export const withDraw = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
       }
}