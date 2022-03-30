import React from 'react'
import AddNotes from './AddNotes'
import GetNote from './GetNote'
import './Note.css'

function Notes() {
    return (
        <div className='mainContent'>
            <AddNotes />
            <GetNote />
        </div>


    )
}

export default Notes