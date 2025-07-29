import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { MyProvider } from './context'
import { Menue } from './components/menu';
import { MyRouting } from './components/myrouting';
import { useState } from 'react';
import { S } from './components/customers';
import { SignUp } from './components/signup';
function App() {
  const [currentUser, setcurrentUser] = useState({name:"You are not"})
  const [is_m, setis_m] = useState(false)
  const [cart, setcart]=useState([])
  const store = {
    currentUser: currentUser,
    setcurrentUser: setcurrentUser,
    is_m: is_m,
    setis_m: setis_m,
    cart:cart,
    setcart:setcart
  }
  return (
    <div >
      {/* <S></S> */}
      <MyProvider value={store}>
        <BrowserRouter>
          <Menue></Menue>
          <MyRouting></MyRouting>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
