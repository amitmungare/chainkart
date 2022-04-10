import image from "./assets/product_img.png";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
  },
  {
    field: "productimg",
    headerName: "Product Image",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {console.log(params)}
          <img className="cellImg" src={params.value} alt="" />
          {params.row.productimg}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },

  {
    field: "catergory",
    headerName: "catergory",
    width: 200,
  },
  {
    field: "subcatergory",
    headerName: "Subcatergory",
    width: 100,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    product: "natraj pen",
    productimg: "",
    price: "4000",
    description: "black ink pen",
    catergory: "office supplies",
    subcatergory: "pen",
  },
  {
    id: 2,
    product: "nike shoes",
    productimg: "",
    price: "100",
    description: "running shoes",
    catergory: "shoes",
    subcatergory: "sports",
  },
  {
    id: 3,
    product: "samsung phone",
    productimg: "",
    price: "20000",
    description: "White,4GB RAM, 64GB storage",
    catergory: "electronics",
    subcatergory: "phone",
  },
  {
    id: 4,
    product: "Asus vivobook 15",
    productimg: "",
    price: "50000",
    description: "15.6 inch",
    catergory: "electronics",
    subcatergory: "laptop",
  },
  {
    id: 5,
    product: "The midnight library",
    productimg: "",
    price: "700",
    description: "bestseller book in fiction",
    catergory: "Books",
    subcatergory: "fiction",
  },
  {
    id: 6,
    product: "cello pen",
    productimg: "",
    price: "4000",
    description: "black ink pen",
    catergory: "office supplies",
    subcatergory: "pen",
  },
  {
    id: 7,
    product: "adidas shoes",
    productimg: "",
    price: "100",
    description: "running shoes",
    catergory: "shoes",
    subcatergory: "sports",
  },
  {
    id: 8,
    product: "nokia phone",
    productimg: "",
    price: "20000",
    description: "White,4GB RAM, 64GB storage",
    catergory: "electronics",
    subcatergory: "phone",
  },
  {
    id: 9,
    product: "Lenovo ideapad slim 3",
    productimg: "",
    price: "50000",
    description: "15.6 inch",
    catergory: "electronics",
    subcatergory: "laptop",
  },
  {
    id: 10,
    product: "The Alchemist",
    productimg: "",
    price: "700",
    description: "bestseller book in fiction",
    catergory: "Books",
    subcatergory: "fiction",
  },
];
