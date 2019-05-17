import React, {Component} from 'react';
import List from './List'
import data from './data'


class White_box extends Component{
    constructor(){
        super()
        this.state = {
            index:0
        }
    }

    render(){
        return(
            <main>
                <List index={this.state.index} />
                <button onClick={()=> {if(this.state.index >0){
                    this.setState({index: this.state.index -1})
                }}}>Prev</button>
                <button onClick={()=> {if(this.state.index <data.length-1){
                    this.setState({index: this.state.index +1})}
                }}>Next</button>
            </main>
        )
    }
}

export default White_box