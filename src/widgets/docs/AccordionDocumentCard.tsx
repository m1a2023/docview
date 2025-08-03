import React from "react";
import {
	DocumentCard,
	type DocumentCardProps,
} from "../../components/docs/DocumentCard";
import { DocumentMetadata } from "../../components/docs/DocumentMetadata";

export const AccordionDocumentCard = ({
	document,
}: DocumentCardProps): React.ReactElement => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const handleCardClick = () => {
		setIsOpen(!isOpen);
	};

	const MetadataContainer = () => (
		<>
			<hr className="divider" />
			<div className="collapse show">
				<DocumentMetadata document={document} />
			</div>
		</>
	);

	return (
		<div
			className="container list-group-item list-group-item-action"
			onClick={handleCardClick}
		>
			<DocumentCard document={document} />
			{isOpen && <MetadataContainer />}
		</div>
	);
};
