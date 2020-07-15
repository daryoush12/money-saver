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
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    custominput: {
        marginRight: 10,
    },
})

class AddCost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                id: uuidv4,
                reason: '',
                amount: '',
                type: '',
            },
        }

        this.setInput = this.setInput.bind(this)
        this.submitCost = this.submitCost.bind(this)
    }

    render() {
        return (
            <Paper className="cost-add-paper">
                <p>Add new expense / income source</p>
                <TextField
                    className="cost-add-input"
                    id="outlined-basic"
                    label="Reason"
                    variant="outlined"
                    type="text"
                    name="reason"
                    onChange={this.setInput}
                    value={this.state.form.reason}
                />
                <TextField
                    className="cost-add-input"
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    type="number"
                    name="amount"
                    onChange={this.setInput}
                    value={this.state.form.amount}
                />
                <FormControl className="cost-add-input" variant="outlined">
                    <InputLabel id="cost-select-type">
                        {this.state.form.type !== '' ? (
                            <span>{this.state.form.type}</span>
                        ) : (
                            <span>Select</span>
                        )}
                    </InputLabel>
                    <Select
                        className="select-type cost-add-input"
                        onChange={this.setInput}
                        labelId="cost-select-type"
                        name="type"
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={this.submitCost}>
                    Add
                </Button>
            </Paper>
        )
    }

    submitCost(event) {
        this.props.newcost(this.state.form)
        this.setState({
            form: {
                id: uuidv4(),
                reason: '',
                amount: '',
                type: '',
            },
        })
        event.preventDefault()
    }

    setInput(event) {
        var value =
            event.target.name === 'amount'
                ? parseInt(event.target.value)
                : event.target.value

        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: value,
            },
        })
    }
}

const mapDispatchToProps = (dispatch) => ({
    newcost: (cost) => dispatch(addCost(cost)),
})

export default connect(null, mapDispatchToProps)(AddCost)
