import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getGameById } from "../axios/gameaxios";


export const ShowGameDetails = () => {
    const params = useParams();
    const [gameDetails, setgameDetails] = useState(null);
    const navigate = useNavigate();

    const fetchGameDetails = async () => {
        const game = await getGameById(params.id);

        if (game) {
            setgameDetails(game.data);
        } else {
            alert("לא נמצא משחק עם מזהה זה");
            navigate("/home");
        }
    };

    useEffect(() => {
        debugger
        fetchGameDetails();
    }, []);

    const handleClose = () => {
        navigate("/home");
    };

    if (gameDetails) {
        return (
            <div style={{
                position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
                justifyContent: 'center', alignItems: 'center', zIndex: '1000'
            }}>
                <div style={{
                    backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '600px'
                }}>
                    <h2>{gameDetails.name}</h2>
                    <p><strong>מחיר:</strong>{gameDetails.price} ₪</p>
                    {/* <p><strong>תיאור:</strong>{gameDetails.}</p> */}
                    <img style={{ width: '100%', height: 'auto' }} src={`https://localhost:7006/${gameDetails.picture}`} alt={gameDetails.name} />
                    <br />
                    <button onClick={handleClose} style={{ marginTop: '20px' }} className="btn btn-outline-dark">סגור</button>
                </div>
            </div>
        );
    }
};