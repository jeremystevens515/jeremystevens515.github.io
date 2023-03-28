import React, { useContext, useState } from "react";

const globalContext = React.createContext();

export const useGlobalState = () => useContext(globalContext);

export const GlobalProvider = ({ children }) => {
	const [currentStep, setCurrentStep] = useState(1);

	return (
		<globalContext.Provider value={{ currentStep, setCurrentStep }}>
			{children}
		</globalContext.Provider>
	);
};
