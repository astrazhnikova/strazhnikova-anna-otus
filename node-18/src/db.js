const sellers  = [
	{ id: '1', name: 'seller 1', license: 55532, info: 'Main Seller'}, 
	{ id: '2', name: 'seller 2', license: 22222},
	{ id: '3', name: 'seller 3', license: 33333, info: 'second'}
}


const users = [
	{ id: '1', name: 'user 1', email: 'user1@mail.ru',	phone: 89161112233,	cards: 1},
	{ id: '2', name: 'user 2', email: 'user2@mail.ru',	phone: 89161112299,	cards: 3},
	{ id: '3', name: 'user 3', email: 'user3@mail.ru',	cards: 2}
}

const products = [
	{id: '1', name: 'product 1', price: 50.55,	count: 15,	seller: 1,	color: 'blue', height: 55.5, width: 45.5},
	{id: '2', name: 'product 2', price: 40.00,	count: 10,	seller: 2},
	{id: '3', name: 'product 3', price: 30.3,	count: 5,	seller: 1,	color: 'red'}
	
}

const carts = [
	{ id: '1', name: 'card1', number: 2222000022220000},
	{ id: '2', name: 'card2', number: 2222000022220002},
	{ id: '3', name: 'card3', number: 2222000022220003}
}


const orders = [
	{id: '1', user: '1', product: '3',	count: 5, price: 151.5,	payCard: '1'},
	{id: '2', user: '3', product: '1',	count: 5, price: 252.755,	payCard: '2'},
	{id: '3', user: '2', product: '1',	count: 1, price: 50.55,	payCard: '3'}
}

const db = {seller, user, product, cart, order }

export { db as default }