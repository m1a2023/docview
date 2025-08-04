import React from "react";
import { DocumentCard } from "../../components/docs/DocumentCard";
import { DocumentMetadata } from "../../components/docs/DocumentMetadata";
import type { DocumentProps } from "../../shared/types/docs/DocumentProps";
import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const AccordionDocumentCard = ({
	document,
}: DocumentProps): React.ReactElement => {
	const [isExpand, setIsExpand] = React.useState(false);
	const [isDownloadPressed, setIsDownloadPressed] = React.useState(false);
	const [isDeletePressed, setIsDeletePressed] = React.useState(false);

	const handleCardClick = () => setIsExpand(!isExpand);

	const handleDownloadClick = () => {
		setIsDownloadPressed(!isDownloadPressed);
	};

	const handleDeleteClick = () => {
		setIsDeletePressed(!isDeletePressed);
	};

	const DocumentMetadataContainer = () => (
		<>
			<hr className="divider" />
			<div className="collapse show">
				<DocumentMetadata document={document} />
			</div>
		</>
	);

	const DocumentCardContainer = () => (
		<DocumentCard document={document}>
			<div className="col-md-auto cursor-pointer" onClick={handleDownloadClick}>
				<IoMdDownload size={23} />
			</div>

			<div className="col-md-auto cursor-pointer" onClick={handleDeleteClick}>
				<MdDelete size={23} />
			</div>
		</DocumentCard>
	);

	return (
		<div
			className="container list-group-item list-group-item-action"
			onClick={handleCardClick}
		>
			<DocumentCardContainer />
			{isExpand && <DocumentMetadataContainer />}
		</div>
	);
};
