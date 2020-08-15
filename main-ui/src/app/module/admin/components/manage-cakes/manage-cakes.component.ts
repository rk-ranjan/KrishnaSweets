import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AddCake } from '../../models/add-cake';
import { CakesService } from '../../services/cakes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manage-cakes',
  templateUrl: './manage-cakes.component.html',
  styleUrls: ['./manage-cakes.component.scss'],
  providers: [MessageService]
})
export class ManageCakesComponent implements OnInit {
  public productForm: FormGroup;
  public uploadedFiles: any[] = [];
  public cake: AddCake = new AddCake();
  public firstStep: boolean = true;
  public data: any
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private cakeService: CakesService,
    private messageService: MessageService
  ) {
    this.productForm = formBuilder.group({
      productId: new FormControl('', Validators.required),
      cakeName: new FormControl('', Validators.required),
      unitPrice: new FormControl('', Validators.required),
      eggless: new FormControl(true, Validators.required),
      flavour: new FormControl('', Validators.required),
      discount: new FormControl('', Validators.required),
      breadUsed: new FormControl('', Validators.required),
      breadCreame: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required)
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
      this.cake.unitPrice = this.productForm.controls.unitPrice.value;
      this.cake.eggless = this.productForm.controls.eggless.value;
      this.cake.flavour = this.productForm.controls.flavour.value;
      this.cake.discountPercent = this.productForm.controls.discount.value;
      this.cake.bread = this.productForm.controls.breadUsed.value;
      this.cake.creamUsed = this.productForm.controls.breadCreame.value;
      this.cake.descriptions = this.productForm.controls.desc.value;
      this.cakeService.addCakeItemDetails(this.cake).subscribe(
        (data: any) => {
          if(data) {
            this.data = data;
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Item Added'});
            this.firstStep = false;
          }
      });

  }
  public ngOnDestroy() {
    // unsubscribe to avoid memory leakage.
  }
}
