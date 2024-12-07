import React from 'react';

// using type assertion to avoid having to initialize the context as null
const IPContext = React.createContext<IPContextType>({} as IPContextType);
export default IPContext;