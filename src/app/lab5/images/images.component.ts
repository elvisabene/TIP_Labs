import { Component, OnInit } from '@angular/core';
import {trigger, style, state, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  animations: [
    trigger("scale", [
      state("maximized", style({
        width: '36vw',
        height: '60vh'
      })),
      state("minimized", style({
        width: '30vw',
        height: '50vh'
      })),
      transition("minimized <=> maximized", [
        animate("0.5s")
      ]),
    ])
  ]
})
export class ImagesComponent implements OnInit {

  public selectedSrc!: string;

  public readonly images: Image[] = [
    {
      source: "assets/pics/clock.jpg",
      state: "minimized",
    },
    {
      source: "assets/pics/car.jpeg",
      state: "minimized",
    },
    {
      source: "assets/pics/tree.jpg",
      state: "minimized",
    },
  ]

  public menuItems: MenuItem[] = [
    {
      name: "Home",
      isSelected: false,
    },
    {
      name: "News",
      isSelected: false,
    },
    {
      name: "Privacy",
      isSelected: false,
    },
    {
      name: "About",
      isSelected: false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public setPicture(image: Image): void {
    this.selectedSrc = image.source;
  }

  public increase(image: Image) {
    image.state = "maximized";
  }

  public decrease(image: Image) {
    image.state = "minimized";
  }

  public select(menuItem: MenuItem) {
    menuItem.isSelected = true;
  }

  public unselect(menuItem: MenuItem) {
    menuItem.isSelected = false;
  }
}

interface Image {
  source: string,
  state: "minimized" | "maximized",
}

interface MenuItem {
  name: string,
  isSelected: boolean,
}
