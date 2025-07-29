import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAllCustomers } from "../axios/customeraxios";
import { getAllGames, updateGame } from "../axios/gameaxios";
import { addShopping } from "../axios/shoppingaxios";
import { addShoppingDetail } from "../axios/shoppingDetailsaxios";
import MyContex from "../context";

export const Pay = () => {
    const [user, setuser] = useState({});
    const [userId, setuserId] = useState()
    const contUser = useContext(MyContex).currentUser;
    const navigate = useNavigate();
    const contCart = useContext(MyContex).cart
    const setContCart = useContext(MyContex).setcart
    const [games, setgames] = useState({})
    // const [sum, setsum] = useState(0)

    const f1 = async () => {
        debugger
        // if (contUser.name == "You are not") {
        //     alert("You are not connected!");
        //     navigate("/login");
        // }
        // else {
        if (user.name == contUser.name && user.pass == contUser.pass) {
            alert(`${user.name}, הינך מועבר לתשלום.`);
            let sum1 = 0;
            for (let i = 0; i < contCart.length; i++) {
                debugger
                let game = games.find(f => f.id == contCart[i].gameId)
                if (game.quantityInStock < contCart[i].amount) {
                    alert("אין מלאי זמין בכמות שביקשת.")
                    let arr3 = contCart.filter(w => w.gameId != game.id)
                    setContCart(arr3)
                }
                else {
                    sum1 += contCart[i].totalPrice;
                }
            }
            if (sum1 > 0) {
                // setsum(sum1)
                if (window.confirm(`סכום לתשלום: ${sum1}`)) {
                    let c = {}
                    c.custId = userId;
                    c.paySum = sum1
                    let buyId = (await addShopping(c)).data
                    alert(`קוד קניה: ${buyId}`);
                    addShoppingDetail(buyId, contCart);
                    for (let i = 0; i < contCart.length; i++) {
                        let game = games.find(f => f.id == contCart[i].gameId)
                        let amount = game.quantityInStock - contCart[i].amount;
                        game.quantityInStock = amount;
                        await updateGame(game.id, game)
                    }
                    setContCart([])
                    alert("הקניה בוצעה בהצלחה!");
                }
            }
        }
        else {
            alert("הכנסת נתונים בלתי תקינים, אנא נסה שנית.");
            // }
        }
    }

    const doSomething = async () => {
        debugger
        let arr1 = (await getAllCustomers()).data
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].custName === contUser.name && arr1[i].pass === contUser.pass) {
                setuserId(arr1[i].id);
                break;
            }
        }
        let arr2 = (await getAllGames()).data
        if (arr2) {
            setgames(arr2)
        }
    }

    useEffect(() => {
        doSomething();
    }, [])

    return <div>
        <input type="text" placeholder="name" onBlur={(e) => setuser({ ...user, name: e.target.value })} />
        <input type="password" placeholder="password" onBlur={(e) => setuser({ ...user, pass: e.target.value })} />
        <input type="button" value="שלח" onClick={() => f1()} />
    </div>
}