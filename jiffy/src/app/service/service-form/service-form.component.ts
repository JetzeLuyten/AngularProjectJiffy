import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from '../../services/service.services';
import { ServiceTypeService } from '../../services/serviceType.service';
import { ServiceType } from '../../serviceType';
import { AuthService } from '../../services/auth.service';
import { Service } from '../../service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent {
  /*serviceId: number = 0;
  isAdd: boolean = false;
  isEdit: boolean = false;

  isSubmitted: boolean = false;
  errorMessage: string = '';

  postService$: Subscription = new Subscription();
  putService$: Subscription = new Subscription();
  categories$: Subscription = new Subscription();
  statuses$: Subscription = new Subscription();

  imageSrc: string = '';

  // reactive form
  serviceForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    author: new FormControl('', [Validators.required]),
    publishDate: new FormControl('')
  });

  // categories select
  serviceTypes: ServiceType[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicesService: ServicesService,
    private serviceTypeService: ServiceTypeService,
    // private statusService: StatusService,
    private authService: AuthService
  ) {
    this.isAdd = this.router.url === '/newservice';
    this.isEdit = !this.isAdd;
  }

  ngOnInit(): void {
    // Decode user ID from JWT
    const userId = this.authService.getUserId();
    console.log('User ID:', userId);

    // get service if in edit
    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id != null) {
        this.serviceId = +id;
        this.servicesService.getServiceById(this.serviceId).subscribe(result => {
          this.serviceForm.patchValue({
            id: result.id,
            title: result.title,
            serviceType: result.serviceType,
            description: result.description,
            time: result.time,
            author: result.author,
            publishDate: result.publishDate
          });
        });
      }
    }

    // get categories
    this.categories$ = this.serviceTypeService.getCategories().subscribe(result => {
      this.serviceTypes = result;
    });
  }

  ngOnDestroy(): void {
    this.postService$.unsubscribe();
    this.categories$.unsubscribe();
    this.statuses$.unsubscribe();
    this.putService$.unsubscribe();
  }

  getTitle(): string {
    return this.isAdd ? 'Add new service' : 'Edit service';
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.submitData();
  }

  submitData(): void {
    if (this.serviceForm.invalid) {
      this.isSubmitted = false;
      return;
    }
  
    // Extract values from the form and ensure proper types
    const formValue = this.serviceForm.value;
  
    // Ensure the values are properly converted or defaulted
    const service: Service = {
      id: formValue.id ?? 0, // Default to 0 if null or undefined
      title: formValue.title ?? '',
      serviceType: formValue.serviceType ?? '',
      time: formValue.time ?? '',
      description: formValue.description ?? '',
      author: formValue.author ?? '',
      publishDate: formValue.publishDate ?? ''
    };
  
    if (this.isAdd) {
      // Add
      this.postService$ = this.servicesService.postService(service).subscribe(result => {
        this.router.navigateByUrl('/');
      }, error => {
        this.isSubmitted = false;
        this.errorMessage = error.message;
      });
    } else {
      // Edit
      this.putService$ = this.servicesService.putService(this.serviceId, service).subscribe(result => {
        this.router.navigateByUrl('/');
      }, error => {
        this.isSubmitted = false;
        this.errorMessage = error.message;
      });
    }
  }*/
  
}
