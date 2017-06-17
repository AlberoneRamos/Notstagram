import Inferno from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div>
                <h1>
                    <Link to="/">Notstagram</Link>
                </h1>
                {React.cloneElement(this.props.children,this.props)}
            </div>
        );
    }
}