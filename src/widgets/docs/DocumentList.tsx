import { DocumentCard } from "../../components/docs/DocumentCard";
import type { Doc } from "../../shared/types/docs/Document";

type DocumentListProps = {
	documentList: Doc[];
};

const DocumentList = ({
	documentList,
}: DocumentListProps): React.ReactElement => {
	return (
		<>
			<div className="list-group">
				{documentList.map((d) => (
					<DocumentCard document={d} />
				))}
			</div>
		</>
	);
};

export default DocumentList;
