import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddCake } from '../../models/add-cake';
import { Category } from '../../models/category';
import { ProductType } from '../../models/product-type';
import { CakesService } from '../../services/cakes.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [MessageService]
})
export class AddProductComponent implements OnInit {

  public productForm: FormGroup;
  public uploadedFiles: any[] = [];
  public cake: AddCake = new AddCake();
  public productType: string = '1';
  public uploadImage: any;
  public uploadedImageArray: any[] = [];
  public data: any
  public productTypes: ProductType[];
  public category: Category[] = [];
  public filteredCategory: Category[] = [];
  public sellingPrice: number;
  public qtyArray: any[] = [
    "KG", "Plate", "Box", "Piece", "Pound"
  ];
  public selected: string;;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private cakeService: CakesService,
    private messageService: MessageService
  ) {
    this.productForm = formBuilder.group({
      pid: new FormControl('null', Validators.required),
      category: new FormControl('null', Validators.required),
      name: new FormControl('', Validators.required),
      unitPrice: new FormControl('', Validators.required),
      discount: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      qty: new FormControl('', Validators.required)
    })
  }

  public ngOnInit() {
    this.cakeService.getProductTypes().subscribe((data: ProductType[]) => {
      this.productTypes = data;
    });
    this.cakeService.getAllCategory().subscribe((data: any) => {
       this.category = data;
    });
    this.selected = this.qtyArray[4];
    this.cakeService.getAllProduct().subscribe((data: AddCake[]) => {
       console.log(data);
    });
  }

  public submitProduct = (event: any) => {
      this.messageService.add({severity:'info', summary:'Progress', detail:'Uploading details'});
      this.cake.productId = event.pid;
      this.cake.itemName = event.name;
      this.cake.unitPrice = event.unitPrice;
      this.cake.discountPercentage = event.discount;
      this.cake.descriptions = event.desc;
      this.cake.categoryId = event.category;
      this.cake.imageUrls = this.uploadedImageArray;
      this.cake.qty = event.qty + " Per " + this.selected;
      this.cakeService.addCakeItemDetails(this.cake).subscribe(
        (data: any) => {
          if(data) {
            this.data = data;
            console.log(data);
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Item Added'});
          }
      });

  }

  public updateFile = (event: any) => {
    if (event.target.files[0].name) {
      const formData: FormData = new FormData();
      formData.append('file', event.target.files[0]);
      this.cakeService.uploadImageOnServer(formData).subscribe((res) => {
        this.uploadedImageArray.push(res);
      })
    }
  }

  public onChangeProductType = (event: string) => {
      this.filteredCategory = this.category.filter((cat) => cat.pid = event);
  }
  
  public ngOnDestroy() {
    // unsubscribe to avoid memory leakage.
  }

  public onKey = (event: any) => {
     console.log(event.target.value);
     this.sellingPrice = this.productForm.controls.unitPrice.value - (this.productForm.controls.unitPrice.value * event.target.value)/100;
  }

}
