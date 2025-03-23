import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-c-projects',
  templateUrl: './c-projects.component.html',
  styleUrls: ['./c-projects.component.scss'],
  encapsulation: ViewEncapsulation.None // 把封裝關掉以正確渲染 innerHTML
})
export class CProjectsComponent {
  demoList: { title: string, description: string, src: string, sizeRatio: string }[] = [
    { title: 'BA 前後對比圖', description: '<ul><li>滑動比對 Before & After</li><li>手風琴 (Accordion) 選單</li></ul>', src: 'assets/videos/demo_BA圖.mp4', sizeRatio: '1920 / 1336' },
    { title: '生成作品展示', description: '<ul><li>動態輪播 (Carousel)</li><li>按讚、收藏等互動按鈕</li><li>排序、分頁等功能</li></ul>', src: '../../../assets/videos/demo_生成作品展示.mp4', sizeRatio: '1920 / 1740' },
    { title: '資料上傳', description: '<ul><li>圖片裁切器</li><li>地址（縣市、地區）下拉選單</li><li>檔案上傳格式、大小限制</li></ul>', src: '../../../assets/videos/demo_上傳資料.mp4', sizeRatio: '1920 / 1680' },
    { title: '作品瀏覽', description: '<ul><li>瀑布流 (Waterfall Flow) 布局</li><li>延遲載入 (Lazy Loading)</li><li>分享 & 複製連結</li></ul>', src: '../../../assets/videos/demo_找靈感.mp4', sizeRatio: '1920 / 1780' },
    { title: 'AI 生成圖片', description: '<ul><li>上傳或選擇預設範例圖</li><li>瀏覽並選擇不同風格</li><li>自動代入咒語並生成</li></ul>', src: '../../../assets/videos/demo_AI生成作品_1.mp4', sizeRatio: '1920 / 1495' },
    { title: '局部塗抹生成', description: '<ul><li>畫布塗抹功能</li><li>調整筆刷或橡皮擦粗細</li><li>塗抹後重新生成</li></ul>', src: '../../../assets/videos/demo_AI生成作品_2.mp4', sizeRatio: '1920 / 1495' },
  ];
}
