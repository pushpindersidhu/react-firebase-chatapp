import React from "react";

const Message = (props) => {
  const { groupedMessages } = props;
  const {
    messages,
    displayName: msgDisplayName,
    photoURL: msgPhotoURL,
  } = groupedMessages;

  const createdAt = messages[0].createdAt;

  const timestamp = createdAt && new Date(createdAt.seconds * 1000);
  const timestampStr = timestamp ? timestamp.toLocaleTimeString() : "Just now";

  return (
    <div className="flex w-full cursor-pointer flex-row p-4 pl-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full dark:bg-bunker-800">
        <img src={msgPhotoURL} alt="" className=" h-full w-full object-cover" />
      </div>

      <div className="mx-4 flex flex-col">
        <p className="cursor-pointer text-xs font-semibold text-gray-800 dark:text-gray-400">
          {msgDisplayName}
          <small className="mx-2 font-semibold text-gray-500 dark:text-gray-600">
            {timestampStr}
          </small>
        </p>
        <div className="whitespace-normal break-all text-sm text-gray-800 dark:text-gray-100">
          {messages.map((message) => (
            <p key={message.id}>{message.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
