import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

 // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 if (import.meta.hot) {
    import.meta.hot.accept() 
}