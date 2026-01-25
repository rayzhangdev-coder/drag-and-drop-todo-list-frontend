import { Routes, Route, Navigate } from "react-router-dom";
import TodoDashboard from './pages/TodoDashboard';


function App(){
  return (
    <Routes>
      <Route path='/dashboard' element = {
          <TodoDashboard/>
      }/>
      {/*path="*" catches any route that doesn’t match /login or /dashboard.*/}
      <Route path='*' element = {<Navigate to='/dashboard' replace/>}/>
      {/*replace ensures the redirect doesn’t add to browser history, so users can’t hit “back” to see the invalid route.*/}
    </Routes>
  );
}

export default App;