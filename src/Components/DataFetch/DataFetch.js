import React, { Component } from 'react'


// const MyContext = React.createContext();

// class MyProvider extends Component {
//     state = {
//         races: []
//     }
//     render(){
//         return (
//             <MyContext.Provider value='Value'>
//                 {this.props.races}
//             </MyContext.Provider>
//         )
//     }
// }

export default class DataFetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             races: [],
             error: null
        }
    }

    componentDidMount() {
        this.fetchRaces();
    }

    async fetchRaces(){
        try{
            const res = await fetch(`http://www.dnd5eapi.co/api/races/`);
            const json = await res.json;
            this.setState({races: json});
        }
        catch(err){
            this.setState({error: err})
        }
    }
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

