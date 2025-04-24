import { Component, input, ViewEncapsulation } from '@angular/core';

import {
  GridLayout1DComponent as Grid1D
} from "@beexy/ngx-layouts"

import {
  TitleComponent as Title,
} from "@beexy/ngx-components"

import {
  ChairComponent
} from "../../components/chair/chair.component"

import {
  ChairItem,
  chairData
} from '../../data/chair.data'

@Component({
  selector: 'sec-chairs',
  imports: [Grid1D, Title, ChairComponent],
  templateUrl: './chairs.component.html',
  styleUrl: './chairs.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ChairsSection {
  items =  input<ChairItem[]>( chairData );
}
