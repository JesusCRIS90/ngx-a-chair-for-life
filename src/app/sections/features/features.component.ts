import { Component, signal, ViewEncapsulation } from '@angular/core';

import {
  TitleComponent as Title,
  TYPOGRAPHY_LEVEL as TYPO_LVL
} from "@beexy/ngx-components"

import {
  GridLayout1DComponent as Grid1D
} from "@beexy/ngx-layouts"

import { FeatureComponent } from "../../components/feature/feature.component"

import { featureData, Feature } from "../../data/feature.data"

@Component({
  selector: 'sec-features',
  imports: [Grid1D, Title, FeatureComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FeaturesSection {
  TYPO_LVL = TYPO_LVL;

  featuresList = signal<Feature[]>( featureData );
}
