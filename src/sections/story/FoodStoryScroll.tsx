import React from 'react';
import { SectionACravingBegins } from './SectionACravingBegins';
import { SectionBMadeForCravings } from './SectionBMadeForCravings';
import { SectionCFlavourContinues } from './SectionCFlavourContinues';

export interface FoodStoryScrollProps {
  onExploreMenu: () => void;
  onDiscoverCafe: () => void;
}

export const FoodStoryScroll: React.FC<FoodStoryScrollProps> = ({
  onExploreMenu,
  onDiscoverCafe,
}) => {
  return (
    <div id="story-experience" className="relative">
      {/* Section A: The Craving Begins */}
      <SectionACravingBegins />

      {/* Section B: Made for Your Cravings */}
      <SectionBMadeForCravings />

      {/* Section C: The Flavour Continues */}
      <SectionCFlavourContinues
        onExploreMenu={onExploreMenu}
        onDiscoverCafe={onDiscoverCafe}
      />
    </div>
  );
};
