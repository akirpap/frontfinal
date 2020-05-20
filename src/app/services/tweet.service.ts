import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Tweet } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private api = 'http://184.172.247.135:31478'

  constructor(
    private http: HttpClient
  ) { }


  getTweet(word: string){
    const path = `${this.api}/${word}`
    return this.http.get<Tweet[]>(path)
  }

  getText(word: string){
    const path = `${this.api}/${Text}`
    return this.http.get<Text[]>(path)
  }


}
