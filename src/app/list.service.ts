import { Injectable } from '@angular/core';
import {List} from "./list"
import {LISTS} from "./mock-list"

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  // 获取列表
  getList() : List[] {
    return LISTS
  }
}
