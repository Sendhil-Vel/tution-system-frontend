import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Hls from 'hls.js';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'vojvoj-media-file-view',
  templateUrl: './media-file-view.component.html',
  styleUrl: './media-file-view.component.scss'
})
export class MediaFileViewComponent implements OnInit, AfterViewInit {

  @Input() mediaId: number = 0;
  @Input() mediaType: string = '';
  @Input() mediaTitle: string = '';
  @Input() mediaUrl: string = '';

  
  @ViewChild('vojvojVideo') vojvojVideo!: ElementRef;
  videoElement!: HTMLVideoElement;

  visible: boolean = false;

  mediaURLPath!: string;

  constructor() {}

  ngOnInit(): void {
    // switch (this.mediaType) {
    //   case 'IMAGE':
    //     this.mediaURLPath = environment.s3BucketBaseUrl + '/' + this.mediaUrl;
    //     break;

    //   case 'VIDEO':
    //     this.mediaURLPath = environment.s3BucketBaseUrl + '/' + this.mediaUrl + '/' + this.mediaUrl + '.m3u8';
    //     break;
    
    //   default:
    //     break;
    // }
  }

  ngAfterViewInit(): void {
    if(this.mediaType === 'VIDEO') {
      this.videoElement = this.vojvojVideo?.nativeElement;
      if(Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(this.mediaURLPath);
        hls.attachMedia(this.videoElement);
      }
    }
  }

  showDialog() {
    this.visible = true;
    if(this.mediaType === 'VIDEO') {
      this.videoElement.play();
    }
  }

}
