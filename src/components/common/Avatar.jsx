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
			className={`relative rounded-full bg-gray-700 mx-3 select-none ${className} overflow-hidden`}
			onClick={onClick}
		>
			{!isLoaded && (
				<div
					className={`absolute w-full h-full z-100 bg-gray-600 animate-pulse rounded-full`}
				></div>
			)}
			<img
				src={getAvatarLink(id)}
				alt=""
				onLoad={loaded}
				className={`w-full h-full ${!isLoaded && "hidden"}`}
			/>
		</div>
	);
};

export default Avatar;
