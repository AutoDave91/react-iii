import React, {Component} from 'react'
import data from './data'

// Still need: function to control i in reference to the calls below.
// Still need: styling to match image
// Still need: attachment to onClicks




class List extends Component{
    constructor(){
        super()
        this.state ={
            i: 0
        }
    }

    render(){
        let contact = data
        return(
            <main className='whiteBox'>
                <section>
                    {contact[this.state.i].id}/{contact.length}
                </section>
                <section className='Name'>
                    {contact[this.state.i].name.first} {contact[this.state.i].name.last}
                </section>
                <section className='From'>
                    <strong>From:</strong> {contact[this.state.i].city}, {contact[this.state.i].country}
                </section>
                <section className='Title'>
                    <strong>Job Title:</strong> {contact[this.state.i].title}
                </section>
                <section className='Employer'>
                    <strong>Employer:</strong> {contact[this.state.i].employer}
                </section>
                <section className='Movies'>
                <strong>Favorite Movies:</strong> <ol>
                    <li>{contact[this.state.i].favoriteMovies[0]}</li>
                    <li>{contact[this.state.i].favoriteMovies[1]}</li>
                    <li>{contact[this.state.i].favoriteMovies[2]}</li></ol>
                </section>
            </main>
        )
    }
}

export default List