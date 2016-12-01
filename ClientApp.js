var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
    render: function() {
        return (
            div(null,
                h1({
                    style: { color: this.props.color }
                }, this.props.title)
            )
        );
    }
});

MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
    render: function() {
        return (
            div(null,
                React.createElement({ 'title': 'props rock!', color: 'peru' }),
                React.createElement({ 'title': 'something rocks!', color: 'mediumaquamarine' }),
                React.createElement({ 'title': 'react rocks!', color: 'rebeccapurple' }),
                React.createElement({ 'title': 'yolo!', color: 'dodgerblue' })
            )
        )
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));