import { Route, Routes } from "react-router-dom"
import { AddCategory } from "./addcategory"
import { AddGame } from "./addgame"
import { BuyingDetails } from "./buyingDetails"
import { Categories } from "./categories"
import { End } from "./end"
import { Games } from "./games"
import { Home } from "./home"
import { Login } from "./login"
import { Pay } from "./pay"
import { PersonalArea } from "./personal area"
// import { More } from "./more"
import { ShoppingCart } from "./shoppingcart"
import { ShowGameDetails } from "./showgamedetails"
import { SignUp } from "./signup"
import { UpdateCategory } from "./updatecategory"
import { UpdateGame } from "./updategame"

export const MyRouting = () => {
    return <div>
        <Routes>
            {/* <Route path="/" element={<Home></Home>}></Route> */}
            <Route path="home" element={<Home></Home>}>
                <Route path="more/:id" element={<ShowGameDetails></ShowGameDetails>}></Route>
            </Route>

            <Route path="signup" element={<SignUp></SignUp>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="gamelist" element={<Games></Games>}>
                <Route path="addgame" element={<AddGame></AddGame>}></Route>
                <Route path="updategame/:id" element={<UpdateGame></UpdateGame>}></Route>
            </Route>
            <Route path="categorylist" element={<Categories></Categories>}>
                <Route path="addcategory" element={<AddCategory></AddCategory>}></Route>
                <Route path="updatecategory/:id" element={<UpdateCategory></UpdateCategory>}></Route>
            </Route>
            <Route path="cart" element={<ShoppingCart></ShoppingCart>}></Route>
            {/* <Route path="end/:id" element={<End></End>}></Route> */}
            <Route path="personl" element={<PersonalArea></PersonalArea>}>
                <Route path="buyDetails/:id" element={<BuyingDetails></BuyingDetails>}></Route>
            </Route>
            <Route path="pay" element={<Pay></Pay>}></Route>
        </Routes>

    </div>
}