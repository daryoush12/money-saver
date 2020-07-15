import React from 'react'
import './App.css'
import CostList from './components/CostList'
import AddCost from './components/AddCost'
import ExpenseTally from './components/ExpenseTally'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    sidebar: {
        marginTop: 20,
        marginLeft: 50,
    },
})

function App() {
    const styles = useStyles()
    return (
        <div className="App">
            <div className="header-bar">
                <h1 className="header-title">Money Saver</h1>
            </div>
            <Grid container spacing={3}>
                <Grid item xs className={styles.sidebar}>
                    <ExpenseTally></ExpenseTally>
                </Grid>
                <Grid item xs={6}>
                    <CostList></CostList>
                    <AddCost></AddCost>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </div>
    )
}

export default App
