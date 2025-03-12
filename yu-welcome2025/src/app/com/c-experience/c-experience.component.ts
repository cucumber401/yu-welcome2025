import { Component } from '@angular/core';

@Component({
  selector: 'app-c-experience',
  templateUrl: './c-experience.component.html',
  styleUrls: ['./c-experience.component.scss']
})
export class CExperienceComponent {
  experiencesList: {
    time: string;
    role: string;
    title: string;
    description: string;
  }[] = [
      {
        time: '2023-2024',
        role: '網頁前端工程師',
        title: '泰元國際開發',
        description: '負責使用 Angular 開發 AI 生成圖片與 3D 編輯器 SaaS 平台的前端介面，專注於實現UI/UX設計師交付的網站外觀與互動功能，以確保使用者能獲得流暢的操作體驗。'
      },
      {
        time: '2018-2022',
        role: 'Executive 1',
        title: '長面前樓聞海',
        description: '下時節減比這象大起景行相機乎是面雜獎是跑的不，行傳科行機百許，男花走這至活相許個。失的動香要相不社林代水不別可生大性直感他地一自例我來快果？'
      },
      {
        time: '2035-2035',
        role: 'Executive 2',
        title: '存畫只點良',
        description: '必別了刻友軍，家些的道裡起水會半子前型新不校早產，品英人到想人和！父二展功少我人所客生氣大千力斷。出民經怎得，出者圖出了麼氣來候使，包見今運度果專洲事開可，形長了就專幾我同學解張媽女資老色大心知旅解，票檢日難信、友乎頭最說變、民家地相銷見物於。'
      },
      {
        time: '3035-2035',
        role: 'Executive 3',
        title: '都從其非自文正不',
        description: '不過要性我本，間童廣燈青成觀星親金……會動時的民上、海人大現'
      },
      {
        time: '1035-2035',
        role: 'Executive 4',
        title: '們場麼要不公子',
        description: '氣要港構這度說，著的好功念他生氣，政完交，去提一重人、方四格上？金大小光數會定叫……們人次壓成分力南天飛新？'
      },
      {
        time: '2035-2035',
        role: 'Executive 5',
        title: '你好以岸灣我熱',
        description: '告下識現法年同社畫輕在你是打快太子一多朋；利去外、事底多離草詩來女而的面才心：樣你主重頭思這國用……名到員成；水現空期大學爸子以有了道的，心看兩國預樓但童友傳大音，是政正一光。'
      },
    ];
}
