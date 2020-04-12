// Реализация получаения уникального селектора
// на основе псевдокласса :nth-child (по нумерации элемента в дереве)
function getPath(html_elem){
	
	if(!html_elem) {
		throw new Error('Не задан элемент')
	}
	
	let path = ''

	function trackPath(elem) {
		// получаем имя узла и переводим в нижний регистр
		let itemName = elem.nodeName.toLowerCase(),
        itemParent = elem.parentNode,
        itemNth = ''

		// Проверяем есть ли у элемента родитель 
		if(itemParent && itemParent.children.length > 1) {
			itemNth = Array.prototype.indexOf.call(itemParent.children, elem)
			// если элемент не один под родителем, записываеем его по номеру
			itemNth = `:nth-child(${itemNth+1})`
		}

		// если был один элемент, то itemNth - остается пустым
		path = `${itemName}${itemNth}>${path}`

		// если еще есть родитель, необходимо повторить для него
		if(itemParent) {
			trackPath(itemParent)
		}

	}
	
	trackPath(html_elem)
  
	// убираем в конце лишнюю ">"
	path = path.substring(0, path.length - 1)
  
	return path
}