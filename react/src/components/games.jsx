import { useState } from "react"
import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { deleteGame, getAllGames } from "../axios/gameaxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const Games = () => {
    const [games, setgames] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const f1 = async () => {
        if (games.length == 0) {
            let y = (await getAllGames()).data;
            setgames(y);
        }
    }
    const f2 = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            let y = (await deleteGame(id));
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
                }, 5);

            }
        }
    }
    useEffect(() => {
        f1()
    },
        [])

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
    return <div className="container mt-3">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>קוד משחק</th>
                    <th>ברקוד</th>
                    <th>משחק</th>
                    <th>קטגוריה</th>
                    <th>מחיר</th>
                    <th>תמונה</th>
                    <th>כמות במלאי</th>
                    <th>עדכן</th>
                    <th>מחק</th>
                </tr>
            </thead>
            <tbody>
                {games.map((x) =>
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.barcode}</td>
                        <td>{x.name}</td>
                        <td>{x.categoryName}</td>
                        <td>{x.price}</td>
                        <td><img src={`https://localhost:7006/${x.picture}`} alt={x.picture} height={'70px'} /></td>
                        <td>{x.quantityInStock}</td>
                        <td><Link to={`/gamelist/updategame/${x.id}`} className="btn btn-outline-light text-dark">📝</Link></td>
                        <td><button onClick={() => f2(x.id)} className="btn btn-outline-light text-dark">🗑️</button></td>
                    </tr>)}
            </tbody>
        </table>
        <Link to={'/gamelist/addgame'} className="btn btn-outline-secondary" >הוסף</Link>
        <Outlet></Outlet>
    </div>
}