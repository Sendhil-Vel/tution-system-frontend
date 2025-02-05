import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import axios from 'axios';
import { UpdateFlaggedPost } from '../../models/update-flagged-post/update-flagged-post.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateFlaggedPostService {

  constructor() { }

  async updateFlaggedPosts(authToken: String, updateFlaggedPost: UpdateFlaggedPost) {
    let url: string = environment.baseUrl + environment.apis.updateFlaggedPost;
    let data = JSON.stringify({
      postid: updateFlaggedPost.getPostId(),
      flagid: updateFlaggedPost.getFlagId()
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Authorization': authToken.toString()
      },
      data: data
    };

    return await axios.request(config)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error;
    });

  }
}
