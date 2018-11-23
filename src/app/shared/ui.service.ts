import { Subject } from 'rxjs';

export class UIService {
    loadingStatusChanged = new Subject<boolean>();
}
