import React from "react";
import type { FileProps } from "../../shared/types/files/FileProps";
import FileCard from "../../components/files/FileCard";
import { MdDelete } from "react-icons/md";
import { MetadataContainer } from "../../components/MetadataContainer";

interface AccordionFileCardProps extends FileProps {
	onDelete: (file: File) => void;
}

export const AccordionFileCard = ({
	file,
	onDelete,
}: AccordionFileCardProps): React.ReactElement => {
	const [isExpand, setIsExpand] = React.useState(false);

	const handleCardClick = () => setIsExpand(!isExpand);
	const handleDeleteClick = () => onDelete(file);

	const FileMetadataContainer = () => (
		<>
			<hr className="divider" />
			<MetadataContainer>
				<></>
			</MetadataContainer>
		</>
	);

	const FileCardContainer = () => (
		<FileCard file={file}>
			<div className="col-md-auto cursor-pointer" onClick={handleDeleteClick}>
				<MdDelete size={23} />
			</div>
		</FileCard>
	);

	return (
		<>
			<div
				className="container list-group-item list-group-item-action"
				onDoubleClick={handleCardClick}
			>
				<FileCardContainer />
				{isExpand && <FileMetadataContainer />}
			</div>
		</>
	);
};
