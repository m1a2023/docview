import { IoIosDocument } from "react-icons/io";
import type { Doc } from "../../shared/types/docs/Document";
import { extractDateAndTime } from "../../features/utils/DateAndTime";

export interface DocumentCardProps {
	document: Doc;
}

export function DocumentCard({
	document,
}: DocumentCardProps): React.ReactElement {
	const date = new Date(document.changed_at);
	return (
		<div className="row">
			<div className="col-md-auto">
				<IoIosDocument size={23} />
			</div>
			<div className="col text-start">{document.title}</div>
			<div className="col text-end">{extractDateAndTime(date)}</div>
		</div>
	);
}
