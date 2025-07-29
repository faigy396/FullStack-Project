import { useEffect } from "react"
import { useState } from "react"
import { getAllCustomers } from "../axios/customeraxios"

export const S = () => {
    const [list, setlist] = useState([])
    const f1 = async () => {
        if (list.length == 0) {
            let y = (await getAllCustomers()).data;
            setlist(y)
        }
    }
    useEffect(() => {
        f1()
    },
        [])
    return <div>
        {list.map((x, i) => <p key={i}>{x.custName}</p>)}
    </div>
}