
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { TodoProvider } from './Context/ToDoProvider.jsx'
import Edit from './Edit.jsx'

createRoot(document.getElementById('root')).render(
 <TodoProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/Edit' element={<Edit/>}></Route>
  </Routes>
   </BrowserRouter>
   </TodoProvider>
  
)
