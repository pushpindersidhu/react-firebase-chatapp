import React from "react";


import Input from "../common/Input";
import Button from "../common/Button";
import Divider from "../common/Divider";
import TextLink from "../common/TextLink";

const Signup = () => {
	return (
		<div className="absolute w-screen h-screen bg-black/75 z-10 flex justify-center items-center">
			<div className="bg-gray-900 w-full max-w-sm p-6 flex flex-col items-center rounded-lg shadow-lg">
				<h1 className="text-md font-bold text-white m-4 py-2">Sign Up</h1>
				<Input type="text" placeholder="Username" />
				<Input type="password" placeholder="Password" />
				<Button text="Signup" />

				<Divider />

				<TextLink text="Already have an account?" linkText="Sign In" />
			</div>
		</div>
	);
};


export default Signup;
	