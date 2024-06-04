import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/model/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  hide = true;
  formGroup!: FormGroup;

  constructor(
    private formB: FormBuilder,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formB.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      team: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  submit() {
    if (this.formGroup.valid) {
      const newPlayer: Player = {
        ...this.formGroup.value,
        position: this.playerService.getData().length + 1,
      };
      this.playerService.addData(newPlayer);
      this.formGroup.reset();
    }
  }

  clickEvent(event: Event) {
    this.hide = !this.hide;
  }
}
