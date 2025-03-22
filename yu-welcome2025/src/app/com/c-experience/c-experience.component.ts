import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-c-experience',
  templateUrl: './c-experience.component.html',
  styleUrls: ['./c-experience.component.scss'],
  encapsulation: ViewEncapsulation.None // 把封裝關掉以正確渲染 innerHTML
})
export class CExperienceComponent {
  experiencesList: {
    time: string;
    role: string;
    title: string;
    description: string;
  }[] = [
      {
        time: '2023/12 - 2024/10',
        role: '網頁前端工程師',
        title: '泰元國際開發',
        description: '<ul><li>- 負責使用 Angular 開發 AI 生成圖片與 3D 編輯器 SaaS 平台的前端介面</li><li>- 專注於實現 UI/UX 設計師交付的網站外觀與互動功能，確保使用者獲得流暢的操作體驗</li></ul>'
      },
      {
        time: '2023/03 - 2023/06',
        role: '學員',
        title: '產業新尖兵-網頁前端工程師實戰班',
        description: '<ul><li>- 勞動部舉辦之職訓課程</li><li>- 學習網站開發、資料庫設計、金流串接、網頁視覺設計、UI/UX 工具操作等實作課程</li></ul>'
      },
      {
        time: '2021/02 - 2021/06',
        role: '參與學生',
        title: '數位沙盒校園實證人才培育-API創新應用設計',
        description: '實作 Python Flask 網頁串接綠界科技金流API，建立售票平台'
      },
      {
        time: '2018/09 - 2022/06',
        role: '大學部學生',
        title: '中正大學-資訊管理學系',
        description: '修習資訊相關領域課程，包含 java, python...等程式語言'
      },
    ];
}
