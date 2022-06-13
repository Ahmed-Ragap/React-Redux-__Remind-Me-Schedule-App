import { bake_cookie, read_cookie} from 'sfcookies';
import { ADD_REMAINDER, REMOVE_REMAINDER, CLEAR_REMAINDERS } from "../types";
  const reminders = (state = [], action) => {

    let reminders = null;
   state = read_cookie('remainders')

if(action.type === ADD_REMAINDER){
    reminders = [...state, {text:action.text, date:action.date, id:Math.random()}];
    bake_cookie('remainders', reminders)
    return reminders
}
 else if (action.type === REMOVE_REMAINDER){
reminders = state.filter(reminder => reminder.id !== action.id)
// console.log('from reducer', reminders)
bake_cookie('remainders', reminders)
return reminders
} else if (action.type === CLEAR_REMAINDERS){
    reminders = []
    bake_cookie('remainders', reminders)
    // console.log('from reducer', reminders)
    return reminders
    }
else {
    return state  
}
} 
  export default reminders;