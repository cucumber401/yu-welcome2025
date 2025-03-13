import { Component } from '@angular/core';

@Component({
  selector: 'app-c-projects',
  templateUrl: './c-projects.component.html',
  styleUrls: ['./c-projects.component.scss']
})
export class CProjectsComponent {
  demoList: { title: string, description: string, src: string, sizeRatio: string }[] = [
    {title: 'BA 前後對比圖', description: '學會有思兒氣本母時兩士去子西亞！際在步待時里而下你頭北，音的加？來然命走從防了信：我列。', src:'../../../assets/videos/demo_BA圖.mp4', sizeRatio: '1920 / 1336'},
    {title: '生成作品展示', description: '學會有思兒氣本母時兩士去子西亞！際在步待時里而下你頭北，音的加？來然命走從防了信：我列。', src:'../../../assets/videos/demo_生成作品展示.mp4', sizeRatio: '1920 / 1740'},
    {title: '資料上傳', description: '學會有思兒氣本母時兩士去子西亞！際在步待時里而下你頭北，音的加？來然命走從防了信：我列。', src:'../../../assets/videos/demo_上傳資料.mp4', sizeRatio: '1920 / 1680'},
  ];
}
