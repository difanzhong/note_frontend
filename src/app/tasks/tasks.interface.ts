import { IID } from "../model/id.interface";

export interface ITask {
	created_at: string;
	details: string;
	priority: number;
	updated_at: string;
	_id: IID;
}