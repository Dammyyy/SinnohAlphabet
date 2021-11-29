const items = [
{'Id':'', 'Sinnoh':'', 'Alt':'フタバタウン', 'Text':'', 'Image':'imgs/2021111920481200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'マサゴタウン', 'Text':'', 'Image':'imgs/2021111921225500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'コトブキシティ', 'Text':'', 'Image':'imgs/2021111921442400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'クロガネシティ', 'Text':'', 'Image':'imgs/2021111922525600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ソノオタウン', 'Text':'', 'Image':'imgs/2021112000042200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ハクタイシティ', 'Text':'', 'Image':'imgs/2021112008390600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ヨスガシティ', 'Text':'', 'Image':'imgs/2021112013490800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ズイタウン', 'Text':'', 'Image':'imgs/2021112112592800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリシティ', 'Text':'', 'Image':'imgs/2021112017433000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ノモセシティ', 'Text':'', 'Image':'imgs/2021112101033900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'カンナギシティ', 'Text':'', 'Image':'imgs/2021112104020000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ミオシティ', 'Text':'', 'Image':'imgs/2021112113125700-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'キッサキシティ', 'Text':'', 'Image':'imgs/2021112120121400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ナギサシティ', 'Text':'', 'Image':'imgs/2021112218473600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケモンリーグ', 'Text':'', 'Image':'imgs/2021112222152200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ファイトエリア', 'Text':'', 'Image':'imgs/2021112300192100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'サバイバルエリア', 'Text':'', 'Image':'imgs/2021112700190100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'リゾートエリア', 'Text':'', 'Image':'imgs/2021112814433100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'シンジ湖（心情湖）', 'Text':'', 'Image':'imgs/2021111921112400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'エイチ湖（叡智湖）', 'Text':'', 'Image':'imgs/2021112500480400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'リッシ湖', 'Text':'湖の前に看板がない', 'Image':''},
{'Id':'', 'Sinnoh':'', 'Alt':'看板（共通）', 'Text':'', 'Image':'imgs/2021112014082300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'看板（ヨスガジム）', 'Text':'ヨスガシティの街の看板と同じ（ヨスガシティと書かれている）', 'Image':'imgs/2021112112552900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'掛け軸', 'Text':'', 'Image':'imgs/2021112104043500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'バトルパーク', 'Text':'', 'Image':'imgs/2021112300221600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ゆびをふる', 'Text':'', 'Image':'imgs/2021112017510500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポスター', 'Text':'', 'Image':'imgs/2021112501004800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポスター', 'Text':'', 'Image':'imgs/2021112501004800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'テレビコトブキ', 'Text':'', 'Image':'imgs/2021111920471800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケモンセンター', 'Text':'', 'Image':'imgs/2021111920472500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トレーナーズスクール', 'Text':'', 'Image':'imgs/2021111920473101-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'天気予報', 'Text':'', 'Image':'imgs/2021112000075800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'相性チャンネル', 'Text':'', 'Image':'imgs/2021112000485200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケッチ', 'Text':'', 'Image':'imgs/2021111920473600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'フレンドリィショップ', 'Text':'', 'Image':'imgs/2021111920473800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'キャスター', 'Text':'', 'Image':'imgs/2021111921084500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'きのみ', 'Text':'', 'Image':'imgs/2021112000483000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ヨスガ スーパーコンテストショー', 'Text':'', 'Image':'imgs/2021112013464000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ホテルグランドレイク', 'Text':'', 'Image':'imgs/2021112013531200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'フラワーショップいろとりどり', 'Text':'', 'Image':'imgs/2021112013524700-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ヨスガ ふれあい広場', 'Text':'', 'Image':'imgs/2021112013530300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'サイクルショップ「自転車人力」', 'Text':'', 'Image':'imgs/2021112013532300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリデパート', 'Text':'', 'Image':'imgs/2021112013532900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ノモセシティ 大湿原 サファリゲーム', 'Text':'', 'Image':'imgs/2021112013533600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリシティファッションスタイル「ゆびをふる」', 'Text':'', 'Image':'imgs/2021112015303900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ナギサ市場', 'Text':'', 'Image':'imgs/2021112116005600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'バトルタワー', 'Text':'', 'Image':'imgs/2021112315342800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'各種ニュース', 'Text':'', 'Image':'imgs/2021111921084500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ズイの洞窟', 'Text':'アンノーン文字に見える。もどりのどうくつにも見られる', 'Image':'imgs/2021112015385800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'もどりのどうくつ', 'Text':'アンノーン文字に見える。ズイの洞窟にも見られる', 'Image':'imgs/2021112501174500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケッチカンパニー', 'Text':'アニポケ文字に見られる', 'Image':'imgs/2021111921560900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'黒板', 'Text':'', 'Image':'imgs/2021111921471900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリデパートのフロア', 'Text':'', 'Image':'imgs/2021112017463200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
];

// new Vue({
//   el: '#app',
//   data () {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     axios
//       .get('https://script.google.com/macros/s/AKfycbwiBx_4iRiaYQVKGeunDISwy8IMMn9-qSgNmYhFzZUb2GTrFoBz3l4/exec')
//       .then(response => {
//         this.info = response.data
//       })
//   }
// })
new Vue({
  el: '#app',
  data: {
    items: items,
    sort: {
      key: '', // ソートキー
      isAsc: false // 昇順ならtrue,降順ならfalse
    },
    // types: types,       // チェックボックスの値
    // selectTypes: types,  // 選択されたチェックボックスの値
    searchSinnoh: '',   // 入力された文字列を格納
  },
  computed: {
    eventedAction: function() {
      let list = this.items.slice();

      // ソート実施
      if(this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key];
          b = b[this.sort.key];
          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }
      // // Typeでフィルタリング実施
      // if(this.selectTypes) {
      //   list = list.filter(element => {
      //     for(const type of this.selectTypes) {
      //       if(element.Type === type) {
      //         return true;
      //       }
      //     }
      //   });
      // }
      // Nameで検索実施
      if (this.searchSinnoh) {
        list = list.filter(element => {
          return Object.keys(element).some(key => {
            if(key === 'Sinnoh') {
              return element[key].indexOf(this.searchSinnoh) > -1;
            }
          });
        });
      }

      return list;
    }   
  },
  methods: {
    // sort用キーをセットし、昇順・降順を入れ替える
    sortBy: function(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    sortedClass: function(key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc' }` : '';
    },
    // 全ての処理をクリアする
    resetting: function() {
      this.sort.key = '';
      this.sort.isAsc = false;
      // this.selectTypes = types;
      this.searchSinnoh = '';
      this.items = items;
    }
  }
});