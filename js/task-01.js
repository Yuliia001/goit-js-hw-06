const itemsAll = document.querySelectorAll('.item');
console.log('Number of categories:', itemsAll.length);

// itemsAll.forEach(function (item) {
//     console.log(`Category: ${item.children[0].textContent}`);
//     console.log(`Elements: ${item.children[1].children.length}`);
// }); 

itemsAll.forEach((item) => {
    console.log("Category:", item.querySelector('h2').textContent);
    console.log("Elements:", item.querySelector('li').length);
}); 