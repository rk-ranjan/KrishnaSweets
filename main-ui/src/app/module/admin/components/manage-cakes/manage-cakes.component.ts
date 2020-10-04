import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { ListCake } from 'src/app/module/cakes/models/list-cake';
import { ShowCakesService } from 'src/app/module/cakes/services/show-cakes.service';
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
 
    public product2: ListCake[] = [] ;
    public filterCakeList: ListCake[] = [];
    public loading: boolean = true;
    public filterBy: string;
    clonedProducts: { [s: string]: ListCake; } = {};
    public uploadedFiles: any[] = [];
    imageUpload = false;

    constructor(
        private activatedRout: ActivatedRoute,
        private showCakesService: ShowCakesService,
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
    }
    public initCakeData = () => {
        this.showCakesService.getAllCakes().subscribe(
        (response: ListCake[]) => {
            this.loading = false;
            this.filterCakeList = response;
            this.filterCakes(); 
        });
    }
    public filterCakes = () => {
        if (this.filterBy !== undefined) {
        this.product2 = this.filterCakeList.filter((cake) => cake.flavour.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase())  > -1);
        } else {
        this.product2 = this.filterCakeList;
        }  
        console.log(this.product2);
    }

    onRowEditInit(product: ListCake) {
        this.clonedProducts[product['_id']] = {...product};
    }

    onRowEditSave(product: ListCake) {
        if (product['_id'] != undefined) {
            this.updateProduct(product);
            delete this.clonedProducts[product['_id']];
            this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
        }  
        else {
            this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
        }
    }

    updateProduct(product : ListCake){
        console.log(product);
        this.showCakesService.updateProduct(product).subscribe(
        (response: ListCake) => {
            this.loading = false;
            this.filterCakes(); 
        });
    }

    onRowEditCancel(product: ListCake, index: number) {
        this.product2[index] = this.clonedProducts[product['_id']];
        delete this.product2[product['_id']];
    }

    public onUpload = (event: any, product : ListCake) => {
        this.imageUpload = false;
        this.messageService.add({severity:'info', summary: 'Start', detail: 'Upload started'});
        for(let file of event.files) {
            this.uploadedFiles.push(file); 
        }  
        let formData: any = new FormData();
        for(var i =0; i< this.uploadedFiles.length; i++) {       
           formData.append("image", this.uploadedFiles[i], this.uploadedFiles[i]['name']);
        }
        formData.append("productItemId", product['_id']);
        this.cakeService.addProductImage(formData).subscribe(
          (response: any) => {
            if(response) {                
              this.messageService.add({severity:'success', summary: 'Success', detail: 'Uploaded'});
            }
        })   
    }

    addImage(){
        this.imageUpload = true;
    }

    deleteImage(product : ListCake){
        this.showCakesService.deleteImageById(product['_id']).subscribe(
        (response: ListCake) => {
            this.loading = false;
            this.filterCakes(); 
        });
    }

    deleteProduct(product : ListCake){
        this.showCakesService.deleteProductById(product['_id']).subscribe(
        (response: ListCake) => {
            this.loading = false;
            this.filterCakes(); 
        });
    }

}
