import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

import { DataInformation } from '../pages/data/data.model';

const DATA_KEY = 'my-data';
@Injectable({
  providedIn: 'root'
})

export class StorageService {
  
  dataInformations: DataInformation[] = [];
  

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.create();
    
  }
  //Create
  //addData(data: DataInformation): Promise<any>{
    //return this.storage.get(DATA_KEY).then((dataI: DataInformation[])=>{
      //if(dataI){
        //dataI.push(data);
       // return this.storage.set(DATA_KEY, dataI);
     // }else{
       // return this.storage.set(DATA_KEY, [data]);
     // }
   // });
//  }
//Create2
addDataLocal(key, value){
  this.storage.set(key, value );

}

  //Read
  getData(){
    let dataInformation: DataInformation[];
    this.storage.forEach((key, value,index)=>{
      //this.getData.push({})
      console.log(key);
    })
  }
  //Update
  updateData(data: DataInformation){

  }
  //Delete
  deleteData(id: number){

  }
}
