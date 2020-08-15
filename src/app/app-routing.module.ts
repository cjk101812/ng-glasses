import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageClassifierUploadComponent } from './image-classifier-upload/image-classifier-upload.component';
import { ImageClassifierWebcamComponent } from './image-classifier-webcam/image-classifier-webcam.component';

const routes: Routes = [
  { path: 'upload', component: ImageClassifierUploadComponent },
  { path: 'webcam', component: ImageClassifierWebcamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
