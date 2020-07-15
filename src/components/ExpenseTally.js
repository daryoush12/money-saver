import React from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import 'fontsource-roboto'
import TypoGraphy from '@material-ui/core/Typography'
import { connect } from 'react-redux'

function ExpenseTally({ costs } = this.props) {
    const tallyResult = totalCostTally(costs)
    return (
        <Paper className="tally-paper">
            <TypoGraphy variant="h5">Total Expense Tally</TypoGraphy>
            <Divider></Divider>
            <p>{tallyResult} euros</p>
        </Paper>
    )
}

function totalCostTally(listofcosts = 0) {
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

export default connect(mapStateToProps)(ExpenseTally)
