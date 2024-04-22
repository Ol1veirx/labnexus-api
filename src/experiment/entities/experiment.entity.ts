import { ExperimentalData } from "@prisma/client";

export class Experiment {
    id: string;
    title: string;
    description: string;
    experimentalDataId: string;
    result: string;
    additionalAnalysis: string;
    userId: string;
}
