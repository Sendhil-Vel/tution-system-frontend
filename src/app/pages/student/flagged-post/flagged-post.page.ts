import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';
import { Message } from 'primeng/api';
import { FlaggedPosts } from '../../../core/interfaces/flagged-posts';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { FlaggedPostsService } from '../../../core/services/flagged-posts/flagged-posts.service';
import { HttpStatusCode } from 'axios';
import { UpdateFlaggedPostService } from '../../../core/services/update-flagged-post/update-flagged-post.service';
import { UpdateFlaggedPost } from '../../../core/models/update-flagged-post/update-flagged-post.model';
import { HeaderMapping } from 'json-to-csv-export';
import { ExportToCsvService } from '../../../core/services/export-to-csv/export-to-csv.service';

@Component({
  selector: 'vojvoj-flagged-post',
  templateUrl: './flagged-post.page.html',
  styleUrl: './flagged-post.page.scss',
})
export class FlaggedPostPage implements OnInit, AfterViewInit {
  private authToken!: String;
  private toastMessage!: Message;

  private headers: HeaderMapping[] = [
    {
      key: "flaggingID",
      label: "flaggingID"
    },
    {
      key: "postID",
      label: "postID"
    },
    {
      key: "flagCategory",
      label: "flagCategory"
    },
    {
      key: "mediaID",
      label: "mediaID"
    },
    {
      key: "mediaUrl",
      label: "mediaUrl"
    },
    {
      key: "mediaType",
      label: "mediaType"
    },
    {
      key: "thumbnailUrl",
      label: "thumbnailUrl"
    },
    {
      key: "duration",
      label: "duration"
    },
    {
      key: "aspectratio",
      label: "aspectratio"
    },
    {
      key: "title",
      label: "title"
    },
    {
      key: "postedByUser",
      label: "postedByUser"
    },
    {
      key: "flaggedDate",
      label: "flaggedDate"
    },
    {
      key: "flaggedbyUser",
      label: "flaggedbyUser"
    },
    {
      key: "mediaCreatedDate",
      label: "mediaCreatedDate"
    }
  ];

  flaggedPosts: FlaggedPosts[] = [];
  noOfRecords: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = [
    'flaggingID',
    'postID',
    'flagCategory',
    'duration',
    'title',
    'mediaID',
    'postedByUser',
    'mediaCreatedDateA',
    'flaggedbyUser',
    'flaggedDate',
    'unflagPost'
  ];

  dataSource = new MatTableDataSource();

  constructor(
    private flaggedPostService: FlaggedPostsService,
    private updateFlaggedPostService: UpdateFlaggedPostService,
    private sessionStorage: SessionStorageService,
    private router: Router,
    private toastMessageService: ToastMessageService,
    private exportToCsvService: ExportToCsvService
  ) {}

  async ngOnInit() {
    this.authToken = this.sessionStorage.getAuthToken() || '';

    if (!this.authToken) {
      this.sessionStorage.setAuthToken('');
      console.error('Authentication required!');
      this.router.navigate(['']);
    }

    await this.getFlaggedPosts();

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  async getFlaggedPosts() {
    await this.flaggedPostService.getFlaggedPosts(this.authToken)
    .then((resp) => {
      const respData = JSON.parse(resp);
      switch (respData.status) {
        case HttpStatusCode.Ok:
          this.flaggedPosts = respData.result;
          this.dataSource.data = this.flaggedPosts.sort((a, b) => b.flaggingID - a.flaggingID);
          this.noOfRecords = this.flaggedPosts.length;
          break;
        case HttpStatusCode.Unauthorized:
          this.toastMessage = { 
            key: 'vojvojToast',
            severity: 'error', 
            summary: '401 Unauthorized', 
            detail: 'Invalid authentication token, try re-login.',
            life: 2500
          };
          this.toastMessageService.setToastMessage(this.toastMessage);
          this.sessionStorage.setAuthToken('');
          this.router.navigate(['']);
          break;
      
        default:
          break;
      }      
    })
    .catch((error) => {
      console.error(error);
    });
  }

  async unflagPost(postId: number, flagId: number) {
    let flaggedPost = new UpdateFlaggedPost();
    flaggedPost.setPostId(postId);
    flaggedPost.setFlagId(flagId);
    
    await this.updateFlaggedPostService.updateFlaggedPosts(this.authToken, flaggedPost)
    .then(async (resp) => {
      switch (resp.status) {
        case HttpStatusCode.Ok:
          this.toastMessage = {
            key: 'vojvojToast',
            severity: 'success',
            detail: resp.data.data.message,
            life: 2500
          };
          this.toastMessageService.setToastMessage(this.toastMessage);
          await this.getFlaggedPosts();
          break;
          case HttpStatusCode.Unauthorized:
            this.toastMessage = { 
              key: 'vojvojToast',
              severity: 'error', 
              summary: '401 Unauthorized', 
              detail: 'Invalid authentication token, try re-login.',
              life: 2500
            };
            this.toastMessageService.setToastMessage(this.toastMessage);
            this.sessionStorage.clearSessionStorage();
            this.router.navigate(['']);
            break;
      
        default:
          break;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  }

  exportToCsv() {
    this.toastMessage = { 
      key: 'vojvojToast',
      severity: 'info', 
      summary: 'Exporting data to CSV', 
      detail: 'Generating the CSV file. It will be downloaded shortly!',
      life: 1500
    };
    this.toastMessageService.setToastMessage(this.toastMessage);
    
    this.exportToCsvService.exportToCsv(
      this.flaggedPosts,
      "vojvoj-flagged-posts",
      this.headers
    );
  }
}
