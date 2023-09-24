function calculateTicketPrice(numTickets) {
      if (numTickets < 100) {
        return numTickets * 100;
      }
       else if (numTickets >= 100 && numTickets < 200) {
        const priceForFirst100 = 100 * 100; // 100 tickets at 100 taka each
        const priceForRest = (numTickets - 100) * 90; // Remaining tickets at 90 taka each
        return priceForFirst100 + priceForRest;
      }
       else {
        const priceForFirst100 = 100 * 100; // 100 tickets at 100 taka each
        const priceForNext100 = 100 * 90; // 100 tickets at 90 taka each
        const priceForRemaining = (numTickets - 200) * 70; // Remaining tickets at 70 taka each
        return priceForFirst100 + priceForNext100 + priceForRemaining;
      }
    }
    
    // Example usage:
    const numTickets = 250; // Change this to the number of tickets you want to purchase
    const totalPrice = calculateTicketPrice(numTickets);
    console.log(`Total price for ${numTickets} tickets: ${totalPrice} taka`);
    