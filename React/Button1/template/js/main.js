'use strict'

let e = React.createElement;

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { liked: false };
    }

    render(){
        if (this.state.liked){
            return 'you liked this';
        }

        return e(
            'button',
            {onClick: () => this.setState({liked:true})},
            'like'
        );
    }
}
let button = document.querySelector('#button');

let root = ReactDOM.createRoot(button);

root.render(e(LikeButton));