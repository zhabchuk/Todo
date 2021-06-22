import { Switch, Route } from "react-router-dom"
import TaskConteiner from "../conteiners/TaskConteiner"

export const HomePage = () => {
    return <Switch>
        <Route path='/Task' component={TaskConteiner}/>
    </Switch>
}