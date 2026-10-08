import { Routes, Route } from "react-router-dom";
import Messages from "./pages/Messages";
import Home from "./pages/Home";
import Chat from "./pages/chat";
import Connections from "./pages/connections";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Settings from "./pages/Settings";
import PostDetaills from "./pages/PostDetaills";
import NotificationsPage from "./pages/NotificationsPage";
import Layout from "./pages/Layout";


const App = () => {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Layout/>}> 
        <Route index element={<Home/>} />
                <Route path= "messages" element={<Messages/>} />
                <Route path= "messages/:userId" element={<Chat/>} />
                <Route path= "connections" element={<Connections/>} />
                <Route path= "search" element={<Search/>} />
                <Route path= "createPost" element={<CreatePost/>} />
                <Route path= "profile" element={<Profile/>} />
                <Route path= "profile/profileId" element={<profile/>} />
                <Route path= "setting" element={<Settings/>} />
                <Route path= "post/:postId" element={<PostDetaills/>} />
                <Route path= "notificationsPage" element={<NotificationsPage/>} />

          </Route>
    </Routes>
    </>
  )
};
export default App;