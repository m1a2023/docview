import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import App from "./App";
import AppLayout from "./AppLayout";
import HomeLayout from "../pages/Home/HomeLayout";
import DocumentsUpload from "../widgets/docs/DocumentUpload";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				element: <AppLayout />,
				children: [
					{
						path: "/documents",
						element: <HomeLayout />,
						children: [
							{
								index: true,
								element: <Home />,
							},
						],
					},
					{
						path: "/upload",
						element: <DocumentsUpload />,
					},
				],
			},
		],
	},
]);

export default router;
