import React, { Component } from 'react'
import { addCost } from '../store/actions/costActions'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import './component-styles.css'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

class AddCost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                id: uuidv4,
                reason: null,
                amount: null,
                type: null,
            },
        }

        this.submitCost = this.submitCost.bind(this)
        this.setAmount = this.setAmount.bind(this)
        this.setReason = this.setReason.bind(this)
        this.setType = this.setType.bind(this)
    }

    render() {
        return (
            <div>
                <TextField
                    id="outlined-basic"
                    label="Reason"
                    variant="outlined"
                    type="text"
                    onChange={this.setReason}
                />
                <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    type="number"
                    name="amount"
                    onChange={this.setAmount}
                />
                <FormControl>
                    <InputLabel id="cost-select-type">Select</InputLabel>
                    <Select
                        className="select-type"
                        onChange={this.setType}
                        labelId="cost-select-type"
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={this.submitCost}>
                    Add Cost
                </Button>
            </div>
        )
    }

    submitCost(event) {
        this.props.newcost(this.state.form)
        this.setState({
            form: {
                id: uuidv4(),
                reason: null,
                amount: null,
                type: null,
            },
        })
        event.preventDefault()
    }

    setReason(event) {
        this.setState({
            form: {
                ...this.state.form,
                reason: event.target.value,
            },
        })
        event.preventDefault()
    }

    setAmount(event) {
        this.setState({
            form: {
                ...this.state.form,
                amount: parseInt(event.target.value),
            },
        })
        event.preventDefault()
    }

    setType(event) {
        var changedValue = this.state.form.amount
        switch (event.target.value) {
            case 'Income': {
                changedValue = Math.abs(changedValue)
                break
            }
            case 'Expense': {
                changedValue = changedValue * -1
                break
            }
            default:
                break
        }

        this.setState({
            form: {
                ...this.state.form,
                amount: changedValue,
                type: event.target.value,
            },
        })
        event.preventDefault()
    }
}

const mapDispatchToProps = (dispatch) => ({
    newcost: (cost) => dispatch(addCost(cost)),
})

export default connect(null, mapDispatchToProps)(AddCost)
