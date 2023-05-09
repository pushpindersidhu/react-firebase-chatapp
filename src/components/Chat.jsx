import React from "react";
import {
  collection,
  orderBy,
  query,
  limitToLast,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FaPaperPlane } from "react-icons/fa";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

import Message from "./common/Message";
import Input from "./common/Input";

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
  const { db, user } = props;
  const chatRef = collection(db, "chat").withConverter(messageConverter);
  const chatQuery = query(chatRef, orderBy("createdAt"), limitToLast(50));

  const [message, setMessage] = React.useState("");

  const dummy = React.useRef();

  const { uid, displayName, photoURL } = user;

  const sendMessage = async () => {
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

  const groupedChat =
    chat &&
    chat.reduce((acc, curr) => {
      const last = acc[acc.length - 1];
      if (last && last.uid === curr.uid) {
        last.messages.push(curr);
        return acc;
      }
      return [
        ...acc,
        {
          uid: curr.uid,
          displayName: curr.displayName,
          photoURL: curr.photoURL,
          messages: [curr],
        },
      ];
    }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="my-1 flex-1 overflow-y-scroll">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {groupedChat &&
          groupedChat.map((groupedMessages) => {
            return (
              <Message
                key={groupedMessages.messages[0].id}
                groupedMessages={groupedMessages}
                user={user}
              />
            );
          })}

        <div ref={dummy}></div>
      </div>

      <div className="flex h-12 shrink-0 content-center items-center bg-gray-50 px-4 dark:bg-bunker-1000">
        <div className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center text-accent-400">
          <BsEmojiHeartEyesFill size="20" />
        </div>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type a message..."
          className="h-full w-full cursor-text bg-transparent px-4 text-sm font-normal text-bunker-800 placeholder-bunker-500 outline-none selection:bg-gray-300 dark:text-gray-100 dark:placeholder-gray-500 dark:selection:bg-bunker-700"
        />
        <div
          onClick={sendMessage}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center text-accent-400"
        >
          <FaPaperPlane size="20" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
