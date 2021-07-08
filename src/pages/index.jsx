import { Switch, Route } from 'react-router-dom';
import CategoryConteiner from '../conteiners/CategoryConteiner';
import TaskConteiner from '../conteiners/TaskConteiner';

import './style.scss'

export const HomePage = () => {
    return <Switch>
            <div className='home'>
                <div className='home__left'><Route path="" component={TaskConteiner}/></div>
                <div className='home__right'><Route path="" component={CategoryConteiner}/></div>
            </div>
        </Switch>

};