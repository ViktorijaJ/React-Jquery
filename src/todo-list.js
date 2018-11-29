'use strict';

// use strickt rodo klaidas, greiciau veikia
//= forEach, .map atiduoda elementa

class TodoList extends React.Component {
    render() {
        return React.createElement(
            'ul',
            null,
            this.props.items.map(item => React.createElement(
                'li',
                {key: item.id},
                item.title,
                React.createElement ('b', null, item.user),
                React.createElement('button', {

                    onClick: () => {
                        this.props.deleteItem(item)
                    }
                }, 'trinti')
            ))
        );
    }
}