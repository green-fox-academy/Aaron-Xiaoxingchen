export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const REMOVE_TAGS = 'REMOVE_TAGS';

export function addTag(){
  return{
    type:ADD_TAG
  }
}

export function removeTag(){
  return{
    type: REMOVE_TAG
  }
}

export function removeTags(value){
  return{
    type: REMOVE_TAGS,
    tagValue : value
  }
}