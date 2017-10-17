var btnNode = document.querySelector('button')
var frameBtnNodes = document.querySelectorAll('#frame .bottom a')
var frameNode = document.querySelector('#frame')
var bodyNode = document.querySelector('body')

function closeFrame() {
	frameNode.removeAttribute('class')
	bodyNode.removeAttribute('class')
}

btnNode.addEventListener('click', function (e) {
	frameNode.className = 'display'
	bodyNode.className = 'grey'
	e.stopPropagation()
})

frameBtnNodes[0].addEventListener('click', closeFrame)
frameBtnNodes[1].addEventListener('click', closeFrame)
bodyNode.addEventListener('click', function (e) {
	if (e.target.tagName.toLowerCase() === 'body') {
		frameNode.removeAttribute('class')
		bodyNode.removeAttribute('class')
	}
})