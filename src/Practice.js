import React,{useState, useEffect,useReducer,Fragment} from 'react';
const initialState = 0;
const reducer = (state,action) =>{
  switch (action) {
    case 'increase':
      return state + 1
    case 'decrease':
      return state - 1
    case 'reset':
      return initialState
    default:
      return action

  }
}
const Practice = () =>{
const [count, setCount] = useReducer(reducer,initialState)

  return(
    <Fragment>
      <input type = 'submit'  value = 'Increase' onClick = {() => setCount('increase')}/>
      <input type = 'submit'  value = 'Decrease' onClick = {() => setCount('decrease')}/>
      <input type = 'submit'  value = 'Reset' onClick = {() => setCount('reset')}/>
      <h1>Count: {count}</h1>
    </Fragment>
  )
}

export default Practice;
