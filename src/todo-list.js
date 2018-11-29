'use strict';
// use strickt rodo klaidas, greiciau veikia

class TodoList extends React.Component {
    render() {
        return React.createElement(
            'ul',
            null,
            this.props.items.map(item => React.createElement(
                'li',
                { key: item.id },
                item.text
            ))
        );
    }
}