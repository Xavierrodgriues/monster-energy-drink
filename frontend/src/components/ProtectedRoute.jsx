import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>; // or a spinner
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return children;
};

export default ProtectedRoute;