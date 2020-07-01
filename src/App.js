import React from 'react'
import './App.css'
import CostList from './components/CostList'
import AddCost from './components/AddCost'

function App() {
    return (
        <div className="App">
            <div className="header-bar">
                <h1 className="header-title">Money Saver</h1>
            </div>
            <CostList></CostList>
            <br></br>
            <AddCost></AddCost>
        </div>
    )
}

export default App
