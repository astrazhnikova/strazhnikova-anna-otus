class MyTree extends HTMLElement {

  constructor() {
	// вызываем родительский конструктор
    super();
	// добавляеv теневое DOM дерево к текущему и возвращает ссылку на его корневой элемент созданного дерева
	// открывая режим инкапсуляции
    this.shadow = this.attachShadow({mode: 'open'});
  }


  // рендеринг
  render() {
// вытаскиваем данные для рендеринга
    let data = this.getAttribute('data');
    data = JSON.parse(data);
    this.name = data.id;

    const name = document.createElement('h2');
    name.innerHTML = `id: ${this.name}`
    this.shadow.appendChild(name)

    data.items.forEach(el => {
	// Пытаемся понять это уже лист или у нас список
      const child = (Array.isArray(el.items) && el.items.length > 0) ? new MyTree() : new MyLeaf()
      child.setAttribute('data', JSON.stringify(el));
      this.shadow.appendChild(child)
    });
  }

	// метод вызывается при добавлении элемента в документ
  connectedCallback() {
	// добавляем красивых отступов
    const style = document.createElement('style');
    const styles = `my-tree, my-leaf {
        margin-left: 20px;
        display: block;
      }`;

    style.innerHTML = styles;
    this.shadow.appendChild(style)
  }

	//
  static get observedAttributes() { 
    return ['data'];
  }


// вызывается при изменении геттера observedAttributes()
  attributeChangedCallback() { 
    this.render();
  }
}

customElements.define('my-tree', MyTree);