const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

['과일', '채소'].forEach(category => {
  console.log(
    `${category}의 가격의 합:`,
    arr
    .filter(({cat}) => cat === category)
    .map(({price}) => price)
    .reduce((prev, curr) => prev + curr)
  );
});