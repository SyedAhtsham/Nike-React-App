import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewShoe from "./pages/ViewShoe";


const App = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={< Home />} />
                <Route path="/home" element={< Home />} />
                <Route path="/viewshoe" element={<ViewShoe />} />
                {/* <Route path="/viewOrder" element={<Order />} /> */}
            </Routes>
        </BrowserRouter>
    </div>

);


export default App;