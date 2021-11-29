const items = [
{'Id':'', 'Sinnoh':'', 'Alt':'フタバタウン', 'Image':'imgs/2021111920481200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'マサゴタウン', 'Image':'imgs/2021111921225500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'コトブキシティ', 'Image':'imgs/2021111921442400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'クロガネシティ', 'Image':'imgs/2021111922525600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ソノオタウン', 'Image':'imgs/2021112000042200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ハクタイシティ', 'Image':'imgs/2021112008390600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ヨスガシティ', 'Image':'imgs/2021112013490800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ズイタウン', 'Image':'imgs/2021112112592800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリシティ', 'Image':'imgs/2021112017433000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ノモセシティ', 'Image':'imgs/2021112101033900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'カンナギシティ', 'Image':'imgs/2021112104020000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ミオシティ', 'Image':'imgs/2021112113125700-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'キッサキシティ', 'Image':'imgs/2021112120121400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ナギサシティ', 'Image':'imgs/2021112218473600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケモンリーグ', 'Image':'imgs/2021112222152200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ファイトエリア', 'Image':'imgs/2021112300192100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'サバイバルエリア', 'Image':'imgs/2021112700190100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'リゾートエリア', 'Image':'imgs/2021112814433100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'シンジ湖（心情湖）', 'Image':'imgs/2021111921112400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'エイチ湖（叡智湖）', 'Image':'imgs/2021112500480400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'リッシ湖（）', 'Image':''},
{'Id':'', 'Sinnoh':'', 'Alt':'看板（通常）', 'Image':'imgs/2021112014082300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'看板（ヨスガジム）', 'Image':'imgs/2021112112552900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'掛け軸', 'Image':'imgs/2021112104043500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'バトルパーク', 'Image':'imgs/2021112300221600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ゆびをふる', 'Image':'imgs/2021112017510500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポスター', 'Image':'imgs/2021112501004800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポスター', 'Image':'imgs/2021112501004800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'テレビコトブキ', 'Image':'imgs/2021111920471800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケモンセンター', 'Image':'imgs/2021111920472500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トレーナーズスクール', 'Image':'imgs/2021111920473101-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'天気予報', 'Image':'imgs/2021112000075800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'相性チャンネル', 'Image':'imgs/2021112000075800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケッチ', 'Image':'imgs/2021111920473600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'フレンドリィショップ', 'Image':'imgs/2021111920473800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'キャスター', 'Image':'imgs/2021111921084500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'きのみ', 'Image':'imgs/2021112000483000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ヨスガスーパーコンテストショー', 'Image':'imgs/2021112013464000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ホテルグランドレイク', 'Image':'imgs/2021112013531200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'フラワーショップいろとりどり', 'Image':'imgs/2021112013524700-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ヨスガふれあい広場', 'Image':'imgs/2021112013530300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'サイクルショップ自転車人力', 'Image':'imgs/2021112013532300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリデパート', 'Image':'imgs/2021112013532900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ノモセシティ大湿原サファリゲーム', 'Image':'imgs/2021112013533600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリシティファッションスタイルゆびをふる', 'Image':'imgs/2021112015303900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ナギサ市場', 'Image':'imgs/2021112116005600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'バトルタワー', 'Image':'imgs/2021112315342800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'各種ニュース', 'Image':'imgs/2021111921084500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'壁画', 'Image':'imgs/2021112501174500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'ポケッチカンパニー', 'Image':'imgs/2021111921560900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'黒板', 'Image':'imgs/2021111921471900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
{'Id':'', 'Sinnoh':'', 'Alt':'トバリデパートのフロア', 'Image':'imgs/2021112017463200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
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