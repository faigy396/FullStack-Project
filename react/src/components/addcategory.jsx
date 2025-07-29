import { useState } from "react"
import { addCategory } from "../axios/categoryaxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const AddCategory = () => {
    const [category, setcategory] = useState({})
    const navigate = useNavigate();
    const location = useLocation();
    const close = () => {
        window.history.back();
    }
    const add = async () => {
        if (window.confirm("Should I add?")) {
            let y = (await addCategory(category));
            if (y.data) {
                alert("הקטגוריה נוספה בהצלחה")
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
    return <div>
        <div>
            add
            <input type="text" placeholder="name" onBlur={(e) => setcategory({ ...category, name: e.target.value })} />
            <input type="button" value="save" onClick={() => add()} />
        </div>
        <button onClick={() => close()}>סגור</button>
    </div>
}