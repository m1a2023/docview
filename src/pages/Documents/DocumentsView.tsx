import { useEffect, useState } from "react";
import DocumentList from "../../widgets/docs/DocumentList";
import { FetchDocuments } from "../../shared/api/docs/documents";
import { HttpStatusCode } from "axios";
import type { Doc } from "../../shared/types/docs/Document";

const DocumentsView = (): React.ReactElement => {
	const [documents, setDocuments] = useState<Doc[]>(new Array<Doc>());

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
				setDocuments(response.documents);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<DocumentList documents={documents} />
		</>
	);
};

export default DocumentsView;
