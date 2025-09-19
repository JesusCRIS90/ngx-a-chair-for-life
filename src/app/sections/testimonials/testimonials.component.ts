import { Component, signal, ViewEncapsulation } from '@angular/core';

import {
  TitleComponent as Title,
  ParagraphComponent as Paragraph,
  ImageComponent as Image,
  TYPOGRAPHY_LEVEL as TYPO_LVL
} from "@beexy/ngx-components"

import {
  GridLayout1DComponent as Grid1D
} from "@beexy/ngx-layouts"

// const img_url = "assets/customers.jpg"
const img_url = "https://raw.githubusercontent.com/JesusCRIS90/jc-risquez-cdn/main/a-chair-for-life/images/customers.jpg"


@Component({
  selector: 'sec-testimonials',
  imports: [Title, Paragraph, Image, Grid1D],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsSection {
  imgSrc = signal<string>( img_url );
}
