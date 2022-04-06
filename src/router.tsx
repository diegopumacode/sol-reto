import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:type" element={<Home />} />
                {/*  */}
                <Route path='*' element={<></>} />
            </Routes>
        </BrowserRouter>
    )
}