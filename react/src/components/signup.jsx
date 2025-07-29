import { useState } from "react"
import { addCustomer } from "../axios/customeraxios"

export const SignUp = () => {
    const [user, setuser] = useState({
        "id": 0,
        "custName": "string",
        "pass": "string"
    })
    const [credit, setcredit] = useState({})
    const signUp = async () => {
        debugger
        if (user.custName && user.pass) {
            // let str1 = credit.number + " " + credit.cvv + " " + credit.date;
            setuser(() => ({ ...user, creditDetails: credit.number + " " + credit.cvv + " " + credit.date }))
            await addCustomer(user);
            alert("Success!");
            window.history.back();
        }
        else {
            alert("נא הכנס את כל הפרטים !");
        }
    }
    return <div>
        {/* {
        "id": 0,
        "custName": "string",
        "pass": "string",
        "creditDetails": "string"
    } */}
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
        <div className="input-group">
            <span className="input-group-text"></span>
            <input className="form-control" type="text" placeholder="name" onBlur={(e) => setuser({ ...user, custName: e.target.value })} />

        </div>
        <div className="input-group">
            <span className="input-group-text"></span>
            <input className="form-control" type={'password'} placeholder="password" onBlur={(e) => setuser({ ...user, pass: e.target.value })} />

        </div>
        <div className="input-group">
            <span className="input-group-text"></span>
                    <input className="form-control" type={'number'} placeholder="credit" onBlur={(e) => setcredit({ ...credit, number: e.target.value })} />

        </div>
        <div className="input-group">
            <span className="input-group-text"></span>
            <input className="form-control" type="number" placeholder="cvv" min="100" max="999" onBlur={(e) => setcredit({ ...credit, cvv: e.target.value })} />

        </div>
        <div className="input-group">
            <span className="input-group-text"></span>
            <input className="form-control" type="date" placeholder="date" onBlur={(e) => setcredit({ ...credit, date: e.target.value })} />

        </div>

        <input type="button" value="sign up" onClick={() => signUp()} />

    </div>
}