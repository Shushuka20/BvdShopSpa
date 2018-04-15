import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../../../_animations/slideInOutAnimation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserRepository } from '../../../admin/repositories/user.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class AddEditComponent implements OnInit {

  addEditReactiveForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private userRepository: UserRepository,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (this.addEditReactiveForm.valid) {
      this.userRepository.saveUser(this.addEditReactiveForm.value)

      this.router.navigateByUrl("/admin/users");
    }
  }

  initForm() {
    this.addEditReactiveForm = this.fb.group({
      name: [],
      password: [],
      role: []
    })
  }

}
