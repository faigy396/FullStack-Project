import { useContext } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import MyContex from "../context"

export const ShoppingCart = () => {
    const cart = useContext(MyContex).cart
    const setCart = useContext(MyContex).setcart
    const navigate = useNavigate();
    const location = useLocation();

    const user = useContext(MyContex).currentUser
    const add = (item) => {
        let y = cart.find(i => i.gameId == item.gameId);
        y.amount += 1;
        y.totalPrice = y.amount * y.price;
        // alert("plus!")
        const previousPath = location.pathname;
        navigate('/');
        setTimeout(() => {
            navigate(previousPath)
        }, 5);
    }
    const sub = (item) => {
        let y = cart.find(i => i.gameId == item.gameId);
        if (y.amount > 0) {
            y.amount -= 1;
            y.totalPrice = y.amount * y.price;
            // alert("minus!")
            if (y.amount == 0) {
                rem(item);
            }
            else {
                const previousPath = location.pathname;
                navigate('/');
                setTimeout(() => {
                    navigate(previousPath)
                }, 5);
            }

        }

    }
    const rem = (item) => {
        let arr = cart.filter(u => u.gameId != item.gameId);
        setCart(arr);
        // let y = myCart.find(e => e.gameId == item.gameId)
        // y.amount = 0;
        // y.totalPrice = y.amount * y.price;
        // alert("remove!")
        const previousPath = location.pathname;
        navigate('/');
        setTimeout(() => {
            navigate(previousPath)
        }, 5);
    }
    const end = () => {
        if (user.name == "You are not") {
            alert("אינך מחובר עדיין, הינך מועבר להתחברות");
            navigate('/login');
        }
        else {
            navigate(`/pay`);
        }
    }
    return <div className="container mt-3">
        <table className="table table-bordered">

            <thead>
                <tr>
                    <th>gameId</th>
                    <th>gameName</th>
                    <th>price</th>
                    <th>amount</th>
                    <th>totalPrice</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((x, i) =>
                    <tr key={i}>
                        <td>{x.gameId}</td>
                        <td>{x.gameName}</td>
                        <td>{x.price} ₪</td>
                        <td><button className="btn btn-outline-light text-dark" onClick={() => add(x)}><img src="img/תמונה1.png" alt="plus" width={'15px'} /></button> {x.amount} <button className="btn btn-outline-light text-dark" onClick={() => sub(x)}><img src="img/minus.png" alt="minus" width={'15px'} /></button></td>
                        <td>{x.totalPrice} ₪</td>
                        <td><button className="btn btn-outline-light text-dark" onClick={() => rem(x)}><img src="img/trash.png" alt="remove" width={'15px'} /></button></td>
                    </tr>)}
            </tbody>
        </table>
        <button onClick={() => end()}>סיום קניה</button>
    </div>
}