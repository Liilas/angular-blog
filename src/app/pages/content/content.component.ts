import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = " "
  contentTitle:string = " Noticias"
  contentDescription: string = " blabla"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id= value.get("id")
      )

      this.setValuesToComponets(this.id)
  }

  setValuesToComponets(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    }
  }


