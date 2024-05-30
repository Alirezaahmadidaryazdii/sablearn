
const dataShop = []

function countDataShop(){
    let count=0;
    dataShop.forEach(()=>{
        count++;
    })
    return count;
}
function totalCountProduct(){
    let total=0;
    dataShop.forEach(item=>{
        total += item[0].price
    })
    return total
}
export {dataShop, countDataShop, totalCountProduct}