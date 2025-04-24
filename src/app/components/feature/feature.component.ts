import { Component, computed, input, ViewEncapsulation } from '@angular/core';

import {
  TitleComponent as Title,
  ParagraphComponent as Paragraph,
  SVGIconComponent as SVGIcon
} from "@beexy/ngx-components"

import {
  Feature
} from "../../data/feature.data"

@Component({
  selector: 'app-feature',
  imports: [
    Title,
    Paragraph,
    SVGIcon
  ],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FeatureComponent {
  featureData = input.required<Feature>();

  svgIconName = computed( () => ( this.featureData().svgIcon ) );
  title = computed( () => ( this.featureData().title ) );
  text = computed( () => ( this.featureData().text ) );
}
