import "./Header.css"
import React from 'react'
import { Nav } from '../Nav/Nav'

export const Header = ({ under, disc, text, photo }) => {
    return (<div className="member" style={{ backgroundImage: `url(${photo})` }}>

        <Nav />
        <div className="info">
            {text}
            <span className="h"> {disc}
            </span>
            {under}
        </div>


    </div>

    )
} 
