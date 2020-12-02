import { Component, OnInit } from '@angular/core';
import { Photo, Photos } from '../../models';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetToken } from 'src/app/store/actions/auth.actions';

import {
  photoState,
  PhotoActions,
  PhotoSelectors
} from '../../store';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  photos$: Observable<Photo[]>;

  constructor(public router: Router, private store$: Store<AppState>) { }

  ngOnInit() {

    this.photos$ = this.store$.select(PhotoSelectors.selectAllPhotos);

    this.store$.dispatch(new PhotoActions.LoadRequestAction());

  }

}
