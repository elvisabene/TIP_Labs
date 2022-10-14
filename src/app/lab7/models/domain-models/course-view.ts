import {CheckItem} from "../helper-models/check-item";
import {SelectionList} from "../helper-models/selection-list";
import {Language} from "./language";
import {LearnDuration} from "./learn-duration";
import {ReportingType} from "./reporting-type";

export class CourseView {

  public Cost?: number;

  constructor(
    public Id: number,
    public Name: CheckItem<string>,
    public Durations: SelectionList<LearnDuration>,
    public Languages: SelectionList<Language>,
    public ReportingTypes: SelectionList<ReportingType>,
    public BaseCost: number,
  ) {
    this.Cost = 0;
  }

  public static recalculateCost(course: CourseView): void {

    if (!course.Name?.IsChecked) {

      course.Cost = 0;

      return;
    }

    const selectedDuration = course.Durations.Items[course.Durations.SelectedIndex];
    const selectedLanguages = course.Languages.Items[course.Languages.SelectedIndex];
    const selectedReportType = course.ReportingTypes.Items[course.ReportingTypes.SelectedIndex];

    course.Cost = course.BaseCost + selectedDuration.Cost + selectedLanguages.Cost + selectedReportType.Cost;
  };
}

export const courses: CourseView[] = [
  {
    Id: 1,
    Name: {
      Value: "Informatics",
      IsChecked: false,
    },
    Durations: {
      Items: [
        {
          Value: 32,
          Cost: 20,
        },
        {
          Value: 64,
          Cost: 35,
        },
        {
          Value: 128,
          Cost: 65,
        }
      ],
      SelectedIndex: 0,
    },
    Languages: {
      Items: [
        {
          Name: "Russian",
          Cost: 20,
        },
        {
          Name: "English",
          Cost: 30,
        }
      ],
      SelectedIndex: 0,
    },
    ReportingTypes: {
      Items: [
        {
          Value: "Exam",
          Cost: 15,
        },
        {
          Value: "Test",
          Cost: 10,
        }
      ],
      SelectedIndex: 0,
    },
    BaseCost: 10,
  },
  {
    Id: 2,
    Name: {
      Value: "Data bases",
      IsChecked: false,
    },
    Durations: {
      Items: [
        {
          Value: 32,
          Cost: 20,
        },
        {
          Value: 64,
          Cost: 35,
        },
        {
          Value: 128,
          Cost: 65,
        }
      ],
      SelectedIndex: 0,
    },
    Languages: {
      Items: [
        {
          Name: "Russian",
          Cost: 20,
        },
        {
          Name: "English",
          Cost: 30,
        }
      ],
      SelectedIndex: 0,
    },
    ReportingTypes: {
      Items: [
        {
          Value: "Exam",
          Cost: 15,
        },
        {
          Value: "Test",
          Cost: 10,
        }
      ],
      SelectedIndex: 0,
    },
    BaseCost: 15,
  },
  {
    Id: 3,
    Name: {
      Value: "Computer networks",
      IsChecked: false,
    },
    Durations: {
      Items: [
        {
          Value: 32,
          Cost: 22,
        },
        {
          Value: 64,
          Cost: 36,
        },
        {
          Value: 128,
          Cost: 68,
        }
      ],
      SelectedIndex: 0,
    },
    Languages: {
      Items: [
        {
          Name: "Russian",
          Cost: 23,
        },
        {
          Name: "English",
          Cost: 31,
        }
      ],
      SelectedIndex: 0,
    },
    ReportingTypes: {
      Items: [
        {
          Value: "Exam",
          Cost: 16,
        },
        {
          Value: "Test",
          Cost: 12,
        }
      ],
      SelectedIndex: 0,
    },
    BaseCost: 18,
  },
  {
    Id: 4,
    Name: {
      Value: "Logic",
      IsChecked: false,
    },
    Durations: {
      Items: [
        {
          Value: 32,
          Cost: 26,
        },
        {
          Value: 64,
          Cost: 50,
        },
        {
          Value: 128,
          Cost: 94,
        }
      ],
      SelectedIndex: 0,
    },
    Languages: {
      Items: [
        {
          Name: "Russian",
          Cost: 34,
        },
        {
          Name: "English",
          Cost: 42,
        }
      ],
      SelectedIndex: 0,
    },
    ReportingTypes: {
      Items: [
        {
          Value: "Exam",
          Cost: 18,
        },
        {
          Value: "Test",
          Cost: 11,
        }
      ],
      SelectedIndex: 0,
    },
    BaseCost: 20,
  }
]
