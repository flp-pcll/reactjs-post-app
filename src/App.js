import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost";

export default function App() {
    return (
        <div id="pageWrapper">
            <header></header>
            <main>
                <Routes>
                    <Route index path="home" element={<Homepage />} />
                    <Route path="new" element={<CreatePost />}/>
                    <Route path="singlePost" element={<SinglePost />}/>
                    <Route path="*" element={<Homepage />} />
                </Routes>
            </main>
            <footer></footer>
        </div>
    );
};