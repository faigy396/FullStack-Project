import { useEffect } from "react"
import { useState } from "react"
import { getAllCategories } from "../axios/categoryaxios"
import { addGame } from "../axios/gameaxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const AddGame = () => {
    const [game, setgame] = useState({
        id: 0,
        barcode: "string",
        categoryName: "string",
        picture: "pic.jpg"
    })
    const f1 = async () => {
        if (catList.length == 0) {
            let y = (await getAllCategories()).data;
            setcatList(y);
        }

    }
    const save = async () => {
        // setgame({...game, picture:"pic.jpg"});
        if (window.confirm("Sure?")) {
            let y = (await addGame(game));
            if (y.data) {
                alert("המשחק נוסף בהצלחה")
                //רענון
                // navigate(0); // זה ירענן את הדף הנוכחי
                const previousPath = location.pathname; // אחסון נתיב נוכחי
                navigate('/');// נווט לדף הבית
                //לאחר עיכוב שצוין, הוא מנווט בחזרה לנתיב השמור המקורי
                setTimeout(() => { // אופציונלי לרענן את הדף
                    // window.history.back(); // זה יחזיר את המשתמש לדף הקודם
                    navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(50)
                }, 50);

            }
        }
    }
    const close = () => {
        navigate("/gamelist")
    }
    const [catList, setcatList] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        f1()
    },
        [])
    // "id": 0,
    // "barcode": "string",
    // "name": "string",
    // "categoryId": 0,
    // "categoryName": "string",
    // "price": 0,
    // "picture": "string",
    // "quantityInStock": 0

    return <div>
        <div>
            AddGame
            <input type="text" placeholder="name" onBlur={(e) => setgame({ ...game, name: e.target.value })} />
            <select onChange={(e) => setgame({ ...game, categoryId: e.target.value })}>
                {catList.map((x, i) => <option key={i} value={x.id}>{x.name}</option>)}
            </select>
            <input type="number" placeholder="price" onBlur={(e) => setgame({ ...game, price: e.target.value })} />
            <input type="number" placeholder="quantityInStock" onBlur={(e) => setgame({ ...game, quantityInStock: e.target.value })} />
            <input type="button" value="save" onClick={() => save()} />
        </div>
        <button className="btn btn-outline-dark" onClick={() => close()}>סגור</button>
    </div>
}