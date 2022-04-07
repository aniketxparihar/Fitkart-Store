import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    rating:"5",
    _id: uuid(),
    stock:true,
    best_seller:true,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/4_78b9279e-ebf0-4966-8837-3abf33f0c3c7_540x.jpg?v=1646453600",
    image_hover:"https://cdn.shopify.com/s/files/1/0477/1358/3267/products/pair_540x.jpg?v=1646453600",
    title: "Fitbell",
    price:"8000",
    actual_price: "10000",
    categoryName:["weights"]
  },
  {
    rating:"5",
    _id: uuid(),
    stock:true,
    best_seller: false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Shadow_featurve_900x.jpg?v=1648172616",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Final3sq_540x.jpg?v=1613245653",
    title: "Fitkettle",
    price: "6000",
    actual_price: "8000",
    categoryName:["weights"]
  },
  {
    rating:"3",
    _id: uuid(),
    stock:true,
    best_seller: false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/2_5a9d6dbf-95c5-4e65-ae2f-1f170e0a9260_540x.jpg?v=1632495932",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/2_5a9d6dbf-95c5-4e65-ae2f-1f170e0a9260_540x.jpg?v=1632495932",
    title: "Fitbar",
    price: "13000",
    actual_price: "15000",
    categoryName:["weights"]
  },
  {
    rating:"5",
    _id: uuid(),
    stock:true,
    best_seller: false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Orange_540x.jpg?v=1601847453",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Lilac_d3bdb8f7-3d17-4434-9778-3f0916155ce4_540x.jpg?v=1601847689",
    title: "Fitmat",
    price: "1500",
    actual_price: "2500",
    categoryName: ["yoga"]
  },
  {
    rating:"2",
    _id: uuid(),
    stock:false,
    best_seller: false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/BlockFinalUpdatedsoldout_540x.jpg?v=1619763507",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/BlockFinalUpdatedsoldout_540x.jpg?v=1619763507",
    title: "Fitblocks",
    price: "1000",
    actual_price: "1200",
    categoryName: ["yoga"]
  },
  {
    rating:"1",
    _id: uuid(),
    stock:true,
    best_seller: false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/ROpesized5_540x.png?v=1621712121",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/ROpesized5_540x.png?v=1621712121",
    title: "Fitrope",
    price: "1000",
    actual_price: "1100",
    categoryName: ["equipments"]
  },
  {
    rating:"4",
    _id: uuid(),
    stock:true,
    best_seller: false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Benchfinal_540x.jpg?v=1639229095",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Benchfinal_540x.jpg?v=1639229095",
    title: "Fitbench",
    price: "25000",
    actual_price: "30000",
    categoryName:["equipments"]
  },
  {
    rating:"4",
    _id: uuid(),
    stock:true,
    best_seller:false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/FoamRollerweb_540x.jpg?v=1613245656",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/FoamRollerweb_540x.jpg?v=1613245656",
    title: "Fitroller",
    price: "1300",
    actual_price: "1600",
    categoryName:["equipments"]
  },
  {
    rating:"4",
    _id: uuid(),
    stock:true,
    best_seller:false,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Sky-Blue-Light-Blue-Grey-2_540x.jpg?v=1627295742",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/FoamRollerweb_540x.jpg?v=1613245656",
    title: "Fitband",
    price: "2000",
    actual_price: "2200",
    categoryName:["equipments"]
  },
  {
    rating:"3",
    _id: uuid(),
    stock:false,
    best_seller:true,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/AMZCovernew_540x.jpg?v=1641894667",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/Blacksideonwhite_540x.jpg?v=1641894667",
    title: "Fitgun",
    price: "5000",
    actual_price: "5500",
    categoryName:["equipments"]
  },
  {
    rating:"3",
    _id: uuid(),
    stock:true,
    best_seller:true,
    image: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/BikePlusonwhite_900x.jpg?v=1642156666",
    image_hover: "https://cdn.shopify.com/s/files/1/0477/1358/3267/products/model___1641847789319_mid-0_900x.png?v=1646391362",
    title: "Fitmill",
    price: "60000",
    actual_price: "67000",
    categoryName: ["equipments"]
  },

];
