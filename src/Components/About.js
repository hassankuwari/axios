import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const { id } = useParams()
    console.log("id",id);

    return (
        <div>
            person's clicked id is: {id}

        </div>
    )
}

export default About
