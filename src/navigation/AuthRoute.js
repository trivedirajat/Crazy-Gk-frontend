const AuthGuard = ({
  component: Component,
  fallback: FallbackComponent,
  redirectTo = "/login",
  ...rest
}) => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  if (isAuthenticated) {
    return Component;
  } else {
    return FallbackComponent;
  }
};

export default AuthGuard;
