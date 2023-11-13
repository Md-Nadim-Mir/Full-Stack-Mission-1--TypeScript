{
    interface Product {
        name: string;
        price: number;
        quantity: number;
      }
      
      function calculateTotalCost(products: Product[]): number {

        let totalCost:number = 0;

        for (const product of products) {
          totalCost += product.price * product.quantity;
        }
        return totalCost;

      }
      
     
      const shoppingCart: Product[] = [
        { name: 'Shirt', price: 600, quantity: 1 },
        { name: 'Pant', price: 800, quantity: 2 },
        { name: 'Sunglass', price: 250, quantity: 3 },
      ];
      
     
      const totalCost = calculateTotalCost(shoppingCart);
      console.log('Total cost of the shopping cart:', totalCost); 
      
}