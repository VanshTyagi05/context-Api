
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    
    <UserContextProvider>
    <Login/>// login component will be using the context provider to store the info into  the SetUser method(state)present int the UserContextProvider.jsx file
    <Profile/> //profile component will be getting this info  from the context provider user
    </UserContextProvider>
      
    
  )
}

export default App
