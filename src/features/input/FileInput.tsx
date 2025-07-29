import { type ChangeEvent } from "react";

interface MultipleFileInputProps {
	SetSelectedFiles: (initialState: File[] | (() => File[])) => void;
}

const MultipleFileInput = ({ SetSelectedFiles }: MultipleFileInputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			SetSelectedFiles(Array.from(e.target.files));
		} else {
			SetSelectedFiles([]);
		}
	};

	return (
		<>
			<div className="input-group">
				<input
					type="file"
					className="form-control"
					multiple
					onChange={handleChange}
				/>
				<button className="btn btn-outline-primary" type="button">
					Upload
				</button>
			</div>
		</>
	);
};

export default MultipleFileInput;
