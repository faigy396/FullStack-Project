import { useEffect } from "react"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { deleteCategory, getAllCategories } from "../axios/categoryaxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const Categories = () => {
    const [categories, setcategories] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const f1 = async () => {
        if (categories.length == 0) {
            let y = (await getAllCategories()).data;
            setcategories(y);
        }
    }
    const f2 = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            let y = (await deleteCategory(id));
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
    useEffect(() => { f1() }, [])
    // {
    //     "id": 0,
    //     "name": "string"
    // }

    return <div className="container mt-3">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((x) =>
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td><Link to={`/categorylist/updatecategory/${x.id}`} className="btn btn-outline-light text-dark">📝</Link></td>
                            <td><button onClick={() => f2(x.id)} className="btn btn-outline-light text-dark">🗑️</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link to={'/categorylist/addcategory'} className="btn btn-outline-secondary">הוסף</Link>
        <Outlet></Outlet>
    </div>
}