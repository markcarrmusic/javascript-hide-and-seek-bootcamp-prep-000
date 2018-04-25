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
  var parent = document.querySelectorAll('#grand-node');
  for(i = 0, children = []; i < parent.length; i++) {
    children.push(parent[i].toString());
  }
  return children.length -1;
}