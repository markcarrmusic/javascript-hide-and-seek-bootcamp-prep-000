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
  var children = document.getElementById('grand-node').querySelectorAll('div');
  return children[children.length -1];
}