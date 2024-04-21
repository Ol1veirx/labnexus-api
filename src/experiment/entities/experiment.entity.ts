import { ExperimentalData } from "src/experimental-data/entities/experimental-data.entity";

export class Experiment {
    id: string;
    title: string;
    description: string;
    experimentalData: ExperimentalData;
    result: string;
    additionalAnalysis: string;
    userId: string;
}
