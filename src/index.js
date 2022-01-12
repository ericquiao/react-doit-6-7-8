import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderItem } from './header-item';
import { ListingItem } from './listing-item';
import { Career } from './pages/career';
import { MarketPlace } from './marketplace';
import { MarketComp } from './pages/marketplacecomponents';
import { ItemDisplay } from './pages/forsale'

ReactDOM.render(
  <>
    {/* <MarketComp /> */}
    <ItemDisplay />
  </>,

  document.querySelector('#branch')
);
