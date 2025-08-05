import { useEffect, useState } from "react";
import DocumentList from "../../widgets/docs/DocumentList";
import type { Doc } from "../../shared/types/docs/Document";
import { Spinner } from "../../components/spinner/Spinner";
import type { DocMultipleResponse } from "../../shared/types/docs/DocumentResponse";
import { DocuementAPI } from "../../shared/api/docs/documents";
import { API_ENDPOINTS } from "../../shared/api/api/endpoints";

const DocumentsView = (): React.ReactElement => {
	const [documents, setDocuments] = useState<Doc[]>(new Array<Doc>());
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const SpinnerContainer = () => (
		<div className="position-absolute top-50 start-50 translate-middle">
			<Spinner type="border" color="primary" className="p-4" />
		</div>
	);

	useEffect(() => {
		const api = new DocuementAPI(API_ENDPOINTS.documents);
		api
			.read<undefined, DocMultipleResponse>()
			.then((res: DocMultipleResponse) => {
				console.log(res);
				setDocuments(res.documents);
				setIsLoaded(true);
			})
			.catch(console.log);
	}, []);

	return (
		<>
			{isLoaded ? <DocumentList documents={documents} /> : <SpinnerContainer />}
		</>
	);
};

export default DocumentsView;
