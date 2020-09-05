import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';
import { of, Observable } from 'rxjs';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { Cart } from 'src/app/module/cart/components/models/cart';

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
  items2: MenuItem[];
  cartCount: number;
  public shoppingCartItems$: Observable<any[]> = of([]);
  public shoppingCartItems: any[] = [];

  constructor(
    private cartService: CartBehavourService,
    private cartItemService: CartService
    ) {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe((_) => {
      this.shoppingCartItems = _;
      this.cartCount = this.shoppingCartItems.length;
    });
  }

  public ngOnInit(): void {
      this.cartItemService.getCartItems().subscribe(
        (res: Cart[]) => {
          if(res) {
            res.forEach((cart) => {
              this.cartService.addToCart(cart);
            })          
          }
      });
      this.items = [
        {label: 'New', icon: 'pi pi-fw pi-plus',},
        {label: 'Open', icon: 'pi pi-fw pi-download'},
        {label: 'Logout', icon: 'pi pi-fw pi-refresh',routerLink: '/logout'}
    ];
    this.items2 = [{
      label: 'Cakes Corner',
      items: [{
          label: 'Butter Scotch Cake',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'White Forest Cake',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Black Forest Cake',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Vanilla Cake',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
      label: 'Sweets Corner',
      items: [{
          label: 'Rasgulla',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Gulab Jamun',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Gulab Jamun',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Ras Malai',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Laddu',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      {
          label: 'Jalebi',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
      label: 'Snaks Corner',
      items: [{
          label: 'Bhujiya Spaceial',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
          label: 'Navigate',
          items: [{
              label: 'Angular Website',
              icon: 'pi pi-external-link',
              url: 'http://angular.io'
          },
          {
              label: 'Router',
              icon: 'pi pi-upload',
              routerLink: '/fileupload'
          }
      ]}
  ];
    
  }
  
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
  }
  menuState:string = 'out';
 
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
