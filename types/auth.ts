export interface Credentials {
  username: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

export interface SignInProps {
  onSignIn: (email: string, password: string) => void;
}