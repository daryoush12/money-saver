import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCost, editCost } from '../store/actions/costActions'

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
                        <input
                            type="text"
                            value={this.state.edit_form.reason}
                            onChange={this.editReason}
                        ></input>
                        <input
                            type="number"
                            onChange={this.editAmount}
                            value={this.state.edit_form.amount}
                        ></input>
                        <select
                            onChange={this.editType}
                            value={this.state.edit_form.type}
                        >
                            <option>Select</option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                        <button onClick={this.saveEdit}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p>
                            {cost.reason} {cost.amount}e{' '}
                            <button onClick={this.deleteCost}>Delete</button>
                            <button onClick={this.editCost}>Edit</button>
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
