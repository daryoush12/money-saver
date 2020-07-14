import React from 'react'
import { connect } from 'react-redux'
import Cost from './Cost'
import './component-styles.css'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import { TableRow, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        marginTop: 20,
    },

    emptyBody: {
        textAlign: 'center',
        width: 1000,
    },
})

function CostList({ costs } = this.state) {
    console.log(costs)
    const classes = useStyles()
    return (
        <TableContainer className={classes.root} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Reason</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Select</TableCell>
                    </TableRow>
                </TableHead>
                {costs.length > 0 ? (
                    <TableBody>
                        {costs.map((cost) => (
                            <Cost key={cost.id} cost={cost} />
                        ))}
                    </TableBody>
                ) : (
                    <caption className="emptybody">No Expenses</caption>
                )}
            </Table>
        </TableContainer>
    )
}

//Monthly gain after expenses: {totalCostTally(costs)}e

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
