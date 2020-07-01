import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCost, editCost } from '../store/actions/costActions'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

export class Cost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            edit_form: this.props.cost,
        }

        this.deleteCost = this.deleteCost.bind(this)
        this.editCost = this.editCost.bind(this)
        this.saveEdit = this.saveEdit.bind(this)

        this.editAmount = this.editAmount.bind(this)
        this.editReason = this.editReason.bind(this)
        this.editType = this.editType.bind(this)
    }
    render() {
        const { cost } = this.props
        return (
            <div>
                {this.state.editing ? (
                    <div>
                        Editing
                        <TextField
                            type="text"
                            value={this.state.edit_form.reason}
                            onChange={this.editReason}
                            id="outlined-basic"
                            label="Reason"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            type="number"
                            onChange={this.editAmount}
                            value={this.state.edit_form.amount}
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                        ></TextField>
                        <Select
                            onChange={this.editType}
                            value={this.state.edit_form.type}
                        >
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                        <Button variant="contained" onClick={this.saveEdit}>
                            Save
                        </Button>
                    </div>
                ) : (
                    <div>
                        <p>
                            {cost.reason} {cost.amount}e{' '}
                            <Button
                                variant="contained"
                                onClick={this.deleteCost}
                            >
                                Delete
                            </Button>
                            <Button variant="contained" onClick={this.editCost}>
                                Edit
                            </Button>
                        </p>
                    </div>
                )}
            </div>
        )
    }

    deleteCost(event) {
        this.props.delete(this.props.cost)
        event.preventDefault()
    }

    editCost(event) {
        this.setState({
            ...this.state,
            editing: true,
        })

        event.preventDefault()
    }

    saveEdit(event) {
        this.props.edit(this.state.edit_form)
        this.setState({
            ...this.state,
            editing: false,
        })
        event.preventDefault()
    }

    editReason(event) {
        this.setState({
            edit_form: {
                ...this.state.edit_form,
                reason: event.target.value,
            },
        })
        event.preventDefault()
    }

    editAmount(event) {
        this.setState({
            edit_form: {
                ...this.state.edit_form,
                amount: event.target.value,
            },
        })
        event.preventDefault()
    }

    editType(event) {
        this.setState({
            edit_form: {
                ...this.state.edit_form,
                type: event.target.value,
            },
        })
        event.preventDefault()
    }
}

const mapDispatchToProps = (dispatch) => ({
    delete: (cost) => dispatch(removeCost(cost)),
    edit: (cost) => dispatch(editCost(cost)),
})

export default connect(null, mapDispatchToProps)(Cost)
