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
                <section>
                    {contact[0].id}/{contact.length}
                </section>
                <section className='Name'>
                    {contact[0].name.first} {contact[0].name.last}
                </section>
                <section className='From'>
                    <strong>From:</strong> {contact[0].city}, {contact[0].country}
                </section>
                <section className='Title'>
                    <strong>Job Title:</strong> {contact[0].title}
                </section>
                <section className='Employer'>
                    <strong>Employer:</strong> {contact[0].employer}
                </section>
                <section className='Movies'>
                <strong>Favorite Movies:</strong> <ol>
                    <li>{contact[0].favoriteMovies[0]}</li>
                    <li>{contact[0].favoriteMovies[1]}</li>
                    <li>{contact[0].favoriteMovies[2]}</li></ol>
                </section>
            </main>
        )
    }
}

export default List