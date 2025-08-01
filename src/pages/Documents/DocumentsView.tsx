import { useEffect, useState } from "react";
import DocumentList from "../../widgets/docs/DocumentList";
import { FetchDocuments } from "../../shared/api/docs/documents";
import { HttpStatusCode } from "axios";
import type { Doc } from "../../shared/types/docs/Document";
import { Spinner } from "../../components/spinner/Spinner";

const DocumentsView = (): React.ReactElement => {
	const [documents, setDocuments] = useState<Doc[]>(new Array<Doc>());
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const SpinnerContainer = () => (
		<div className="d-flex justify-content-center">
			<Spinner type="border" color="primary" className="p-4" />
		</div>
	);

	useEffect(() => {
		FetchDocuments()
			.then((response) => {
				if (response.status == HttpStatusCode.Ok) {
					return response.data;
				} else {
					// TODO correctly handling error
					throw new Error("Raised exception");
				}
			})
			.then((response) => {
				setTimeout(
					() => {
						setDocuments(response.documents);
						setIsLoaded(true);
					},
					100000,
					[]
				);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			{isLoaded ? <DocumentList documents={documents} /> : <SpinnerContainer />}
		</>
	);
};

export default DocumentsView;
