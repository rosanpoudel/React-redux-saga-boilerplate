import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/Navbar";

import Routes from "./Routes/routes";
import PrivateRoute from "./Routes/privateRoute";
import PublicRoute from "./Routes/publicRoute";

export const App = () => {
	return (
		<>
			<Router>
				<Nav />
				<Switch>
					{Routes.map((route) =>
						route.private ? (
							<PrivateRoute
								key={route.id}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						) : (
							<PublicRoute
								key={route.id}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						)
					)}
				</Switch>
			</Router>
		</>
	);
};
