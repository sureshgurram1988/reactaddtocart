import {legacy_createStore} from 'redux'
import reducer from './redux/reducers';


const store = legacy_createStore(reducer);


export default store



