import React from 'react'
import './index.css'

const Hello = ({content}) => {
    if (true) import('./print.js').then(mod => console.log(mod));
    return <div>{content ? content : 'Hello Webpack!'}</div>
}

export default Hello