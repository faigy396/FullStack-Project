import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { getAllGames } from "../axios/gameaxios"
import MyContex from "../context"

export const Home = () => {
    const f1 = async () => {
        if (list.length == 0) {
            let y = (await getAllGames()).data;
            setlist(y);
        }
    }
    const setCart = useContext(MyContex).setcart
    const cart = useContext(MyContex).cart
    // const [addThisCart, setaddThisCart] = useState({})
    const addToCart = (item) => {
        debugger

        let myCart = cart.find(c => c.gameId == item.id)
        ///אם המוצר לא קיםם עדין בסל קניות
        //תוסיף
        if (myCart == undefined) {
            let y = {}
            y.gameId = item.id
            y.gameName = item.name
            y.amount = 1
            y.price = item.price
            y.totalPrice = item.price
            
            setCart(v => v.concat(y))
        }
        else {
            myCart.amount = myCart.amount + 1;
            myCart.totalPrice = myCart.amount * myCart.price;
        }

        // setCart(() => cart.concat(addThisCart))
    }
    const [list, setlist] = useState([])
    useEffect(() => {
        f1()
    },
        [])



    return <div className="row" style={{ display: 'flex', gap: '20px', margin: '50px' }}>




        {list.map((x, i) => (
            <div key={i}>
                <div className="card" style={{ width: '300px', marginBottom: '20px', marginTop: '20px' }}>
                    <img className="card-img-top" width={'70%'} style={{ marginTop: '10px' }} src={`https://localhost:7006/${x.picture}`} alt="img" />
                    <div className="card-body">
                        <h4 className="card-title">{x.name}</h4>
                        <div>
                            <button className="btn btn-outline-primary" onClick={() => addToCart(x)}>add to cart</button>
                            <Link to={`more/${x.id}`} className="btn btn-outline-primary">more details</Link>
                        </div>
                    </div>
                </div>
                {/* <br /> */}
            </div>
        ))}
        <Outlet></Outlet>


    </div>
}