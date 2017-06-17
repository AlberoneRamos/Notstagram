import Inferno from 'inferno';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import {Router, Route, IndexRoute, browserHistory} from 'inferno-router';


import css from './styles/style.styl';


Inferno.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>, document.getElementById('root'));