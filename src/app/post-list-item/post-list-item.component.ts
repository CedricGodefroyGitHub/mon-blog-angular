import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postItemTitle: string;
  @Input() postItemContent: string;
  @Input() postItemDate: Date;
  @Input() postItemLoveIts: number;

  postItemLoveItsMod = 0;

  constructor() { 
  }

  ngOnInit() {
  	this.postItemLoveItsMod = this.postItemLoveIts;
  }

  addLike(){
	  if(this.postItemLoveItsMod <= this.postItemLoveIts){
	  	this.postItemLoveItsMod = this.postItemLoveIts + 1;
	  } else{
	 	this.postItemLoveItsMod = this.postItemLoveIts;
	  }
  }

  removeLike(){
	  if(this.postItemLoveItsMod >= this.postItemLoveIts){
	  	this.postItemLoveItsMod = this.postItemLoveIts - 1;
	  } else{
	 	this.postItemLoveItsMod = this.postItemLoveIts;
	  }
  }

  getColor(){
  	if (this.postItemLoveItsMod > this.postItemLoveIts){
      return 'green';
  	}else if (this.postItemLoveItsMod < this.postItemLoveIts){
      return 'red';
  	}else{
      return 'black';
  	}
  }

}
