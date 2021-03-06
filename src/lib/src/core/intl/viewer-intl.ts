import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MimeViewerIntl {
  changes: Subject<void> = new Subject<void>();

  closeLabel = 'Close';
  attributionLabel = 'Attribution';
  contentsLabel = 'Contents';
  twoPageViewLabel = 'Two page display';
  singlePageViewLabel = 'Single page display';
  metadataLabel = 'Metadata';
  licenseLabel = 'License';
  tocLabel = 'Table of Contents';
  fullScreenLabel = 'Full screen';
  exitFullScreenLabel = 'Exit full screen';
  zoomInLabel = 'Zoom in';
  zoomOutLabel = 'Zoom out';
  previousPageLabel = 'Previous Page';
  nextPageLabel = 'Next Page';
  homeLabel = 'Go Home';
  searchLabel = 'Search';
  clearSearchLabel = 'Clear';
  previousHitLabel = 'Previous Hit';
  nextHitLabel = 'Next Hit';
  goToPageLabel = 'Go to page';
  enterPageNumber = 'Enter page number';

  // ERRORS
  somethingHasGoneWrongLabel = 'Oh dear, something has gone terribly wrong...';
  manifestUriMissingLabel = 'ManifestUri is missing';
  manifestNotValidLabel = 'Manifest is not valid';
  pageDoesNotExists = 'Sorry, that page does not exist';

  noResultsFoundLabel = (q: string) => {
    return `No results found for <em class="current-search">${q}</em>`;
  }

  resultsFoundLabel = (numberOfHits: number, q: string) => {
    return `${numberOfHits} results found for <em class="current-search">${q}</em>`;
  }

  currentHitLabel = (currentHit: number, numberOfHits: number) => {
    return `${currentHit} of ${numberOfHits} hits`;
  }

}
