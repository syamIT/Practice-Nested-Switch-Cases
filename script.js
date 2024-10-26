// Movie Ticket Booking System

// Problem: Create a program for booking movie tickets where a user chooses a movie and seat category. The options should be:

// Movie:

// Action: Standard Seat - 10rs, VIP Seat - 20rs

// Comedy: Standard Seat - 8rs, VIP Seat - 15rs

// Drama: Standard Seat -6rs, VIP Seat - 12rs

let movie_Cat = prompt("Enter Movie Category : ").toLowerCase()
let seatType = prompt("Enter Seat Type : ").toLowerCase()
switch(movie_Cat){
    case "action":
        switch(seatType){
            case "standard":
                console.log("10rs");
                break;
            case "vip":
                console.log("20rs");
                break;

        }
    break;
    case "comedy":
        switch(seatType){
            case "standard":
                console.log("8rs");
                break;
            case "vip":
                console.log("15rs");
                break;
        }
    break;
    case "drama":
        switch(seatType){
            case "standard":
                console.log("6rs");
                break;
            case "vip":
                console.log("12rs");
                break;
        }
        break;
}







// 10k karunakar Sir Office: Design a program that calculates discounts based on product categories (Electronics, Clothing, Grocery). Each category has specific discount rates for different products:

// Electronics: Mobile - 5%, Laptop - 10%

// Clothing: Men - 15%, Women - 20%

// Grocery: Fruits - 5%, Vegetables - 10%

let pro_categories = prompt("Enter product categories : ").toLowerCase();
let product = prompt("Enter product name : ").toLowerCase();

switch(pro_categories){
    case "electronics":
        switch(product){
            case "mobile":
                console.log("5%");
                break;
            case "laptop":
                console.log("10%");
                break;
        }
    break;
    case "cloths":
        switch(product){
            case "men":
                console.log("15%");
                break;
            case "women":
                console.log("20%");
                break;
        }
    break;
    case "grocery":
        switch(product){
            case "fruits":
                console.log("15%");
                break;
            case "vegetables":
                console.log("10%");
                break;
        }
    break;
}







// 10k karunakar Sir Office: Write a travel booking system that allows a user to select a mode of transport (Flight, Train, Bus) and then choose a class or category:

// Flight: Economy, Business

// Train: Sleeper, AC Class

// Bus: Standard, Luxury

let modeOfTransport = prompt("Enter mode of transport : ").toLowerCase();
let transport_cat = prompt("Enter transport class : ").toLowerCase();
switch (modeOfTransport) {
  case "flight":
    switch (transport_cat) {
      case "economy":
        console.log("You are selected economy class");
        break;
      case "business":
        console.log("You are selected business class");
        break;
    }
    break;
  case "train":
    switch (transport_cat) {
      case "sleeper":
        console.log("You are selected sleeper class");
        break;
      case "ac":
        console.log("You are selected ac class");
        break;
    }
    break;
    case "bus":
        switch(transport_cat){
            case "standard":
                console.log("You are selected standard class");
                break;
            case "luxury":
                console.log("You are selected luxury class");
                break;
        }
        break;
}
