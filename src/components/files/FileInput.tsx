import { type ChangeEvent } from "react";

interface MultipleFileInputProps {
	capture: (initialState: File[] | (() => File[])) => void;
}

const MultipleFileInput = ({ capture }: MultipleFileInputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			capture(Array.from(e.target.files));
		} else {
			capture([]);
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
