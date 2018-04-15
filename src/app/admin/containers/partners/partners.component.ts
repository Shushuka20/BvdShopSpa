import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../_animations/fadeInAnimation';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Список Оптовых Партнеров';
  }

}
