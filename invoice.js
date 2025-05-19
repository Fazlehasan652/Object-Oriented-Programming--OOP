class Invoice {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
  }
  addItem(description, quantity, price) {
    this.items.push({
      description,
      quantity,
      price,
      total: quantity * price,
    });
  }
  printInvoice() {
    console.log(`\n----- Invoice for ${this.customerName}-----`);
    let grandTotal = 0;
    this.items.forEach((item, index) => {
      console.log(
        `\n${index + 1}.${item.description} - ${item.quantity} x ${
          item.price
        } = ${item.total}`
      );
      grandTotal += item.total;
    });
    console.log("\n_________________________");
    console.log(`Grand Total: BDT ${grandTotal}`);
  }
  static companyInfo(comName, address) {
    console.log(`\n🔧 ${comName} | GSTIN: ${address}\n`);
  }
}

const invoice = new Invoice("Rk Stationary");
invoice.addItem("pen", 10, 5);
invoice.addItem("Notebook", 20, 5);
invoice.addItem("Eraser", 20, 5);
invoice.addItem("pencile", 10, 5);
invoice.printInvoice();
Invoice.companyInfo("ABC Traders Ltd.", "1234567890"); // Static method - company info
