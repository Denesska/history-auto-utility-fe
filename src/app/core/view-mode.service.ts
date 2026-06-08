import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ViewMode = 'cards' | 'list';

const STORAGE_KEY = 'hau_garage_view_mode';

@Injectable({ providedIn: 'root' })
export class ViewModeService {
    private readonly _viewMode = new BehaviorSubject<ViewMode>(this.readStored());
    readonly viewMode$ = this._viewMode.asObservable();

    get viewMode(): ViewMode {
        return this._viewMode.value;
    }

    setViewMode(mode: ViewMode): void {
        this._viewMode.next(mode);
        localStorage.setItem(STORAGE_KEY, mode);
    }

    private readStored(): ViewMode {
        return (localStorage.getItem(STORAGE_KEY) as ViewMode) ?? 'cards';
    }
}
