import React, {Component} from 'react'
import data from './data'
import { breakStatement } from '@babel/types';

class List extends Component{
    constructor(){
        super()
        this.state ={
            
        }
    }

    render(){
        let contact = data
        return(
            <main className='whiteBox'>
                <section className='Name'>
                    {contact[0].name.first} {contact[0].name.last}
                </section>
                <section className='From'>
                    From: {contact[0].city}, {contact[0].country}<br></br>
                    Job Title: {contact[0].title}<br></br>
                    Employer: {contact[0].employer}<br></br>
                </section>
                <section className='Movies'>
                Favorite Movies: <ol>
                    <li>{contact[0].favoriteMovies[0]}</li>
                    <li>{contact[0].favoriteMovies[1]}</li>
                    <li>{contact[0].favoriteMovies[2]}</li></ol>
                </section>
            </main>
        )
    }
}

export default List