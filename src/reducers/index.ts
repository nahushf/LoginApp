import {combineReducers} from 'redux';
import {combineForms} from 'react-redux-form';

export let appReducer = combineReducers({
    forms: combineForms({
        login: {
            email: '',
            password: ''
        }
    }, 'forms')
})