"use strict";

function getProductsList() {
  return JSON.parse(json).goods;
}

function getProductsObject() {
  return JSON.parse(json).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}

const json = `{
  "goods": [
    {
      "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
      "name": "Куртка",
      "description": "Тонюсенькая куртка на демисезон",
      "price": 10000,
      "img": "images/featured/1.jpg"
    },
    {
      "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
      "name": "Костюм",
      "description": "Необычный женский костюм-двойка со стильным блейзером. Как говорится и в пир и в мир!",
      "price": 20000,
      "img": "images/featured/2.jpg"
    },
    {
      "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
      "name": "Худи",
      "description": "Странное худи в стиле а-ля-бомж",
      "price": 30000,
      "img": "images/featured/3.jpg"
    },
    {
      "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
      "name": "Футболка",
      "description": "Просто футболка. Чем проще - тем дороже",
      "price": 40000,
      "img": "images/featured/4.jpg"
    },
    {
      "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
      "name": "Пиджак",
      "description": "Женский пиджак нежно-голубого оттенка. Лаконично, стильно, дорого",
      "price": 50000,
      "img": "images/featured/5.jpg"
    },
    {
      "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
      "name": "Рубашка из льна",
      "description": "Отличный летний вариант для променада по набережной Майами",
      "price": 60000,
      "img": "images/featured/6.jpg"
    }
  ]
}`;
