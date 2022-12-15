import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  add(memberName: string, isFirst: boolean) {

    // this.crew.push({name: memberName, firstMission: isFirst});

    // console.log("turkeyTest");
    // console.log(this.crew[0].name);
    // console.log("turkeyTest");

    let reet = 0;
    
    for (let i = 0; i < this.crew.length; i++) {
      if(this.crew[i].name.includes(memberName)) { 
        //this.crew.push({name: memberName, firstMission: isFirst});
        reet++;
      }
    }

    if (reet === 0) {
      this.crew.push({name: memberName, firstMission: isFirst});
    }

  }  

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
