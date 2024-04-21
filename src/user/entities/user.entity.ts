import { Project } from "src/project/entities/project.entity";
import { Sample } from "src/sample/entities/sample.entity";
import { Experiment } from "src/experiment/entities/experiment.entity";

export class User {
    id: string;
    name: string;
    email:string;
    password: string;
    project: Project[];
    sample: Sample[];
    experiment: Experiment[]
}
