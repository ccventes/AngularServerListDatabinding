import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter< {serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter< {blueprintName: string, blueprintContent: string }>();
  newName = '';
  newContent = '';
  


  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
   this.serverCreated.emit({serverName: this.newName, serverContent: this.newContent});
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({blueprintName: this.newName, blueprintContent: this.newContent})
    console.log("bp presionado");
  }

}
