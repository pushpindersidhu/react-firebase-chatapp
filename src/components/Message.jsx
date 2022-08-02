import React from "react";

const Message = (props) => {
  const { message, user } = props;
  const { uid } = user;
  const {
    text,
    uid: msgUid,
    displayName: msgDisplayName,
    photoURL: msgPhotoURL,
  } = message;

  return (
    <div
      className={`flex ${uid === msgUid ? "flex-row-reverse" : "flex-row"} p-2`}
    >
      <div
        style={{ backgroundImage: `url(${msgPhotoURL})` }}
        referrerPolicy="no-referrer"
        className="w-8 h-8 bg-black rounded-full mx-2 shrink-0"
      ></div>
      <div className="flex flex-col justify-center">
        <div
          className={`text-black font-semibold text-sm ${
            uid === msgUid ? "text-right" : "text-left"
          }`}
        >
          {msgDisplayName}
        </div>
        <div
          className={`${
            uid === msgUid ? "text-white bg-sky-400" : "text-black bg-slate-100"
          } py-1 px-4 break-all text-md rounded-b-2xl ${
            uid === msgUid ? "rounded-tl-2xl" : "rounded-tr-2xl"
          } my-2`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Message;
