export const ADD_COST = 'ADD_COST'
export const REMOVE_COST = 'REMOVE_COST'
export const EDIT_COST = 'EDIT_COST'

export function addCost(cost) {
    return { type: ADD_COST, cost }
}

export function removeCost(cost) {
    return { type: REMOVE_COST, cost }
}

export function editCost(cost) {
    return { type: EDIT_COST, cost }
}
