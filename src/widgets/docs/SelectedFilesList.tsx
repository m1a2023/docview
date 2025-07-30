import type React from "react";
import FileCard from "../../components/files/FileCard";

interface SelectedFilesViewProps {
	files: File[];
}

const SelectedFilesList = ({
	files,
}: SelectedFilesViewProps): React.ReactElement => {
	return (
		<>
			<div className="list-group">
				{files.map((file) => (
					<FileCard file={file} />
				))}
			</div>
		</>
	);
};

export default SelectedFilesList;
