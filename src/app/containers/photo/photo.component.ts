import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Photo, Photos } from '../../models';
import { PhotoActionTypes } from '../../store/actions/photo.actions';
import { Message } from 'primeng/api';
import { AppState } from 'src/app/store/app.states';
import { LogOut } from '../../store/actions/auth.actions';
import { Router } from '@angular/router';
import { PhotoSelectors, PhotoActions } from 'src/app/store';
import { Observable } from 'rxjs/internal/Observable';
import { PhotoService } from 'src/app/services/photo.service';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, AfterViewInit {

  @Input() photos: Photo[];
  @Input() loading: boolean;
  @Input() error: any;
  photoDetails: Photo;
  showPhotoDetails: boolean;
  photo$: Observable<any>;
  rows = 10;
  pageCounter: number;
  @ViewChild('paginator') paginator: Paginator;

  constructor(private store$: Store<AppState>, private formBuilder: FormBuilder, private router: Router,
    private photoService: PhotoService) {
    this.pageCounter = parseInt(localStorage.getItem('pageData'), 10);
  }

  ngOnInit() {
    if (!this.pageCounter) {
      this.photoService.getPaginator();
    }
  }

  getPhotoDetails(id: number) {
    this.photoService.getPhotoById(id).subscribe(result => {
      if (result) {
        this.photoDetails = result;
        this.showPhotoDetails = true;
      } else {
        this.showPhotoDetails = false;
      }
    });
  }

  paginate(event) {
    this.photoService.getAllPhotos(event.page + 1).subscribe(result => {
      this.photos = result.pictures;
    });
  }

  ngAfterViewInit() {
    this.paginator.totalRecords = this.rows * this.pageCounter;
    this.paginator.rows = this.rows;
  }

}
