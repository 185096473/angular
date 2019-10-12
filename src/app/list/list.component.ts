import { Component, OnInit } from '@angular/core';
import {List} from "../list"
import {LISTS} from "../mock-list" 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectlist:List;
  constructor() { }
  listmsg:string="创建新组件";
  list:List={
    id:1,
    name:"战神"
  }
  lists=LISTS;
  onSelect(val){
    console.log(val)
    this.selectlist=val
  }
  
  ngOnInit() {
  }

}
