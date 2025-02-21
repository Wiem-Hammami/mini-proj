 
const API_URL = "http://localhost:3000/orders";

export const placeOrder = async (orderData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",  
      },
      body: JSON.stringify(orderData), 
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};
