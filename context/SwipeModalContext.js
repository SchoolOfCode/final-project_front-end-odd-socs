import { createContext, useContext } from "react";

const Context = createContext();
const [, setVal] = useContext(Context);

export default