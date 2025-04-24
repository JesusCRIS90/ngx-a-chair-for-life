import { Component, signal, ViewEncapsulation } from '@angular/core';

import {
  GridLayout1DComponent as Grid1D,
} from "@beexy/ngx-layouts"

import {
  TitleComponent as Title,
  ParagraphComponent as Paragraph,
  ImageComponent as Image,
  TYPOGRAPHY_LEVEL as TYPO_LVL
} from "@beexy/ngx-components"

const img_url = "assets/hero.jpg"

@Component({
  selector: 'sec-header',
  imports: [
    Grid1D,
    Title,
    Paragraph,
    Image
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderSection {
  TYPO_LVL = TYPO_LVL;
  img_src = signal<string>( img_url );
}
