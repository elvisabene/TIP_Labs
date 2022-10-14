import {Paid} from "./paid-item";

export interface ReportingType extends Paid {
  Value: "Exam" | "Test";
}
