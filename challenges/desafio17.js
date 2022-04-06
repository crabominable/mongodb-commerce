db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: db.produtos.find({}).count(),
  },
);

db.resumoProdutos.find(
  {
    franquia: {
      $eq: "McDonalds",
    },
  },
  {
    franquia: 1,
    totalProdutos: 1,
    _id: 0,
  },
);