import { createContext } from "react";
import { User } from "../Types/User";

export type AuthContextType = {
    user: User | null;
    singIN: (email: string, password: string) => Promise<boolean>;
    singOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);