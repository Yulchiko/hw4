import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./Pages";
import UserPage from "./Pages/UserPage/UserPage";
import SingleUserPage from "./Pages/SingleUserPage/SingleUserPage";
import PostPage from "./Pages/PostPage/PostPage";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UserPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}/>
                </Route>
                <Route path={'/posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
