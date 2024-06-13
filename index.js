// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
 function displayMenuItems(menu) {
    const container = document.getElementById("menu")

    Object.entries(menu).forEach(([key,items]) => {
      const containerDiv = document.createElement("div");
       
      const menuTitle = document.createElement("h2");
      menuTitle.textContent = key;
      container.appendChild(containerDiv)
      containerDiv.appendChild(menuTitle)
    
       const menuList = document.createElement("ul");
      
      items.forEach(item => {
       
        const menuText = document.createElement("li");
        menuText.textContent = item;
        menuText.addEventListener("click" , () => {
            document.getElementById("order-items").textContent += item; 
           
         })
        menuList.appendChild(menuText);
      })
      
      
        containerDiv.appendChild(menuList);
    
    });  
            
 }

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
const orderItems = document.getElementById("order-items");
const orderTotal = document.getElementById("order-total");
    // Create a list item for the order
    
const orderList = document.createElement("li");
    // Set the text content of the list item to the item name
orderList.textContent = menuText;
    // Append the list item to the order items list
    
orderItems.appendChild(orderList);
     // Calculate and update the total price


var numTotal = parseFloat(orderTotal.textContent) 
var newTotal = numTotal + 50;
  // Update the text content of the order total element with the new total

    orderTotal.textContent = newTotal;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);    
}

// Start the menu system by calling the init function
initMenuSystem(menu);
