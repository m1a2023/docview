import { createBrowserRouter } from "react-router";
import App from "./App";
import AppLayout from "./AppLayout";
import DocumentsUpload from "../widgets/docs/DocumentUpload";
import DocumentLayout from "../pages/Documents/DocumentLayout";
import DocumentsView from "../pages/Documents/DocumentsView";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				element: <AppLayout />,
				children: [
					{
						path: "/documents",
						element: <DocumentLayout />,
						children: [
							{
								path: "/documents/view",
								element: <DocumentsView />,
							},
							{
								path: "/documents/upload",
								element: <DocumentsUpload />,
							},
						],
					},
					// {
					// 	path: "/login",
					// 	element: <LoginLayout />,
					// 	children: [ ]
					// }
				],
			},
		],
	},
]);

export default router;
