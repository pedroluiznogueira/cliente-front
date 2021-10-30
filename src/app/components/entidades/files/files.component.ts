import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadFileService } from 'src/app/services/uploadfile.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  selectedFiles?: FileList;
  currentFileUpload?: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  file?:string = "ionic.png";
  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/" 

  constructor(
    private uploadService: UploadFileService, 
    private https:HttpClient
  ){}
  viewFile(){
window.open('https://udeyou.s3.sa-east-1.amazonaws.com/'+this.file);
  }
  deleteFile()
  {
    this.https.post<string>('http://localhost:8080/deleteFile',this.file).subscribe(
      res => {
        this.file = res;
      }
    );
  }
  change(event: any) {
    this.changeImage = true;
  }
  changedImage(event: any) {
    this.selectedFile = event.target.files[0];
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles!.item(0)!;
    this.uploadService.pushFileToStorage(this.currentFileUpload!).subscribe(event => {
      this.selectedFiles = undefined;
    });
  }
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
}
