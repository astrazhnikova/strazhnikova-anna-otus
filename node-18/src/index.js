import {seller, user, product, cart, order} from "./db"

const resolvers = {
  Query: {
    products: () => {
      return products
    },
    product: (id) => {
      return products.find(product => product.id === id)
    },
    users: () => {
      return users
    },
    user: (id) => {
      return users.find(user => user.id === id)
    },
    orders: () => {
      return orders
    },
    order: (id) => {
      return orders.find(order => order.id === id)
    },
	cards: () => {
      return cards
    },
    cards: (id) => {
      return cards.find(card => card.id === id)
    },
	sellers: () => {
      return sellers
    },
    sellers: (id) => {
      return sellers.find(seller => seller.id === id)
    }
  },
  Mutation: {
    createUser: ( id, name, email ) => {
      const newUser = { id, name, email };
      users.push(newUser);
      return newUser;
    },
    updateUser: ( id, name, email ) => {
      let newUser = users.find(user => user.id === id);

      newUser.name = name;
      newUser.email = email;

      return newUser;
    },
    deleteUser: (id) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) throw new Error("User not found.");
      const deletedUsers = users.splice(userIndex, 1);
      return deletedUsers[0];
    },
	
    createProduct: ( id, name, price, count, seller ) => {
      const newProduct = { id, name, price, count, seller };
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: ( id, name, price, count, seller ) => {
      let newProduct = products.find(item => item.id === id);
      
      newProduct.name = name;
      newProduct.price = price;
      newProduct.seller = seller;
      newProduct.count = count;

      return newProduct;
    },
    deleteProduct: (id) => {
      const productIndex = products.findIndex(item => item.id === id);
      if (productIndex === -1) throw new Error("Product not found.");
      const deletedProduct = products.splice(productIndex, 1);
      return deletedProduct[0];
    },
	
    createOrder: (id, user, product, count, price, payCard):) => {
      const newOrder = {id, user, product, count, price, payCard}
      orders.push(newOrder);
      return newOrder
    },
    deleteOrder: (id) => {
      const orderIndex = orders.findIndex(order => order.id === id);
      if (orderIndex === -1) throw new Error("Order not found.");
      const deletedorder = orders.splice(orderIndex, 1);
      return deletedorder[0];
    }
  }
}

export default resolvers