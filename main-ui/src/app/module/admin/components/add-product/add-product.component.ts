import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddCake } from '../../models/add-cake';
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
  public firstStep: boolean = true;
  public productType: string = '1';
  public data: any
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private cakeService: CakesService,
    private messageService: MessageService
  ) {
    this.productForm = formBuilder.group({
      productId: new FormControl('1', Validators.required),
      unit: new FormControl('', Validators.required),
      cakeName: new FormControl('', Validators.required),
      unitPrice: new FormControl('', Validators.required),
      eggless: new FormControl(true),
      flavour: new FormControl(''),
      discount: new FormControl('', Validators.required),
      breadUsed: new FormControl(''),
      breadCreame: new FormControl(''),
      desc: new FormControl('', Validators.required),
      homeItem: new FormControl(false, Validators.required)
    })
  }
  public ngOnInit() {
  }
  
  public onUpload = (event: any) => {
      this.messageService.add({severity:'info', summary: 'Start', detail: 'Upload started'});
      for(let file of event.files) {
          this.uploadedFiles.push(file); 
      }  
      let formData: any = new FormData();
      for(var i =0; i< this.uploadedFiles.length; i++) {       
         formData.append("image", this.uploadedFiles[i], this.uploadedFiles[i]['name']);
      }
      formData.append("productItemId", this.data);
      this.cakeService.addProductImage(formData).subscribe(
        (response: any) => {
          if(response) {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Uploaded'});
            this.firstStep = true;
          }
      })   
  }

  public submitProduct = () => {
      this.messageService.add({severity:'info', summary:'Progress', detail:'Uploading details'});
      this.cake.productId = this.productForm.controls.productId.value;
      this.cake.itemName = this.productForm.controls.cakeName.value;
      this.cake.unit = this.productForm.controls.unit.value;
      this.cake.unitPrice = this.productForm.controls.unitPrice.value;
      this.cake.eggless = this.productForm.controls.eggless.value;
      this.cake.flavour = this.productForm.controls.flavour.value;
      this.cake.discountPercentage = this.productForm.controls.discount.value;
      this.cake.bread = this.productForm.controls.breadUsed.value;
      this.cake.creamUsed = this.productForm.controls.breadCreame.value;
      this.cake.descriptions = this.productForm.controls.desc.value;
      this.cake.homeItem = this.productForm.controls.homeItem.value;
      this.cakeService.addCakeItemDetails(this.cake).subscribe(
        (data: any) => {
          if(data) {
            this.data = data;
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Item Added'});
            this.firstStep = false;
          }
      });

  }
  public onChangeProductType = (event: any) => {
    this.productType = event.target.value;

  }
  public ngOnDestroy() {
    // unsubscribe to avoid memory leakage.
  }

}
