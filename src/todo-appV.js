// - kebab case naudojamas ant js, _ snake case naudojamas html
// naudojamas normalus js langas

'use strict';

class TodoAppi extends React.Component {
    constructor(props) {
        super(props);
        var temp = window.data.slice();
        this.state = {items: temp, text: ''};                 //items pradzioj - tuscias masyvas, text laukas tuscias
        this.handleChange = this.handleChange.bind(this);     // eventai kaip onclick| .bind(this) reikalingi, kad nepamestu savo scope
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return React.createElement(
            "div",
            null, //divas neturi pradzioje jokios info
            React.createElement(  //createElment galima deti belekiek
                "h3",
                null,
                "TODO"
            ),
            React.createElement(TodoList, {
                items: this.state.items,
                deleteItem: this.handleDelete.bind(this)}),  //kuria to-do lista
            React.createElement (
            "form",
            {onSubmit: this.handleSubmit},  //onsubmit=onclick
            React.createElement(
                "label",
                {htmlFor: "new-todo"},
                "What needs to be done?"
            ),
            React.createElement(
                "input",
                {
                    id: "new-todo",
                    onChange: this.handleChange,
                    value: this.state.text
                }),
            React.createElement(
                "button",
                null,
                "Add #",
                this.state.items.length + 1
            )
        )
    );
}

handleChange(e)
{
    this.setState({text: e.target.value}); //nauja teksta isimena
}

handleSubmit(e)
{
    e.preventDefault();
    if (!this.state.text.length) {          //patikrina ar input ne tuscias
        return;
    }
    const newItem = {
        title: this.state.text,              //jeigu tekstas turi ilgi
        done: 0,
        user: "CocaCola"                      //unikalus elemento id, date.now duoda unikalu skaiciuka
    };
    this.setState(state => ({               //pakeicia busena
        items: state.items.concat(newItem), //a=a+"naujasitem" concat atiduoda pakeista masyva
        text: ''                            //nunulina input lauka
    }));
}

handleDelete(item) {
    var items = this.state.items;
    var index = items.indexOf(item);
    items.splice(index, 1);
    this.state.items = items;
    this.setState(state => ({
        items: state.items
    }));
}
}