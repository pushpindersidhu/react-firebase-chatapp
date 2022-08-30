import React from "react";
import {
	getAuth,
	signInAnonymously,
	signOut,
} from "firebase/auth";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";

import { auth } from "../firebase";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, loading, error] = useAuthState(auth);
	const [updateProfile, updating] = useUpdateProfile(auth);

	const signInGuest = async (displayName, photoURL) => {
		await signInAnonymously(auth);
		await updateProfile({ displayName, photoURL });
	};

	const signOutGuest = () => {
		return signOut(auth);
	};

	return (
		<AuthContext.Provider value={{ user, signOutGuest, signInGuest }}>
			{children}
		</AuthContext.Provider>
	);
};
