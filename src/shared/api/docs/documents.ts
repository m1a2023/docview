import axios, { type AxiosResponse } from "axios";
import type { DocMultipleResponse } from "../../types/docs/DocumentResponse";

/**
 * Send get request to server
 * @returns AxiosResponse\<DocMultipleResponse\>
 */
export async function FetchDocuments(): Promise<
	AxiosResponse<DocMultipleResponse>
> {
	// TODO move url to YAML or .env file
	const url = "http://localhost:8080/docs/";
	return await axios.get<DocMultipleResponse>(url);
}
