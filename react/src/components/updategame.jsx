import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getAllCategories } from "../axios/categoryaxios"
import { getGameById, updateGame } from "../axios/gameaxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const UpdateGame = () => {
    const [listC, setlistC] = useState([])
    const [game, setgame] = useState({
        "id": 0,
        "barcode": "string",
        "categoryName": "string",
        "picture": "string"
    })
    const close = () => {
        navigate("/gamelist")
    }
    const f1 = async () => {
        if (listC.length == 0) {
            let y = (await getAllCategories()).data;
            setlistC(y);
        }
        // if (game == null) {
        let x = await (await getGameById(params.id)).data
        // game.name=x.name
        // game.price=x.price
        // game.quantityInStock=x.quantityInStock
        // game.categoryId=x.categoryId
        setgame({ ...game, name: x.name })
        setgame({ ...game, price: x.price })
        setgame({ ...game, quantityInStock: x.quantityInStock })
        setgame({ ...game, categoryId: x.categoryId })
        // }
    }
    const save = async () => {


        if (window.confirm("Sure?")) {
            let d = await (await getGameById(params.id)).data
            game.picture = d.picture;
            let y = (await updateGame(params.id, game));
            if (y.data) {
                alert("המשחק עודכן בהצלחה");
                //רענון
                // navigate(0); // זה ירענן את הדף הנוכחי
                const previousPath = location.pathname; // אחסון נתיב נוכחי
                navigate('/');// נווט לדף הבית
                //לאחר עיכוב שצוין, הוא מנווט בחזרה לנתיב השמור המקורי
                setTimeout(() => { // אופציונלי לרענן את הדף
                    // window.history.back(); // זה יחזיר את המשתמש לדף הקודם
                    navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(50)
                }, 5);

            }
        }

    }
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => { f1() }, [])
    const params = useParams()
    return <div>
        <div>
            UpdateGame: {params.id}
            {/* {
        "id": 0,
        "barcode": "string",
        "name": "string",
        "categoryId": 0,
        "categoryName": "string",
        "price": 0,
        "picture": "string",
        "quantityInStock": 0
        } */}
            <input type="text" defaultValue={game.name} onBlur={(e) => setgame({ ...game, name: e.target.value })} />
            <select defaultValue={game.categoryId} onSelect={(e) => setgame({ ...game, categoryId: e.target.value })}>
                {listC.map((x, i) => <option key={i} value={x.id}>{x.name}</option>)}
            </select>
            <input defaultValue={game.price} type="number" placeholder="price" onBlur={(e) => setgame({ ...game, price: e.target.value })} />
            <input defaultValue={game.quantityInStock} type="number" placeholder="quantityInStock" onBlur={(e) => setgame({ ...game, quantityInStock: e.target.value })} />
            <input type="button" value="save" onClick={() => save()} />
        </div>
        <button onClick={() => close()} className="btn btn-outline-dark">סגור</button>
    </div>
}