import { Component, input, ViewEncapsulation } from '@angular/core';

import {
  TitleComponent as Title,
  SVGIconComponent as SVGIcon,
  ImageComponent as Image,
  TYPOGRAPHY_LEVEL as TYPO_LVL
} from "@beexy/ngx-components"

import {
  ChairItem,
} from '../../data/chair.data'

@Component({
  selector: 'app-chair',
  imports: [Title, SVGIcon, Image],
  templateUrl: './chair.component.html',
  styleUrl: './chair.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ChairComponent {
  data = input.required<ChairItem>();
}
