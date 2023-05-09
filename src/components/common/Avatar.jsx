import React from "react";

import { getAvatarLink } from "../../utils/avatar";

const Avatar = (props) => {
  const { id, className, onClick } = props;

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(false);
  }, [id]);

  const loaded = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`relative mx-3 select-none rounded-full bg-gray-300 dark:bg-gray-700 ${className} overflow-hidden`}
      onClick={onClick}
    >
      {!isLoaded && (
        <div
          className={`z-100 absolute h-full w-full animate-pulse rounded-full bg-gray-300 dark:bg-gray-600`}
        ></div>
      )}
      <img
        src={getAvatarLink(id)}
        alt=""
        onLoad={loaded}
        className={`h-full w-full ${!isLoaded && "hidden"}`}
      />
    </div>
  );
};

export default Avatar;
