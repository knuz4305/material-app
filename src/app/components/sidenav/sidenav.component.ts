import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {name: 'Inicio', route: '', icon: 'home'},
    {name: 'Búsqueda', route: 'busqueda', icon: 'search'},
    {name: 'Captura', route: 'captura', icon: 'group'}
  ];

  shouldRun = true;

  // private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
