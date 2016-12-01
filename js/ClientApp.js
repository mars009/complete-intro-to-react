import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
            // BrowserRouter & Match are a higher order component (aka behaviour order component),
            // which encapsulate content and don't have their own display/view
            // ~ "exactly" prevents fuzzy matching and sets it so that the match on the pattern has to be exact
            <BrowserRouter>
                <div className='app'>
                    <Match exactly pattern='/' component={Landing} />
                    <Match pattern='/search' component={Search} />
                </div>
            </BrowserRouter>
        )
  }
})

render(<App />, document.getElementById('app'))
