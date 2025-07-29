import type React from "react";
import MultipleFileInput from "../../features/input/FileInput";
import { useState } from "react";
import FileCard from "../../components/files/FileCard";

const DocumentsUpload = (): React.ReactElement => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

	return (
		<>
			<div className="mb-4">
				<MultipleFileInput SetSelectedFiles={setSelectedFiles} />
			</div>
			<div>
				{selectedFiles.length > 0 && (
					<div className="list-group">
						{selectedFiles.map((file) => (
							<FileCard file={file} />
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default DocumentsUpload;
