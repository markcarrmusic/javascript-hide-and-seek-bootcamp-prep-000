function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  var children = [];
  var parent = document.querySelector('#grand-node');
  for(let i = 0; i < parent.length; i++) {
    document.querySelector('div')
}