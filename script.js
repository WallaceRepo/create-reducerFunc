let log = console.log;
const reduce = (state, action) => {
    if(action === 'ADD') {
       return count+20
      }
    return state;
}

let count = 0; // it's a primitive state to change
count = reduce( count, 'ADD')
log(count)  // 20

const reducer = (state, action) => {
   if(action.type === 'ADD') {
       return {...state, price: state.price + 10 }
    }
    return state;
}

let plant = {
    name: "yellow flower",
    price: 12,
    pot: "cute green"
}

plant = reducer( plant, { type: 'ADD' })

log(plant)  // { name: 'yellow flower', price: 22, pot: 'cute green' }

// Let's update more complex data
let data = [ 
  { user: 'Brick', completed: false, task: 'Upload Video' },
  { user: 'Lilith', completed: true, task: 'Rob Bank' },
  { user: 'Hello', completed: false, task: 'Blue Moon' },
  { user: 'Mordecai', completed: true, task: 'Water plant' } ]
 

function reducers(state, action) {
    
switch (action.type) {
case "UPDATE":
        let rem = data.filter(d=> d.task !== action.payload.task)
        let arr = data.find(d => d.task === action.payload.task)
        return [{...arr, user: action.payload.user },...rem ]
case "ADD":
   return [...data, action.payload]
case "REMOVE":
   return  data.filter( d => d.user !== action.payload.user)
default: 
  return data;
       }
}
 // add object to an array of objects
const plantAction = { type: 'ADD', payload: { user: 'Hugo', completed: true, task: 'Remove trailers' } }
// remove given object from array
const plantAction1 = { type: 'REMOVE', payload: { user: 'Hugo', completed: true, task: 'Remove trailers' } }
// find object with task:'Upload Video', then change its user value to payload user value.
const plantAction2 = { type: 'UPDATE', payload: { user: 'Brain', task: 'Upload Video' }} 

let obj2 = reducers(data, plantAction)
let obj3 = reducers(data, plantAction1)
let obj4 = reducers(data, plantAction2)
/// Console.log
[ { user: 'Brick', completed: false, task: 'Upload Video' },
  { user: 'Lilith', completed: true, task: 'Rob Bank' },
  { user: 'Hello', completed: false, task: 'Blue Moon' },
  { user: 'Mordecai', completed: true, task: 'Water plant' },
  { user: 'Hugo', completed: true, task: 'Remove trailers' } ]
-------++++++++++++++++++++++++++
[ { user: 'Brick', completed: false, task: 'Upload Video' },
  { user: 'Lilith', completed: true, task: 'Rob Bank' },
  { user: 'Hello', completed: false, task: 'Blue Moon' },
  { user: 'Mordecai', completed: true, task: 'Water plant' } ]
-------++++++++++++++++++++++++++
[ { user: 'Brain', completed: false, task: 'Upload Video' },
  { user: 'Lilith', completed: true, task: 'Rob Bank' },
  { user: 'Hello', completed: false, task: 'Blue Moon' },
  { user: 'Mordecai', completed: true, task: 'Water plant' } ]
