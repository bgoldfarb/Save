import React from 'react'
import '../../styles/backdrop.scss'

const backrop = props => (
    <div className="backdrop" onClick= {props.click}></div>
)

export default backrop