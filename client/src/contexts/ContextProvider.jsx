import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [challan, setChallan] = useState();

	console.log(challan);

	const logOut = () => {
		setUser("");
	};

	return (
		<StateContext.Provider
			value={{ user, setUser, logOut, challan, setChallan }}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
