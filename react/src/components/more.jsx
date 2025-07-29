import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams} from "react-router-dom";
import { getGameById, getAllGames } from "../axios/gameaxios"

export const More = () => {
    const { id } = useParams();
    const [gameDetails, setGameDetails] = useState(null);
    const navigate = useNavigate();

    const fetchGameDetails = async () => {
            debugger
        const game = await getGameById(id).data
        if (game) {
            setGameDetails(game);
        } else {
            alert("Error");
            navigate("/home");
        }
    };

    // const f1 = async () => {
    //     debugger
    //     // if (game == null) {
    //         let y = (await getGameById(params.id)).data
    //         setgame(y)
    //     // }
    // }
    useEffect(() => {
        fetchGameDetails();
    },[id]);

    const handleClose = () => {
        navigate("/home");
    };



    if (gameDetails) {

        // "id": 0,
        // "barcode": "string",
        // "name": "string",
        // "categoryId": 0,
        // "categoryName": "string",
        // "price": 0,
        // "picture": "string",
        // "quantityInStock": 0
        // debugger
        return (

            <div style={{
                position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
                justifyContent: 'center', alignItems: 'center', zIndex: '1000'
            }}>
                <div style={{
                    backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '600px'
                }}>
                    <h2>{gameDetails.name}</h2>
                    <p><strong>מחיר: </strong>{gameDetails.price}$</p>
                    {/* <p><strong>תיאור: </strong>{gameDetails.gameDescription || "אין תיאור זמין"}</p> */}
                    <img src={`https://localhost:7006/${gameDetails.picture}`} alt="" style={{ width: '100%', height: 'auto' }} />
                    <br />
                    <button onClick={handleClose} style={{ marginTop: '20px' }} className="btn btn-outline-dark">סגור</button>
                </div>
            </div>
        );
    }
    // return <div>
    //     <p>{game.price} $</p>
    //     <p>category: {game.categoryName}</p> 
    //     <p>barcode: {game.barcode}</p>
    // </div>
};