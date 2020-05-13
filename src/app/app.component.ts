import { Component, OnInit } from '@angular/core';
import {TweetService} from './services/tweet.service'
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Watson-Knowledge';
  uploadForm: FormGroup;
  private URL_NL="http://184.172.247.135:31478";

  public form ={
    text: null
  }

  tweets = [];
  texlibre
  documento
  analit
  mensaje = [];
  analisis = [];

  constructor (
    private tweetService: TweetService, private httpClient: HttpClient, private FormBuilder: FormBuilder
  ) {}

  ngOnInit(): void{}


  getTweet(word: HTMLInputElement){
    this.tweetService.getTweet(word.value)
    .subscribe(todo => {
      console.log(todo)
      this.tweets= todo;


    })
  }

  getTextlib(textlib:HTMLInputElement){
    var telib ={
      "text":textlib.value
    }
    console.log(telib)
    this.httpClient.post<any>(`${this.URL_NL}/api/upload-text`,telib)
    .subscribe(todo => {
      console.log(todo)
      this.texlibre= todo;
    })
  }

  getFile(doc: HTMLInputElement){
    var buck =
    {
      "bucket": "documentofinal",
      "name": doc.value
      }
    const options = {responseType: 'text' as 'json'}
    this.httpClient.post<any>(`${this.URL_NL}/list`,buck,options)
    .subscribe(todo => {
      console.log(todo)
      this.documento= todo;
    })
  }

  getAnali(){
    var analic =
    {
      "text": this.documento
      }
    const options = {responseType: 'text' as 'json'}
    this.httpClient.post<any>(`${this.URL_NL}/api/upload-text`,analic)
    .subscribe(todo => {
      console.log(todo)
      this.analit= todo;
    })
  }

}



