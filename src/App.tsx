import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import TeamTasksPage from './pages/TeamTasksPage';
import CalenderPage from './pages/CalenderPage';
import AppLayout from './layouts/AppLayout';


function App() {
 

  return (
     <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/tasks" element={<TasksPage/>} />
            <Route path="/teamTasks" element={<TeamTasksPage/>} />
            <Route path="/calender" element={<CalenderPage/>} />
          </Route>
        </Routes>
     </BrowserRouter>
  )
}

export default App
