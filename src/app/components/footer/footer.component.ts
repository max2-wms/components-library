import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() public company;

  public year;

  public ngOnInit() {
    let d = new Date();
    this.year = d.getFullYear();
  }

}
