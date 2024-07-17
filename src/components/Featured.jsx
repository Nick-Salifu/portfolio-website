import { BrowserRouter, Route, Routes } from "react-router-dom"
// import FrameThree from "./FrameThree"
import FeaturedProject from "./FeaturedProject"
import NextFrame1 from "./NextFrame1"
import NextFrame2 from "./NextFrame2"

function Featured() {
    return (
        <FeaturedProject>
            <BrowserRouter>
                <Routes>
                    <Route path="/first" element={<NextFrame1 />} />
                    <Route path="/second" element={<NextFrame2 />} />
                    {/* <Route path="third" element={<FrameThree />} /> */}
                </Routes>
            </BrowserRouter>
        </FeaturedProject>
    )
}

export default Featured
