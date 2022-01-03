import Home from "../containers/Home";
import DetailPage from "../containers/Detail";

const Routes = [
	{
		id: 1,
		name: Home,
		component: Home,
		path: "/",
		exact: true,
		private: true,
	},
	{
		id: 2,
		name: DetailPage,
		component: DetailPage,
		path: "/detail/:id",
		exact: true,
		private: false,
	},
];

export default Routes;
