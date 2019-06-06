import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Start from '../Start/Start'
import Races from '../Races/Races'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path = '/' component={Start}/>
            </Switch>
        </div>
    )
}
