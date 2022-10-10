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

log(plant)

// Let's update more complex data
