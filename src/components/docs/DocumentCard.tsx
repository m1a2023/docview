import type { Doc } from "../../shared/types/docs/Document";

interface DocumentCardProps {
	document: Doc;
}

export function DocumentCard({
	document,
}: DocumentCardProps): React.ReactElement {
	const date = new Date(document.changed_at);
	const path = document.path;
	return (
		<a href={path} className="list-group-item list-group-item-action">
			<div className="container">
				<div className="row">
					<div className="col-1">{"svg"}</div>
					<div className="col text-start">{document.title}</div>
					<div className="col text-end">{getDateAndTime(date)}</div>
				</div>
			</div>
		</a>
	);
}

function getDateAndTime(date: Date): string {
	return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}
