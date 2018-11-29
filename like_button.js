'use strict';
// use strict - vercia laikytis tvarkos, ismeta klaidas, pagreitina koda

const e = React.createElement;

// class - klase is JS
// extends - paveldinti klase irgi gauna komponento duomenis

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
        //state - busena
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            {onClick: () => this.setState({liked: true})},
            'Like'
        );
    }
}