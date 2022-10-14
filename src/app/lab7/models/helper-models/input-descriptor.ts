import {FormControl, Validators} from "@angular/forms";

export interface InputDescriptor {
  InputId: string;
  Label: string;
  InputType: InputType;
  Control: FormControl,
}

type InputType = "text" | "number" | "email";

export const descriptors: InputDescriptor[] = [
  {
    InputId: "fullName",
    Label: "Full name",
    InputType: "text",
    Control: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
  },
  {
    InputId: "email",
    Label: "Email",
    InputType: "email",
    Control: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
  },
  {
    InputId: "age",
    Label: "Age",
    InputType: "number",
    Control: new FormControl('', [
      Validators.required
    ]),
  },
  {
    InputId: "address",
    Label: "Address",
    InputType: "text",
    Control: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  },
];


