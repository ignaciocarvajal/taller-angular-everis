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
  @Input() detail: boolean;
  @Output() post: EventEmitter<IGame> = new EventEmitter<IGame>();


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    if (this.edit) {
      this.createForm(this.game);
    }else{
      this.createForm();
    }
  }


  createForm(game?: IGame) {
    this.formGroup = this.formBuilder.group({
      title: [{value: game ? game.title : null, disabled: this.detail}, [Validators.required, Validators.minLength(5)]],
      price: [{value: game ? game.price : null, disabled: this.detail}, [Validators.required, Validators.pattern('^[0-9]*$')]],
      imageUrl: [{value: game ? game.imageUrl : null, disabled: this.detail}, Validators.required],
      description: [
        {value: game ? game.description : null, disabled: this.detail},
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(140),
        ],
      ],
      category: [{value: game ? game.category : null, disabled: this.detail}, Validators.required],
    });
  }

  // loadForm(game) {
  //   this.formGroup.controls['title'].setValue(game.title);
  //   this.formGroup.controls['price'].setValue(game.price);
  //   this.formGroup.controls['imageUrl'].setValue(game.imageUrl);
  //   this.formGroup.controls['description'].setValue(game.description);
  //   this.formGroup.controls['category'].setValue(game.category);
  // }

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
