import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-picture-menu',
  templateUrl: './picture-menu.component.html',
  styleUrls: ['./picture-menu.component.css'],
  animations: [
    trigger("scale", [
      state("hidden", style({
        width: '0',
        height: '0'
      })),
      state("onScreen", style({
        width: '700px',
        height: '400px'
      })),
      transition("hidden <=> onScreen", [
        animate("1s")
      ]),
    ])
  ]
})
export class PictureMenuComponent {

  public selectedPicture: Picture | null;

  public pictures: Picture[] = [
    {
      id: 1,
      author: "Leonardo da Vinci",
      pictureSource: "assets/pics/leonardoDaVinci.jpg",
      state: "hidden",
      stateTransient: false,
    },
    {
      id: 2,
      author: "Michael Angelo",
      pictureSource: "assets/pics/palaceOfVersailles.jpg",
      state: "hidden",
      stateTransient: false,
    },
    {
      id: 3,
      author: "Van Gogh",
      pictureSource: "assets/pics/starNight.jpg",
      state: "hidden",
      stateTransient: false,
    },
    {
      id: 4,
      author: "Salvador Dali",
      pictureSource: "assets/pics/persistenceOfMemory.jpg",
      state: "hidden",
      stateTransient: false,
    },
    {
      id: 5,
      author: "Ivan Shishkin",
      pictureSource: "assets/pics/bears.jfif",
      state: "hidden",
      stateTransient: false,
    },
  ];

  constructor() { }

  selectPicture(picture: Picture): void {

    if (this.selectedPicture === picture) {
      this.selectedPicture.state = "hidden";

      setTimeout(() => {
        this.selectedPicture = null;
      }, 1010)

      return;
    }

    if (this.selectedPicture) {
      this.selectedPicture.state = "hidden";
      this.selectedPicture.stateTransient = true;

      const previousPicture = this.selectedPicture;

      setTimeout(() => {
        previousPicture.stateTransient = false;
      }, 1010)
    }

    this.selectedPicture = picture;

    setTimeout(() => {
      if (this.selectedPicture) {
        this.selectedPicture.state = "onScreen";
      }
    })
  }

}

interface Picture {
  id: number;
  author: string;
  state: "hidden" | "onScreen";
  pictureSource: string;
  stateTransient: boolean;
}
