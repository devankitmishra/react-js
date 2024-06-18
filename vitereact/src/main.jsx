import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
    <a href="https://google.com" target='_bank'>Visit google</a>
)

const anotherUser = " By AK"

const reactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: '_bank'},
    'Click me to visit google',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).
render(
    // anotherElement
    reactElement
    // <App/>
)
