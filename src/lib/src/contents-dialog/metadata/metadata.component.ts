import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import { MimeViewerIntl } from './../../core/intl/viewer-intl';
import { IiifManifestService } from './../../core/iiif-manifest-service/iiif-manifest-service';
import { Manifest } from './../../core/models/manifest';

@Component({
  selector: 'mime-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetadataComponent implements OnInit, OnDestroy {
  public manifest: Manifest;
  private destroyed: Subject<void> = new Subject();

  constructor(
    public intl: MimeViewerIntl,
    private changeDetectorRef: ChangeDetectorRef,
    private iiifManifestService: IiifManifestService) { }

  ngOnInit() {
    this.iiifManifestService
      .currentManifest
      .pipe(
        takeUntil(this.destroyed)
      )
      .subscribe((manifest: Manifest) => {
        this.manifest = manifest;
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
