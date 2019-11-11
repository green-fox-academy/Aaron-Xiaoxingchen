export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const SET = 'SET';
export const RESET = 'RESET';

export function increaseCounter(){
  return {
    type: INCREASE
  }
}

export function decreaseCounter(){
  return{
    type: DECREASE
  }
}

export function resetCounter(){
  return{
    type: RESET
  }
}

export function setCounter(value = 0){
  return{
    type: SET,
    amount:value,
  }
}