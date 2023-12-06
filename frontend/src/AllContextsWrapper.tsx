import React from "react";

import { AppProvider, WindowProvider, AuthProvider } from "./contexted";
import { UsersProvider } from "./contexted/Users/Provider";

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextsWrapperProps {
  element: React.ReactNode;
}

const InnerProviders: React.FC<ProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <UsersProvider>{children}</UsersProvider>
    </AuthProvider>
  );
};

const OuterProviders: React.FC<ProviderProps> = ({ children }) => {
  return (
    <WindowProvider>
      <AppProvider>{children}</AppProvider>
    </WindowProvider>
  );
};

const ContextsWrapper: React.FC<ContextsWrapperProps> = ({
  element,
}): JSX.Element => (
  <OuterProviders>
    <InnerProviders>{element}</InnerProviders>
  </OuterProviders>
);

export default ContextsWrapper;
