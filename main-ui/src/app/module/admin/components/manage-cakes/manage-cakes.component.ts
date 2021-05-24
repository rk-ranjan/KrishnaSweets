import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { ListCake } from 'src/app/module/cakes/models/list-cake';
import { AddCake } from '../../models/add-cake';
import { CakesService } from '../../services/cakes.service';

@Component({
  selector: 'app-manage-cakes',
  templateUrl: './manage-cakes.component.html',
  styleUrls: ['./manage-cakes.component.scss'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `],
  providers: [MessageService]
})
export class ManageCakesComponent implements OnInit {
 
    public product2: AddCake[] = [] ;
    public filterCakeList: AddCake[] = [];
    public loading: boolean = true;
    public filterBy: string;
    public cols: any[];
    clonedProducts: { [s: string]: AddCake; } = {};
    public uploadedFiles: any[] = [];
    imageUpload = false;
    public addProduct: string = 'ADD PRODUCT';
    constructor(
        private activatedRout: ActivatedRoute,
        private messageService: MessageService,
        private cakeService: CakesService,
    ) {
        this.activatedRout.queryParams.forEach(params => {
        this.filterBy = params['type'];
        this.filterCakes();
    });
    }
    ngOnInit() {
        this.initCakeData();
        this.cols = [
            { field: 'imageUrl', header: 'Product' },
            { field: 'itemName', header: 'Name' },
            { field: 'qty', header: 'Quantity' },
            { field: 'unitPrice', header: 'Unit Price' },
            { field: 'discountPercentage', header: 'Discount'}
        ];
    }
    public initCakeData = () => {
        this.cakeService.getAllProduct().subscribe(
        (response: AddCake[]) => {
            console.log(response);
            this.loading = false;
            this.filterCakeList = response;
            this.product2 = response;
            // this.filterCakes(); 
        });
    }
    public filterCakes = () => {
        if (this.filterBy !== undefined) {
        this.product2 = this.filterCakeList.filter((cake) => cake.flavour.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase())  > -1);
        } else {
        this.product2 = this.filterCakeList;
        }  
    }

    public onRowEditInit = (product: AddCake) => {
        this.clonedProducts[product['_id']] = {...product};
    }

    public onRowDelete = (event: AddCake) => {
        this.product2 = this.product2.filter((product) => product._id !== event._id);
        this.cakeService.deleteProduct(event._id).subscribe((data) => {
            this.messageService.add({severity:'success', summary: 'Success'});  
        });
        this.initCakeData();
    }

    public onRowEditSave(product: AddCake) {
        if (product['_id'] != undefined) {
            this.updateProduct(product);
            delete this.clonedProducts[product['_id']];
            this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
        }  
        else {
            this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
        }
    }

    public updateProduct(product : AddCake){
        this.cakeService.updateProduct(product).subscribe(
        (response: AddCake) => {
            this.loading = false;
            this.initCakeData(); 
        });
    }

    onRowEditCancel(product: AddCake, index: number) {
        this.product2[index] = this.clonedProducts[product['_id']];
        delete this.product2[product['_id']];
    }

}
