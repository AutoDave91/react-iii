import React, {Component} from 'react';
import List from './List'
import data from './data'
import './white_box.css'


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
                <section className='List'>
                    <List index={this.state.index} />
                </section>
                <section className='Buttons'>
                    <button onClick={()=> {if(this.state.index >0){
                        this.setState({index: this.state.index -1})
                    }}}><strong><i className="prev"></i>Previous</strong></button>
                    <div>
                        <button className='BD' id='Edit'>Edit</button>
                        <button className='BD' id='Delete'>Delete</button>
                        <button className='BD'>New</button>
                    </div>
                    <button onClick={()=> {if(this.state.index <data.length-1){
                        this.setState({index: this.state.index +1})}
                    }}><strong>Next<i className="next"></i></strong></button>
                </section>
            </main>
        )
    }
}

export default White_box