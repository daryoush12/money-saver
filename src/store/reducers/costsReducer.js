import { ADD_COST, REMOVE_COST, EDIT_COST } from '../actions/costActions'

const initialState = [
    {
        id: '123asd',
        reason: 'clothes',
        amount: 25,
        type: 'Income',
    },
    {
        id: '123asdgy',
        reason: 'bags',
        amount: 20,
        type: 'Expense',
    },
]

function costs(state = [], action) {
    console.log(action)
    switch (action.type) {
        case ADD_COST: {
            return [...state, action.cost]
        }
        case REMOVE_COST: {
            var removable = state.indexOf(action)
            return [...state.filter((cost) => cost !== action.cost)]
        }
        case EDIT_COST: {
            return state.map((cost) => {
                if (cost.id !== action.cost.id) {
                    return cost
                } else {
                    return {
                        ...cost,
                        ...action.cost,
                    }
                }
            })
        }

        default:
            return initialState
    }
}

export default costs
