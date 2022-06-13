
import { ADD_REMAINDER , REMOVE_REMAINDER, CLEAR_REMAINDERS} from "../types";
//ADD_REMAINDER

export const Add_remainder = (text, date) => {
    const action = {
        type: ADD_REMAINDER,
        text,
        date
    }
// console.log('add',action)
    return action
}
//REMOVE_REMAINDER
export const Remove_remainder = (id) => {
  const action = {
      type: REMOVE_REMAINDER,
      id
   
  }
// console.log('remove',action)
  return action
}
//CLEAR_REMAINDERS
export const Clear_remainders = () => {
  const action = {
      type: CLEAR_REMAINDERS
       }
// console.log('clear all',action)
  return action
}