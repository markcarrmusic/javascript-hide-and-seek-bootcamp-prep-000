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
  for(let i = 0; i < parent.length; i++) {
    children.push(document.querySelectorAll('div#grand-node');
  }
  return children.pop().innerHTML;
}