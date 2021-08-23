import { IID } from "../model/id.interface"
import { ITask} from "../tasks/tasks.interface"

export interface INote {
	created_at: string,
	finish_date: string,
	level: number,
	name: string,
	updated_at: string,
	_id: IID,
	tasks: Array<ITask>
}