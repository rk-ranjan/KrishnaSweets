import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';
import { of, Observable } from 'rxjs';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';
import { UserBehaviorService } from 'src/app/core/services/user-behavior.service';
import { User } from 'src/app/core/model/user';

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
  public user: User = new User();
  public cakesMenu: any[] = [];
  public sweetsMenu: any[] = [];
  constructor(
    private cartService: CartBehavourService,
    private cartItemService: CartService,
    private cartBehaviorService: CartBehavourService,
    private localStorageService: LocalStorageService,
    private userBehaviorService: UserBehaviorService,
    private router: Router
    ) {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe((_) => {
      this.shoppingCartItems = _;
      this.cartCount = this.shoppingCartItems.length;
    });
    this.userBehaviorService.data.subscribe(data => {
      //do what ever needs doing when data changes
      this.user = data;
    })
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
            this.logout();
        }}
    ];
    this.items3 = [
        {label: 'Login', command : (event) => {
            this.router.navigate(['login'])
        }},
    ];
    this.cakesMenu = [
      {
        name: 'All Cakes',
        path: '/cakes'
      },
      {
        name: 'Butter Scotch Cake',
        path: '/cakes?type=butter scotch'
      },
      {
        name: 'Black Forest Cake',
        path: '/cakes?type=black forest'
      },
      {
        name: 'Vanilla Cake',
        path: '/cakes?type=vanillah'
      },
      {
        name: 'Chocolate Cream Cake',
        path: '/cakes?type=chocolate cream'
      },
      {
        name: 'Designer Cake',
        path: '/cakes?type=designer cake'
      },
      {
        name: 'Strawberry Cake',
        path: '/cakes?type=strawberry cake'
      },
      {
        name: 'Pine Apple Cake',
        path: '/cakes?type=pine apple'
      },
      {
        name: 'Photo Cake',
        path: '/cakes?type=photo cake'
      },
      {
        name: 'Others',
        path: '/cakes?type=others'
      }
    ];
    this.sweetsMenu = [
      {
        name: 'All Sweets',
        path: '/sweets'
      },
      {
        name: 'Gulab Jamun',
        path: '/sweets?type=gulab jamun'
      },
      {
        name: 'Dry Sweets',
        path: '/sweets?type=dry sweets'
      },
      {
        name: 'Cream Sweets',
        path: '/sweets?type=cream sweets'
      },
      {
        name: 'Rasmalai',
        path: '/sweets?type=rasmalai'
      },
      {
        name: 'Khowa Barfi',
        path: '/sweets?type=khowa barfi'
      },
      {
        name: 'Kalakand',
        path: '/sweets?type=kalakand'
      },
      {
        name: 'Milk Shake',
        path: '/sweets?type=milk shake'
      },
      {
        name: 'Laddus',
        path: '/sweets?type=laddu'
      }
    ] 
  }

  public navigateToLink = (path: string) => {
      this.display = false;
      this.router.navigateByUrl(path);
  }

  public logout = () => {
    this.display = false;
    this.localStorageService.removeItem("userAccessToken");
    this.localStorageService.removeItem('userName');
    this.localStorageService.removeItem('email');
    this.localStorageService.removeItem('userRole');
    this.cartBehaviorService.emptyCart();
    this.userBehaviorService.updatedDataSelection(null);
    this.router.navigate(['login']);
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
