import { Route, Redirect, RouteComponentProps } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";
import { Paths } from "../route/path";

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const AuthRoute = ({ Component, path }: Props): JSX.Element => {
  const { user } = useAuthContext()!;
  const isLoggedIn = user ? true : false;

  return (
    <Route
      path={path}
      render={(props: RouteComponentProps) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: Paths.LOGIN }}></Redirect>
        )
      }
    ></Route>
  );
};

export { AuthRoute };
