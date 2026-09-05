import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItem } from '@hau/shared/component/breadcrumb/breadcrumb.component';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { IonContent, IonIcon, NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline, createOutline, ellipsisHorizontalOutline,
  pinOutline, shareOutline, trashOutline,
  constructOutline, mapOutline, waterOutline, carOutline,
} from 'ionicons/icons';
import { generateHTML } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import TiptapImage from '@tiptap/extension-image';
import TiptapLink from '@tiptap/extension-link';
import { BlogEntryDto, BlogImageDto } from '@hau/autogenapi/models';
import { BlogFacade } from '@hau/features/blog/state/blog.facade';
import {
  VehicleEntryCategory, VEHICLE_ENTRY_CATEGORY_LABELS,
} from '@hau/features/blog/models/blog.model';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-blog-entry-view',
  templateUrl: 'blog-entry-view.component.html',
  styleUrls: ['./blog-entry-view.component.scss'],
  imports: [IonContent, IonIcon, DatePipe, DecimalPipe, TranslocoPipe, BreadcrumbComponent, ImageUrlPipe],
})
export class BlogEntryViewComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  readonly VEHICLE_ENTRY_CATEGORY_LABELS = VEHICLE_ENTRY_CATEGORY_LABELS;

  entry: BlogEntryDto | null | undefined;
  showMoreMenu = false;
  renderedHtml = '';

  @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

  private _viewActive = false;

  get categoryLabel(): string {
    return this._transloco.translate(this.entry?.category === 'VEHICLE' ? 'blog.tabs.vehicle' : 'blog.tabs.personal');
  }

  get contentParagraphs(): string[] {
    return (this.entry?.content ?? '').split('\n\n').filter(Boolean);
  }

  get galleryImages(): BlogImageDto[] {
    // Exclude the cover photo — it's already shown separately above (entry-cover).
    const cover = this.entry?.cover_image_url;
    return (this.entry?.images ?? []).filter(img => img.url !== cover);
  }

  private _renderContent(entry: BlogEntryDto): void {
    if (entry.content_json) {
      try {
        this.renderedHtml = generateHTML(entry.content_json as any, [
          StarterKit, TiptapImage, TiptapLink,
        ]);
        return;
      } catch {
        // fall through to plain text
      }
    }
    // Legacy plain-text fallback
    this.renderedHtml = (entry.content ?? '')
      .split('\n\n')
      .filter(Boolean)
      .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private blogFacade: BlogFacade,
    private readonly _transloco: TranslocoService,
    private readonly _headerActions: HeaderActionsService,
  ) {
    addIcons({
      arrowBackOutline, createOutline, ellipsisHorizontalOutline,
      pinOutline, shareOutline, trashOutline,
      constructOutline, mapOutline, waterOutline, carOutline,
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogFacade.loadEntry(id);
    this.blogFacade.entry$.pipe(untilDestroyed(this)).subscribe(e => {
      this.entry = e;
      if (e) this._renderContent(e);
      this._pushHeaderTitle();
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._viewActive = true;
    this._headerActions.set(this._headerActionsTpl);
    this._pushHeaderTitle();
  }

  ionViewWillLeave(): void {
    this._viewActive = false;
    this._headerActions.clear();
    this._headerActions.clearTitle();
  }

  private _pushHeaderTitle(): void {
    if (!this._viewActive) return;
    this._headerActions.setTitle(this.entry?.title ?? null);
  }

  get breadcrumbItems(): BreadcrumbItem[] {
    return [
      { label: this._transloco.translate('blog.title'), action: () => this.navigateToBlog() },
      { label: this.categoryLabel, action: () => this.navigateToBlog() },
      { label: this.entry?.title ?? '' },
    ];
  }

  goBack(): void {
    void this.navCtrl.navigateBack('/main/blog', { animated: false });
  }

  navigateToBlog(): void {
    void this.navCtrl.navigateBack('/main/blog', { animated: false });
  }

  editEntry(): void {
    if (!this.entry) return;
    void this.navCtrl.navigateForward(`/main/blog/${this.entry.id}/edit`, { animated: false });
  }

  toggleMoreMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.showMoreMenu = !this.showMoreMenu;
  }

  closeMoreMenu(): void {
    this.showMoreMenu = false;
  }

  vehicleCategoryIcon(cat: VehicleEntryCategory | null | undefined): string {
    const map: Record<VehicleEntryCategory, string> = {
      REPAIR:        'construct-outline',
      SERVICE_VISIT: 'construct-outline',
      TRIP:          'map-outline',
      FUEL:          'water-outline',
      UPGRADE:       'flash-outline',
      INSPECTION:    'shield-checkmark-outline',
      BREAKDOWN:     'alert-circle-outline',
      OTHER:         'car-outline',
    };
    return cat ? map[cat] : 'car-outline';
  }
}
