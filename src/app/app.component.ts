import { Component, OnInit } from '@angular/core';

import { loadSVGIcons } from "@beexy/tools"
import { FixedWidthLayoutComponent } from "@beexy/ngx-layouts"

import {
  HeaderSection,
  FeaturesSection,
  TestimonialsSection,
  ChairsSection,
  FooterSection,
} from "./sections"

// const PATH = 'icons-sheet.svg'
const PATH = 'https://raw.githubusercontent.com/JesusCRIS90/jc-risquez-cdn/refs/heads/main/a-chair-for-life/icons-sheet.svg'

@Component({
  selector: 'app-root',
  imports: [
    HeaderSection,
    FeaturesSection,
    TestimonialsSection,
    ChairsSection,
    FooterSection,
    FixedWidthLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'A Chair for Life';


  ngOnInit(): void {
    loadSVGIcons(PATH);
  }
}

