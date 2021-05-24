import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { ProductType } from '../../models/product-type';
import { CakesService } from '../../services/cakes.service';

@Component({
  selector: 'app-add-new-product-type',
  templateUrl: './add-new-product-type.component.html',
  styleUrls: ['./add-new-product-type.component.scss']
})
export class AddNewProductTypeComponent implements OnInit {
  public uploadedImageArray: any[] = [];
  public productType: ProductType = new ProductType();
  public productTypes: FormGroup;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private cakeService: CakesService,
  ) {
    this.productTypes = formBuilder.group({
      name: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      status: new FormControl(true, Validators.required),
      desc: new FormControl('', Validators.required)
    })
  }

  public ngOnInit(): void {
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

  public submitProduct = (event: any) => {
    this.productType.name = event.name;
    this.productType.status = event.status;
    this.productType.desc = event.desc;
    this.productType.imgUrl = this.uploadedImageArray[0];
    this.cakeService.addProductType(this.productType).subscribe((data: ProductType) => {
       console.log(data);
    })
  } 
}
