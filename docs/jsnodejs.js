//. jsnodejs.js
class MyNode {
  constructor( n = 1000 ){
    this.num = n;
  }

  pnum(){
    var results = [];

    for( var i = 2; i < this.num; i ++ ){
      var b = true;
      for( var j = 2; j < i && b; j ++ ){
        b = i % j;
      }
      if( b ){
        results.push( i );
      }
    }

    return results;
  }
}

//. Node.js 環境の場合は MyNode クラスを外部から利用可能にする
if( typeof module === 'object' ){
  module.exports = MyNode;
}
