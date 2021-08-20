import React, {Component} from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import {housings} from "../housing-list"
import Thumbnail from '../composants/Thumbnail'

class Home extends React.Component {
    render(){
        return <div>
            <div>
                {housings.map(housing => (
                    <Thumbnail details = {housing} />
                ))}
                
            </div>
        </div>
    }
}

export default Home;