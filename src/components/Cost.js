import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCost } from '../store/actions/costActions'

export class Cost extends Component {
    constructor(props) {
        super(props)
        this.deleteCost = this.deleteCost.bind(this)
    }
    render() {
        const { cost } = this.props
        return (
            <div>
                <p>
                    {cost.reason} {cost.amount}e{' '}
                    <button onClick={this.deleteCost}>Delete</button>
                </p>
            </div>
        )
    }

    deleteCost(event) {
        this.props.delete(this.props.cost)
        event.preventDefault()
    }
}

const mapDispatchToProps = (dispatch) => ({
    delete: (cost) => dispatch(removeCost(cost)),
})

export default connect(null, mapDispatchToProps)(Cost)
