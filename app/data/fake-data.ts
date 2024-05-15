const restaurants = [
  {
    id: 1,
    name: "Restix",
    tagline: "Conquer Cravings, Savor Sweets",
    description: "Hearty meals for hankerings and delicious sweet treats",
    address: {
      street: "Ratakatu 5",
      postalCode: "00100",
      city: "Helsinki",
    },
    phone: "040 123 45 56",
    email: "info@restix.fi",
    category: ["Hangry Helpers", "Sweet Endings"],
    menu: [
      {
        id: "d1",
        name: "Breakfast Helper Hero",
        description:
          "Scrambled eggs, bacon, sausage, cheese, hash browns, all wrapped up in a warm flour tortilla. This monster will banish your hanger faster than you can say 'breakfast burrito.'",
        price: 8.99,
        meal: "Breakfast",
        image: "/bur-001.jpeg",
      },
      {
        id: "d2",
        name: "Pizza My Heart",
        description:
          "A 16-inch pizza piled high with your choice of toppings. Perfect for when you need a cheesy, saucy intervention for your hanger.  Don't worry, we won't judge.",
        price: 12.49,
        meal: "Lunch/Dinner",
        image: "/piz-005.jpeg",
      },
      {
        id: "d3",
        name: "Nacho Average Hangry Fix",
        description:
          "A heaping plate of tortilla chips smothered in melty cheese, seasoned ground beef, black beans, pico de gallo, and all the fixings. Because sometimes, chips and salsa just don't cut it.",
        price: 10.99,
        meal: "Lunch/Dinner",
        image: "/nac-002.jpeg",
      },
      {
        id: "d4",
        name: "The I Regret Nothing Cheeseburger",
        description:
          "A double cheeseburger stacked high with all the classic fixings, plus fried pickles and onion rings. This is not for the faint of heart (or stomach), but it's guaranteed to satisfy your deepest cravings.",
        price: 14.5,
        meal: "Lunch/Dinner",
        image: "/bur-001.jpeg",
      },
      {
        id: "d5",
        name: "S'mores Ain't the Only Flame Broiled Delight",
        description:
          "A warm, gooey chocolate chip brownie topped with a toasted marshmallow and a generous scoop of vanilla ice cream. Because sometimes, you just gotta roast something (and then eat it).",
        price: 5.99,
        meal: "Dessert",
        image: "/bro-004.jpeg",
      },
    ],
  },
  {
    id: 2,
    name: "Poke Paradise",
    tagline: "Fresh Bowls, Endless Flavor",
    description:
      "Build your own poke bowl with fresh, delicious ingredients or choose one of our signature creations. Perfect for a healthy and satisfying meal.",
    address: {
      street: "Aallopojantie 17",
      postalCode: "00700",
      city: "Helsinki",
    },
    phone: "050 555 77 88",
    email: "aloha@pokeparadise.fi",
    category: ["Soup-er Stars", "Vegetarian Ventures"],
    menu: [
      {
        id: "d21",
        dishName: "Aloha Classic Poke",
        description:
          "Marinated ahi tuna, cucumber, avocado, red onion, seaweed salad, and our signature Aloha sauce on a bed of sushi rice. ",
        price: 12.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d22",
        dishName: "Spicy Sriracha Shrimp",
        description:
          "Spicy sriracha marinated shrimp, edamame, carrots, bell peppers, and crispy wonton strips tossed in a creamy sriracha mayo over sushi rice.",
        price: 14.5,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d23",
        dishName: "Veggie Lover's Delight",
        description:
          "Marinated tofu, mixed greens, edamame, cucumber, corn, vegan kimchi, and a light sesame dressing on brown rice.",
        price: 11.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d24",
        dishName: "Spicy Ahi Tuna Tacos",
        description:
          "Two soft tortillas filled with spicy ahi tuna, avocado, pickled cabbage, and our sriracha mayo. Served with a side of mango salsa.",
        price: 13.49,
        meal: "Lunch/Dinner",
        image: "",
      },
    ],
  },
  {
    id: 3,
    name: "Curry Up!",
    tagline: "Aromatic Adventures",
    description:
      "Explore the world of curries with our flavorful dishes from India, Thailand, and beyond. Vegan and vegetarian options available.",
    address: {
      street: "Iso Roobertinkatu 22",
      postalCode: "00120",
      city: "Helsinki",
    },
    phone: "09 876 54 32",
    email: "curryup@spiceitup.com",
    category: [
      "International Intrigue",
      "Vegetarian Ventures",
      "Adult Lunchables",
    ],
    menu: [
      {
        id: "d31",
        dishName: "Butter Chicken",
        description:
          "Tender chicken pieces simmered in a creamy tomato and butter sauce with aromatic spices. Served with basmati rice and naan bread.",
        price: 14.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d32",
        dishName: "Green Curry with Vegetables",
        description:
          "Aromatic green curry packed with fresh vegetables like eggplant, zucchini, and bell peppers in a coconut milk broth. Served with steamed jasmine rice.",
        price: 12.49,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d33",
        dishName: "Panang Curry with Tofu",
        description:
          "Red curry with a hint of sweetness, featuring pan-fried tofu, bell peppers, and green beans. Served with brown rice.",
        price: 11.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d34",
        dishName: "Lamb Rogan Josh",
        description:
          "Flavorful lamb curry cooked with onions, tomatoes, ginger, and a blend of Indian spices. Served with basmati rice and naan bread.",
        price: 16.5,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d35",
        dishName: "Thai Mango Curry with Shrimp",
        description:
          "Sweet and tangy mango curry with succulent shrimp, bell peppers, and red onion in a coconut milk broth. Served with steamed jasmine rice.",
        price: 15.99,
        meal: "Lunch/Dinner",
        image: "",
      },
    ],
  },
  {
    id: 4,
    name: "The Comfort Zone",
    tagline: "Classic Dishes, Warm Feels",
    description:
      "Indulge in your favorite comfort food classics. From mac and cheese to slow-cooked roasts, we've got something to warm your soul.",
    address: {
      street: "Yliopistonkatu 29",
      postalCode: "20100",
      city: "Turku",
    },
    phone: "02 234 12 98",
    email: "comfortfood@yourzone.fi",
    category: ["Adult Lunchables", "International Intrigue"],
    menu: [
      {
        id: "d41",
        dishName: "Homestyle Mac and Cheese",
        description:
          "Creamy macaroni and cheese baked to golden perfection with a crispy breadcrumb topping. Pure comfort food bliss!",
        price: 10.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d42",
        dishName: "Grandma's Meatloaf with Mashed Potatoes",
        description:
          "A classic meatloaf recipe smothered in a rich tomato glaze, served with creamy mashed potatoes and seasonal vegetables.",
        price: 14.5,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d43",
        dishName: "Chicken Pot Pie with Puff Pastry Crust",
        description:
          "Tender chicken, vegetables, and a savory gravy all tucked into a flaky puff pastry crust. A heartwarming classic.",
        price: 12.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d44",
        dishName: "Classic Cheeseburger with Fries",
        description:
          "A juicy all-beef patty topped with melted cheese, lettuce, tomato, onion, and pickles on a toasted bun. Served with a side of crispy fries.",
        price: 11.49,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d45",
        dishName: "Slow-Cooked Pulled Pork Sandwich",
        description:
          "Tender pulled pork slow-cooked to perfection, served on a toasted bun with BBQ sauce and coleslaw. A finger-licking good option!",
        price: 13.99,
        meal: "Lunch/Dinner",
        image: "",
      },
    ],
  },
  {
    id: 5,
    name: "The Crepe Escape",
    tagline: "Sweet & Savory Delights",
    description:
      "Escape to a world of delicious crepes. Choose from savory fillings for a satisfying lunch or indulge in our decadent sweet creations for a delightful treat.",
    address: {
      street: "Kauppakatu 10",
      postalCode: "70100",
      city: "Kuopio",
    },
    phone: "044 332 11 00",
    email: "crepeescape@sweetnsavory.com",
    category: ["Hangry Helpers", "Sweet Endings"],
    menu: [
      {
        id: "d51",
        dishName: "Ham & Cheese Crepe",
        description:
          "A classic savory crepe filled with sliced ham, melted Gruyere cheese, and a touch of Dijon mustard. Simple yet satisfying.",
        price: 9.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d52",
        dishName: "The BLT Crepe",
        description:
          "A twist on the classic BLT! Crispy bacon, lettuce, tomato, and a creamy avocado spread wrapped in a savory crepe.",
        price: 11.49,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d53",
        dishName: "Smoked Salmon & Cream Cheese Crepe",
        description:
          "Thinly sliced smoked salmon, creamy ricotta cheese, and a sprinkle of fresh dill for a luxurious and light lunch option.",
        price: 12.99,
        meal: "Lunch/Dinner",
        image: "",
      },
      {
        id: "d54",
        dishName: "Chocolate Dream Crepe",
        description:
          "A warm crepe filled with rich chocolate ganache, topped with fresh strawberries and whipped cream. A decadent dessert dream!",
        price: 7.99,
        meal: "Dessert",
        image: "",
      },
    ],
  },
];

export default restaurants;
