import React from 'react'
import logo from './logo.svg'
import './App.css'
import CostList from './components/CostList'
import AddCost from './components/AddCost'

function App() {
    return (
        <div className="App">
            <CostList></CostList>
            <AddCost></AddCost>
        </div>
    )
}

export default App
