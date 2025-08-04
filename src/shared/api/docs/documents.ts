import axios, { HttpStatusCode } from "axios";
import type { IAPI, MethodType } from "../api";

interface IDocumentAPI extends IAPI {
	readById<T, R>(item: T): Promise<R>;
}

export class DocumentAPI implements IDocumentAPI {
	private url = "http://localhost:8080/docs";

	public async create<T, R>(item: T): Promise<R> {
		return this.apply(this.url, "post", item);
	}

	public async read<T, R>(item?: T): Promise<R> {
		return this.apply(this.url, "get", item);
	}

	public async update<T, R>(item: T): Promise<R> {
		return this.apply(this.url, "put", item);
	}

	public delete<T, R>(item: T): Promise<R> {
		return this.apply(this.url, "delete", item);
	}

	public async readById<T, R>(item: T): Promise<R> {
		return this.apply(this.url, "get", item);
	}

	private async apply<T, R>(
		url: string,
		method: MethodType,
		item?: T
	): Promise<R> {
		try {
			const res = await axios.request<R>({
				method: method,
				url: url,
				data: item,
			});

			if (res.status !== HttpStatusCode.Ok) {
				const msg = `Failed to make request ${method}: HTTP ${res.status}`;
				throw new Error(msg);
			}

			return res.data;
		} catch (e) {
			const msg = `API error: ${e}`;
			throw new Error(msg);
		}
	}
}
