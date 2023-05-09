import React from "react";

import useAuth from "./hooks/useAuth";

import { auth, db } from "./firebase";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Guest from "./components/Guest";
import Chat from "./components/Chat";

function App() {
  const { user } = useAuth();

  return (
    <>
      {!user && <Guest />}
      <div className="flex h-screen w-full bg-gray-100 dark:bg-bunker-900">
        <SideBar />
        <div className="grow-1 flex h-full w-full flex-col">
          <Header />
          <div className="flex min-h-0 w-full flex-auto flex-row">
            <div className="grow-1 h-full w-full">
              {user && <Chat user={user} auth={auth} db={db} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
