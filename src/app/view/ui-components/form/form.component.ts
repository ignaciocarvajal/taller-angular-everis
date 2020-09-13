import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { IGame } from './models/game.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';

  @Input() game: IGame;
  @Input() edit: boolean;
  @Input() detail: boolean = true;
  @Output() post: EventEmitter<IGame> = new EventEmitter<IGame>();


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    if (this.edit) {
      this.loadForm(this.game);
    }
  }


  createForm() {
    this.formGroup = this.formBuilder.group({
      title: [{value: null, disabled: this.detail}, [Validators.required, Validators.minLength(5)]],
      price: [{value: null, disabled: this.detail}, [Validators.required, Validators.pattern('^[0-9]*$')]],
      imageUrl: [{value: null, disabled: this.detail}, Validators.required],
      description: [
        {value: null, disabled: this.detail},
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      category: [{value: null, disabled: this.detail}, Validators.required],
    });
  }

  loadForm(game) {
    this.formGroup.controls['title'].setValue(game.title);
    this.formGroup.controls['price'].setValue(game.price);
    this.formGroup.controls['imageUrl'].setValue(game.imageUrl);
    this.formGroup.controls['description'].setValue(game.description);
    this.formGroup.controls['category'].setValue(game.category);
  }

  get title() {
    return this.formGroup.get('title') as FormControl;
  }

  getErrorTitle() {
    return this.formGroup.get('title').hasError('required')
      ? 'Field is required'
      : this.formGroup.get('title').hasError('minlength')
      ? 'The field must be at least 5 characters long'
      : '';
  }

  getErrorPrice() {
    return this.formGroup.get('price').hasError('required')
      ? 'Field is required'
      : this.formGroup.get('price').hasError('pattern')
      ? 'Not a valid price only accept number'
      : '';
  }

  onSubmit(post) {
    this.post.emit(post);
  }
}
