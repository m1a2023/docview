import type React from "react";
import MultipleFileInput from "../../components/files/FileInput";
import { useState } from "react";
import SelectedFilesList from "./SelectedFilesList";

const DocumentsUpload = (): React.ReactElement => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

	return (
		<>
			<div className="mb-4">
				<MultipleFileInput capture={setSelectedFiles} />
			</div>
			<SelectedFilesList files={selectedFiles} />
		</>
	);
};

export default DocumentsUpload;
