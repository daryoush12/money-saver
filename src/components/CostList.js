import React from 'react'
import { connect } from 'react-redux'
import Cost from './Cost'
import './component-styles.css'

function CostList({ costs } = this.state) {
    console.log(costs)

    return (
        <div className="costlist">
            {costs.length > 0 ? (
                <div>
                    {costs.map((cost) => (
                        <Cost key={cost.id} cost={cost} />
                    ))}
                    <br></br>
                    Monthly gain after expenses: {totalCostTally(costs)}e
                </div>
            ) : (
                <div>No Expenses</div>
            )}
        </div>
    )
}

function totalCostTally(listofcosts) {
    var result = 0
    for (var i = 0; i < listofcosts.length; i++) {
        if (listofcosts[i].type === 'Expense') {
            result -= listofcosts[i].amount
        } else result += listofcosts[i].amount
    }
    return result
}

const mapStateToProps = (state) => ({
    costs: state.costs,
})

export default connect(mapStateToProps)(CostList)
