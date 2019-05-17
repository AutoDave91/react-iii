import React, {Component} from 'react'
import data from './data'

// Still need: function to control i in reference to the calls below.
// Still need: styling to match image
// Still need: attachment to onClicks




class List extends Component{
    render(){
        let contact = data
        return(
            <main className='whiteBox'>
                <section>
                    <h3>{contact[this.props.index].id}/{contact.length}</h3>
                </section>
                <section className='Name'>
                    <h1>{contact[this.props.index].name.first} {contact[this.props.index].name.last}</h1>
                </section>
                <section className='From'>
                    <strong>From:</strong> {contact[this.props.index].city}, {contact[this.props.index].country}
                </section>
                <section className='Title'>
                    <strong>Job Title:</strong> {contact[this.props.index].title}
                </section>
                <section className='Employer'>
                    <strong>Employer:</strong> {contact[this.props.index].employer}
                </section>
                <section className='Movies'>
                <strong>Favorite Movies:</strong> <ol>
                    <li>{contact[this.props.index].favoriteMovies[0]}</li>
                    <li>{contact[this.props.index].favoriteMovies[1]}</li>
                    <li>{contact[this.props.index].favoriteMovies[2]}</li></ol>
                </section>
            </main>
        )
    }
}

export default List

// imported 'Employee Card' to 'Container'