import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
    render: function() {
        return (
           <div>
            <MyTitle title='props are cool' color='rebeccapurple'/>
            <MyTitle title='jsx is cool' color='tomato'/>
            <MyTitle title='much wow' color='papayawhip'/>
            <MyTitle title='another line' color='mediumaquamarine'/>
           </div>
        )
    }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))