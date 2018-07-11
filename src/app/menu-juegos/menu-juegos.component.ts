import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
  		console.log("MEnu");
  		this.router.queryParams.subscribe(params =>{
  			console.log(params['username']);
  			console.log(params['password']);
  		});
  }

  ngOnInit() {
  }

}
