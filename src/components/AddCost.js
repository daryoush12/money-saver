import React, { Component } from 'react'
import { addCost } from '../store/actions/costActions'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

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
                <input
                    type="text"
                    name="reason"
                    onChange={this.setReason}
                ></input>
                <input
                    type="number"
                    name="amount"
                    onChange={this.setAmount}
                ></input>
                <select onChange={this.setType}>
                    <option>Select</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <button onClick={this.submitCost}>Add Cost</button>
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
