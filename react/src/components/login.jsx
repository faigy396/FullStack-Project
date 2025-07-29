import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { isExist } from "../axios/customeraxios"
import MyContex from "../context"


export const Login = () => {
    const [user, setuser] = useState({})
    const setCurrentUset = useContext(MyContex).setcurrentUser
    const setis_m = useContext(MyContex).setis_m
    const nevigate = useNavigate()
    const logIn = async () => {
        if (user.name && user.pass) {
            if (user.name == "manager" && user.pass == "1234") {
                alert("manager, you are connected!")
                setis_m(true)
                setCurrentUset(user)
                window.history.back();
            } else {
                setis_m(false)
                let y = await isExist(user.pass, user.name)
                if (y.data) {
                    setCurrentUset(user)
                    alert(`Welcome ${user.name}, you are connected! `)
                    window.history.back();
                } else {
                    alert("Connection failed, you have to sign up")
                    nevigate("../signup")
                }

            }
        } else {
            alert("נא הכנס שם וסיסמה!")
        }

    }

    {/* <form>
  <div class="input-group">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username">
  </div>

  <div class="input-group">
    <input type="text" class="form-control" placeholder="Your Email">
    <span class="input-group-text">@example.com</span>
  </div>
</form> */}


    return <div>
        <div className="input-group">
            <span className="input-group-text">שם</span>
            <input className="form-control" type="text" placeholder="name" onBlur={(e) => setuser({ ...user, name: e.target.value })} />
        </div>
        {/* <br /> */}
        <div className="input-group">
        <span className="input-group-text">סיסמה</span>
            <input className="form-control" type="password" placeholder="password" onBlur={(e) => setuser({ ...user, pass: e.target.value })} />
        {/* <br /> */}</div>
        <input type="button" value={'ok'} onClick={() => logIn()} />

    </div>
}