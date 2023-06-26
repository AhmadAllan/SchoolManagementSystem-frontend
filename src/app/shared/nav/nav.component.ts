import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { faBars, faCaretDown, faUser, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faBars = faBars;
  faUser = faUser;
  faCaretDown = faCaretDown;
  faMessage = faMessage;
  faRightFromBracket = faRightFromBracket;
  isVisibleNavSlider: boolean = false
  isVisiableProfile: boolean = false
  activeModule: string;
  activeNav: string;

  constructor(private router: Router) {
    this.activeModule = '';
    this.activeNav = '';
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.activeNav = url;
        this.setActiveModule(url);
      }
    });
  }

  setActiveModule(url: string): void {
    if (url.includes('/admin/')) {
      this.activeModule = 'admin';
    } else if (url.includes('/parent/')) {
      this.activeModule = 'parent';
    } else if (url.includes('/student/')) {
      this.activeModule = 'student';
    } else if (url.includes('/teacher/')) {
      this.activeModule = 'teacher';
    } else {
      this.activeModule = '';
    }
  }

  ngAfterContentChecked() {
    this.activeNav = this.router.url.toString();
  }

  onClick(){
    this.isVisibleNavSlider = !this.isVisibleNavSlider;
  }

  onPress() {
    this.isVisiableProfile = !this.isVisiableProfile;
  }
}
