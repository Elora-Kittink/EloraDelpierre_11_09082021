import React, {Component} from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Banner from '../../composants/Banner/Banner';
import Dropdown from '../../composants/Dropdown/Dropdown';
import about from "../../assets/about.jpg"


class About extends React.Component {
    render(){
        return <div>
            <Banner image= {about} />
            <Dropdown/>
        </div>
    }
}

export default About;