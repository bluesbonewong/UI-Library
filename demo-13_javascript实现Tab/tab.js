var tabUlNode = document.querySelector('.tabbar')
var contentUlNode = document.querySelector('.content')
var tabLiNodes = document.querySelectorAll('.tabbar li')

for (var i = 0; i < tabLiNodes.length; i++) {
	tabLiNodes[i].index = i
}

tabUlNode.addEventListener('click', function (e) {
	console.log(e.target.index)
	if (e.target.tagName.toLowerCase() === 'li') {
		for (var i = 0; i < tabUlNode.children.length; i++) {
			tabUlNode.children[i].className = ''
			contentUlNode.children[i].className = ''
		}
		e.target.className = 'click'
		contentUlNode.children[e.target.index].className = 'display'
	}
})