import React from 'react'
import { connect } from 'react-redux'
import Cost from './Cost'

function CostList({ costs } = this.state) {
    console.log(costs)

    return (
        <div>
            {costs.map((cost) => (
                <Cost key={cost.id} cost={cost} />
            ))}
            <br></br>
            Total: {totalCostTally(costs)}e
        </div>
    )
}

function totalCostTally(listofcosts) {
    var result = 0
    for (var i = 0; i < listofcosts.length; i++) {
        result += listofcosts[i].amount
    }
    return result
}

const mapStateToProps = (state) => ({
    costs: state.costs,
})

export default connect(mapStateToProps)(CostList)