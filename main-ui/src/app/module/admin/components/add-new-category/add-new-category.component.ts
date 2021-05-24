import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pid } from 'process';
import { Category } from '../../models/category';
import { CakesService } from '../../services/cakes.service';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit {
  public uploadedImageArray: any[] = [];
  public category: Category = new Category();
  public categoryForm: FormGroup;
  public productId: string = '';
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private cakeService: CakesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.categoryForm = formBuilder.group({
      name: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      pid: new FormControl(this.productId, Validators.required),
      desc: new FormControl('', Validators.required)
    });
    this.productId = activatedRoute.snapshot.paramMap.get("id");
    console.log(this.productId);
  }

  public ngOnInit() {

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
    this.category.name = event.name;
    this.category.desc = event.desc;
    this.category.imgUrl = this.uploadedImageArray[0];
    this.category.pid = this.productId;
    this.cakeService.addCategory(this.category).subscribe((data: Category) => {
       console.log(data);
    })
  }
}
