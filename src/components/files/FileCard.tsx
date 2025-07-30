import type React from "react";
import reduceSize from "../../features/utils/SizeReducer";

interface FileCardProps {
	file: File;
}

const FileCard = ({ file }: FileCardProps): React.ReactElement => {
	const size = reduceSize(file.size);

	return (
		<>
			<div className="container list-group-item list-group-item-action">
				<div className="row">
					<div className="col text-break">{file.name}</div>
					<div className="col-2 text-mid container">{size}</div>
				</div>
			</div>
		</>
	);
};

export default FileCard;
