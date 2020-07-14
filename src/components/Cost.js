import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCost, editCost } from '../store/actions/costActions'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export class Cost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            edit_form: this.props.cost,
        }

        this.deleteCost = this.deleteCost.bind(this)
        this.editDone = this.editDone.bind(this)
        this.setInput = this.setInput.bind(this)
        this.startEdit = this.startEdit.bind(this)
    }
    render() {
        const { cost } = this.props
        if (this.state.editing) {
            return (
                <TableRow>
                    <TableCell align="left">
                        <TextField
                            type="text"
                            name="reason"
                            value={this.state.edit_form.reason}
                            onChange={this.setInput}
                            id="outlined-basic"
                            label="Reason"
                            variant="outlined"
                        ></TextField>
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            type="number"
                            name="amount"
                            onChange={this.setInput}
                            value={this.state.edit_form.amount}
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                        ></TextField>
                    </TableCell>
                    <TableCell align="left">
                        <Select
                            onChange={this.setInput}
                            value={this.state.edit_form.type}
                            name="type"
                        >
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                    </TableCell>
                    <TableCell align="left">
                        <Button variant="contained" onClick={this.editDone}>
                            Save
                        </Button>
                    </TableCell>
                </TableRow>
            )
        } else
            return (
                <TableRow>
                    <TableCell align="left">{cost.reason}</TableCell>
                    <TableCell align="left">{cost.amount}e</TableCell>
                    <TableCell align="left">{cost.type}</TableCell>
                    <TableCell align="left">
                        <Button variant="contained" onClick={this.startEdit}>
                            Edit
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button variant="contained" onClick={this.deleteCost}>
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
            )
    }

    deleteCost(event) {
        this.props.delete(this.props.cost)
        event.preventDefault()
    }

    startEdit() {
        this.setState({
            ...this.state,
            editing: true,
        })
    }

    editDone(event) {
        this.props.edit(this.state.edit_form)
        this.setState({
            ...this.state,
            editing: false,
        })
        event.preventDefault()
    }

    setInput(event) {
        var value =
            event.target.name === 'amount'
                ? parseInt(event.target.value)
                : event.target.value

        this.setState({
            edit_form: {
                ...this.state.edit_form,
                [event.target.name]: value,
            },
        })
    }
}

const mapDispatchToProps = (dispatch) => ({
    delete: (cost) => dispatch(removeCost(cost)),
    edit: (cost) => dispatch(editCost(cost)),
})

export default connect(null, mapDispatchToProps)(Cost)
