import { DocumentCard } from "../../components/docs/DocumentCard";
import type { Doc } from "../../shared/types/docs/Document";

type DocumentListProps = {
	documents: Doc[];
};

const DocumentList = ({ documents }: DocumentListProps): React.ReactElement => {
	return (
		<>
			<div className="list-group">
				{documents.map((d) => (
					<DocumentCard document={d} />
				))}
			</div>
		</>
	);
};

export default DocumentList;
