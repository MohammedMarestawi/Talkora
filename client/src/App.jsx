import { Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/react";
import Messages from "./pages/Messages";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Connections from "./pages/Connections";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Settings from "./pages/Settings";
import PostDetaills from "./pages/PostDetaills";
import NotificationsPage from "./pages/NotificationsPage";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

const App = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Layout />}>
        <Route index element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:userId" element={<Chat />} />
        <Route path="connections" element={<Connections />} />
        <Route path="search" element={<Search />} />
        <Route path="createPost" element={<CreatePost />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:profileId" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="post/:postId" element={<PostDetaills />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>
    </Routes>
  );
};

export default App;