export class CustomerService {
    private customers: any[] = [];
  
    constructor() {}
  
    /*no lo pense mucho este...
    getCustomersByBalance(minBalance: number): any[] {
      return this.customers.filter(c => c.balance >= minBalance);
    }*/
  
    
    getCustomerById(id: number): any | undefined {
      return this.customers.find(c => c.id === id);
    }
  
   
    searchCustomerByName(query: string): any[] {
      return this.customers.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.lastName.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    updateCustomer(id: number, updatedData: any): void {
      const index = this.customers.findIndex(c => c.id === id);
      if (index !== -1) {
        this.customers[index] = { ...this.customers[index], ...updatedData };
      }
    }
  
    deleteCustomer(id: number): void {
      this.customers = this.customers.filter(c => c.id !== id);
    }
  }
  