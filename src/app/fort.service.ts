import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs'; 
import { AfterTrek, BeforTrek, BeginnerTrekkers, Dos_Donts, DuringTrek, Equipment, Faq, FortGallary, TrekkersTips } from './fort.model';

@Injectable({
  providedIn: 'root'
})
export class FortService {

  private url_1: string = "../assets/data/fort.json";
  private url_2: string = "../assets/data/dos_donts.json";
  private url_3: string = "../assets/data/equipment.json";
  private url_4: string = "../assets/data/trekking_tips.json";
  private url_9: string = "../assets/data/faq.json";

  constructor(private _http: HttpClient) {  }
  
  getForts(): Observable<FortGallary[]> {
    return this._http.get<FortGallary[]>(this.url_1);
  }

  getDos_Donts():Observable<Dos_Donts[]> {
    return this._http.get<Dos_Donts[]>(this.url_2);
  }

  getEquipment():Observable<Equipment[]> {
    return this._http.get<Equipment[]>(this.url_3);
  }

  getTrekkingTips():Observable<TrekkersTips[]> {
    return this._http.get<TrekkersTips[]>(this.url_4);
  }

  getFaq():Observable<Faq[]> {
    return this._http.get<Faq[]>(this.url_9);
  }

  private url_5: string = "../assets/data/first_time_trekkers_data/tips_first_time_trek.json";
  private url_6: string = "../assets/data/first_time_trekkers_data/things_todo_during_trek.json";
  private url_7: string = "../assets/data/first_time_trekkers_data/things_todo_before_trek.json";
  private url_8: string = "../assets/data/first_time_trekkers_data/things_todo_after_trek.json";


  getData(): Observable<any> {
    
    const response1 = this._http.get<BeginnerTrekkers[]>(this.url_5);
    const response2 = this._http.get<DuringTrek[]>(this.url_6);
    const response3 = this._http.get<BeforTrek[]>(this.url_7);
    const response4 = this._http.get<AfterTrek[]>(this.url_8);
    return forkJoin([response1, response2, response3,response4]);
  }
}

