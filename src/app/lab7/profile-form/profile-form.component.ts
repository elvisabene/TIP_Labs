import { Component, OnInit } from '@angular/core';
import {descriptors, InputDescriptor} from "../models/helper-models/input-descriptor";
import { FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  public inputDescriptors: InputDescriptor[] = descriptors;

  constructor() {
  }

  ngOnInit(): void {
  }

}
