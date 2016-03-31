function Person() {
  this.think = function(callback) { // 定义Person对象的think方法
    setTimeout(function() {
      console.log("thinking~~~!");
      callback()
    }, 5000);
  }
  this.answer = function() { // 定义Person对象的answer方法
    console.log("I am answering other question");
  }
}

var person = new Person();
person.think(function() {
  console.log("thinking 5 second, get the right answer!");
});
person.answer();
