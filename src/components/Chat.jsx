import React from "react";
import {
  collection,
  orderBy,
  query,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Message from "./Message";

const messageConverter = {
  toFirestore(message) {
    return {
      text: message.text,
      uid: message.uid,
      displayName: message.displayName,
      photoURL: message.photoURL,
      createdAt: message.createdAt,
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      text: data.text,
      uid: data.uid,
      displayName: data.displayName,
      photoURL: data.photoURL,
      createdAt: data.createdAt,
    };
  },
};

const Chat = (props) => {
  const { db, user, auth } = props;
  const chatRef = collection(db, "chat").withConverter(messageConverter);
  const chatQuery = query(chatRef, orderBy("createdAt"), limit(25));

  const [message, setMessage] = React.useState("");

  const dummy = React.useRef();

  const signOut = () => {
    auth.signOut();
  };

  const { uid, displayName, photoURL } = user;

  const sendMessage = async (e) => {
    e.preventDefault();

    if (message) {
      addDoc(chatRef, {
        text: message,
        uid: uid,
        displayName: displayName,
        photoURL: photoURL,
        createdAt: serverTimestamp(),
      });
      setMessage("");
    }
  };

  const [chat, loading, error] = useCollectionData(chatQuery, {
    idField: "id",
  });

  React.useEffect(() => {
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  return (
    <div className="container flex flex-col h-full">
      <div className="shrink-0 px-4 h-16 w-full flex flex-row items-center justify-between border-b">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 stroke-black"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
          <line x1="12" y1="12" x2="12" y2="12.01" />
          <line x1="8" y1="12" x2="8" y2="12.01" />
          <line x1="16" y1="12" x2="16" y2="12.01" />
        </svg>
        <h2 className="text-lg font-bold">{user.displayName}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 stroke-rose-500 cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={signOut}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
      </div>

      <div className="flex-1 overflow-y-scroll my-1">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {chat &&
          chat.map((msg) => {
            return <Message key={msg.id} message={msg} user={user} />;
          })}

        <div ref={dummy}></div>
      </div>

      <div className="flex items-center content-center shrink-0 min-h-16">
        <div className="w-full">
          <form onSubmit={sendMessage} className="w-full flex flex-row p-2">
            <input
              type="text"
              value={message}
              maxLength={140}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-slate-100 py-2 px-6 flex-1 w-fit transition ease-in-out hover:bg-slate-200 duration-150 active:bg-slate-100 focus:outline-none rounded-l-lg h-12 break-all"
              placeholder="Your message..."
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bg-slate-100 p-4 w-20 transition ease-in-out hover:bg-slate-200 duration-150 active:bg-slate-100 focus:outline-none rounded-r-lg border-l border-slate-300 h-12 cursor-pointer stroke-sky-500"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
