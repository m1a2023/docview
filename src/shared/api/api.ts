export interface IAPI {
	create<T, R>(item: T): Promise<R>;
	read<T, R>(item?: T): Promise<R>;
	update<T, R>(item: T): Promise<R>;
	delete<T, R>(item: T): Promise<R>;
}

export type MethodType = "post" | "get" | "put" | "delete";
