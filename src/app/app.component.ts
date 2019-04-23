import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'ng2-org-chart';
import { TreeNode } from 'primeng/components/common/treenode';
import { NodeService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NodeService]
})
export class AppComponent implements OnInit {
  constructor(private nodeDataService:NodeService) {}

  title = 'org-chart-poc';
  data1: TreeNode[];
  data2: TreeNode[];
  selectedNode: TreeNode;
  filesTree: TreeNode[];
  selectedFile: TreeNode;

  ngOnInit() {
    this.getData();
    this.nodeDataService.getFiles().then(files => this.filesTree = files);
  }

  topEmployee: IEmployee = {
    name: 'Janis Martin',
    designation: 'CEO',
    img: "assets/images/profile1.jpg",
    subordinates: [
      {
        name: 'Matthew Wikes',
        designation: 'VP',
        img: "assets/images/profile2.jpg",
        subordinates: [
          {
            name: 'Tina Landry',
            designation: 'Budget Analyst',
            img: "assets/images/profile3.jpg",
            subordinates: []
          }
        ]
      },
      {
        name: 'Patricia Lyons',
        designation: 'VP',
        img: "assets/images/profile1.jpg",
        subordinates: [
          {
            name: 'Dylan Wilson',
            designation: 'Web Manager',
            img: "assets/images/profile2.jpg",
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            designation: 'Art Director',
            img: "assets/images/profile4.jpg",
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        designation: 'VP',
        img: "assets/images/profile3.jpg",
        subordinates: []
      }
    ]
  };

  getChartData(event){
    let name =  event.path[1].childNodes[0].innerText;
    let designation =  event.path[1].childNodes[1].innerText;
    console.log('Employee Name: ',name)
    console.log('Employee Designation: ',designation);
  }
  getData() {
    this.data1 = [{
      label: 'CEO',
      type: 'person',
      styleClass: 'ui-person',
      expanded: true,
      data: { name: 'Walter White', 'avatar': 'walter.jpg' },
      children: [
        {
          label: 'CFO',
          type: 'person',
          styleClass: 'ui-person',
          expanded: true,
          data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
          children: [{
            label: 'Tax',
            styleClass: 'department-cfo'
          },
          {
            label: 'Legal',
            styleClass: 'department-cfo'
          }],
        },
        {
          label: 'COO',
          type: 'person',
          styleClass: 'ui-person',
          expanded: true,
          data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
          children: [{
            label: 'Operations',
            styleClass: 'department-coo'
          }]
        },
        {
          label: 'CTO',
          type: 'person',
          styleClass: 'ui-person',
          expanded: true,
          data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
          children: [{
            label: 'Development',
            styleClass: 'department-cto',
            expanded: true,
            children: [{
              label: 'Analysis',
              styleClass: 'department-cto'
            },
            {
              label: 'Front End',
              styleClass: 'department-cto'
            },
            {
              label: 'Back End',
              styleClass: 'department-cto'
            }]
          },
          {
            label: 'QA',
            styleClass: 'department-cto'
          },
          {
            label: 'R&D',
            styleClass: 'department-cto'
          }]
        }
      ]
    }];
  }
}
