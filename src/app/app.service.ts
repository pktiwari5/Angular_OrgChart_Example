import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient,private router: Router) {}

    getFiles() {
        return this.http.get('assets/JSON_DATA/data.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res["data"]);
    }
}