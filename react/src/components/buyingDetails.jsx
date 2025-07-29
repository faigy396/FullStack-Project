import { useState } from "react"
import { useEffect } from "react"
import { getAllShoppingDetails } from "../axios/shoppingDetailsaxios"
import { useNavigate, useParams } from 'react-router-dom'

export const BuyingDetails = () => {
    const [shoppingDetails, setshoppingDetails] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const fetchBuyingDetails = async () => {

        debugger

        const response = await getAllShoppingDetails();
        const details = response.data.filter((d) => d.shoppingId == params.id);
        if (details) {
            setshoppingDetails(details)
        } else {
            alert("not found")
            navigate("/personl");
        }
    }

    const handleClose = () => {
        navigate("/personl")
    }

    useEffect(() => {
        fetchBuyingDetails();
    }, [])
    if (shoppingDetails) {
        return <div style={{
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
            justifyContent: 'center', alignItems: 'center', zIndex: '1000'
        }}>
            <div style={{
                backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '600px'
            }}>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>shopping id</th>
                            <th>game</th>
                            <th>qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingDetails.map((x, i) => (
                            <tr key={i}>
                                <td>{x.id}</td>
                                <td>{x.shoppingId}</td>``
                                <td>{x.gameName}</td>
                                <td>{x.qty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button style={{ marginTop: '20px' }} className="btn btn-outline-dark" onClick={handleClose}>close</button>
            </div>

        </div>
    }
}