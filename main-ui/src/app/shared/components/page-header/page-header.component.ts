import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';
import { of, Observable } from 'rxjs';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out')),     
    ]),
  ]
})
export class PageHeaderComponent implements OnInit {
  public toggleSecondryBar: boolean = false;
  @ViewChild('searchBox', { static: false}) public searchBoxRef: ElementRef;
  public search: boolean = false;
  value = 'Clear me';
  display: boolean = false;
  items: MenuItem[];
  menuLink: any[] = [];
  items3: MenuItem[];
  public menuItems: MenuItem[];
  cartCount: number;
  public shoppingCartItems$: Observable<any[]> = of([]);
  public shoppingCartItems: any[] = [];
  public userName: string;
  public name: string;
  constructor(
    private cartService: CartBehavourService,
    private cartItemService: CartService,
    private localStorageService: LocalStorageService,
    private router: Router
    ) {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe((_) => {
      this.shoppingCartItems = _;
      this.cartCount = this.shoppingCartItems.length;
    });
  }

  public ngOnInit(): void {
      this.userName = localStorage.getItem('email');
      this.name = localStorage.getItem('userName');
      this.cartItemService.getCartItems(this.userName).subscribe(
        (res: Cart[]) => {
          if(res) {
            res.forEach((cart) => {
              this.cartService.addToCart(cart);
            })          
          }
      });
      this.items = [
        {label: 'Profile', command : (event) => {
            this.router.navigate(['/profiles'])
        }},
        {label: 'Orders', command: (event) => {
            this.router.navigate(['/profiles/orders']);
        }},
        {label: 'Logout',command: (event) => {
            this.localStorageService.removeItem("userAccessToken");
            this.localStorageService.removeItem('userName');
            this.localStorageService.removeItem('email');
            this.localStorageService.removeItem('userRole');
            this.router.navigate(['login']);
        }}
    ];
    this.items3 = [
        {label: 'Login', command : (event) => {
            this.router.navigate(['login'])
        }},
    ];
    this.menuItems = [{
      label: 'Cakes',
      items: [{
          label: 'Vanillah Cake',
          command: () => {
              this.display = false;
              this.router.navigate(["cakes"]);
          }
      },
      {
          label: 'Butter Scothc Cake',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Black Forest Cake',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'White Forest Cake',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Chocoloate Cake',
          command: () => {
              this.delete();
          }
      },
      {
          label: ' Pine Apple Cake',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
          label: 'Sweets',
          items: [{
              label: 'Rasmalai',
              command: () => {
                this.display = false;
                this.router.navigate(["sweets"]);
              },
          },
          {
              label: 'Khurma',
              routerLink: '/fileupload'
          },
          {
            label: 'Gulab Jamun',
            routerLink: '/fileupload'
          },
          {
            label: 'Rasgulla',
            routerLink: '/fileupload'
          },
          {
            label: 'Malai Kesar',
            routerLink: '/fileupload'
          },
          {
            label: 'Malai Bhog',
            routerLink: '/fileupload'
          },
          {
            label: 'Malai Pudi',
            routerLink: '/fileupload'
          }
      ]}
    ];
    
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  public navigateToLink = (path: string) => {
      this.display = false;
      this.router.navigateByUrl(path);
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
  }
  public logout = () => {
    this.display = false;
    this.localStorageService.removeItem("userAccessToken");
    this.localStorageService.removeItem('userName');
    this.localStorageService.removeItem('email');
    this.localStorageService.removeItem('userRole');
    window.location.reload();
    this.router.navigate(['login']);
  }
  public navigateTo = (path: string) => {
      this.router.navigate([path]);
      this.display = false;
  }
  menuState:string = 'out';
  public login = () => {
      this.display = false;
      this.router.navigate(["login"]);
  }
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
