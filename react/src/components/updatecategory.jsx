import { useState } from "react"
import { useParams } from 'react-router-dom'
import { getById, updateCategory } from "../axios/categoryaxios"
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const UpdateCategory = () => {
    const [category, setcategory] = useState({})
    const f1 = async () => {
        let o = (await getById(params.id)).data;
        setcategory({ ...category, name: o.name })
    }
    const save = async () => {
        if (window.confirm("Sure?")) {
            let y = (await updateCategory(params.id, category));
            if (y.data) {
                alert(" עודכן ! ");
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
    const close = () => {
        window.history.back();
    }
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams()
    useEffect(() => {
        f1();
    },
        [])
    return <div>
        <div>
            update category: {params.id}
            <input type="text" defaultValue={category.name} onBlur={(e) => setcategory({ ...category, name: e.target.value })} />
            <input type="button" value="save" onClick={() => save()} />
        </div>
        <input type="button" value="סגור" className="btn btn-outline-dark" onClick={() => close()} />
    </div>
}