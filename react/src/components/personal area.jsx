import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { getAllCustomers } from "../axios/customeraxios"
import { getAllShopping } from "../axios/shoppingaxios"
import MyContex from "../context"
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const PersonalArea = () => {
    const [buyings, setbuyings] = useState([])
    const user1 = useContext(MyContex).currentUser
    const navigate = useNavigate();
    // const [user, setuser] = useState({})

    useEffect(() => {
        doSomething();
    }, [])

    const doSomething = async () => {
        if (buyings.length == 0) {
            if (user1.name == "You are not") {
                alert("אינך מחובר, הינך מועבר להתחברות.");
                navigate("/login");
            }
            else {
                debugger
                let arr1 = (await getAllCustomers()).data
                let user = {}
                let x = arr1.find(o => o.pass == user1.pass && o.custName == user1.name);
                user.pass = x.pass;
                user.custName = x.custName;
                user.creditDetails = x.creditDetails;
                user.id = x.id;
                let y = (await getAllShopping()).data;
                let arr = y.filter(c => c.custId == user.id);
                setbuyings(arr);
            }
        }
    }
    // setuser(arr1.find(o => o.pass == user1.pass && o.custName == user1.name));

    useEffect(() => {
        doSomething();
    }, [])

    return <div className="container mt-3">
        <table className="table table-bordered">
            <thead>
                <tr>

                    <th>id</th>
                    {/* <th>custId</th> */}
                    <th>sDate</th>
                    <th>paySum</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {buyings.map((x) => (
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.sDate}</td>
                        <td>{x.paySum}$</td>
                        <th><Link to={`../personl/buyDetails/${x.id}`} className="btn btn-outline-info">details</Link></th>
                    </tr>
                ))}
            </tbody>
        </table>
        <Outlet></Outlet>
    </div>
}