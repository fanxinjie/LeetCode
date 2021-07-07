// 给你一个数组 orders，表示客户在餐厅中完成的订单，确切地说， orders[i]=[customerNamei,tableNumberi,foodItemi] ，其中 customerNamei 是客户的姓名，tableNumberi 是客户所在餐桌的桌号，而 foodItemi 是客户点的餐品名称。

// 请你返回该餐厅的 点菜展示表 。在这张表中，表中第一行为标题，其第一列为餐桌桌号 “Table” ，后面每一列都是按字母顺序排列的餐品名称。接下来每一行中的项则表示每张餐桌订购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。

// 注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序排列。

// 示例 1：

// 输入：orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
// 输出：[["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
// 解释：
// 点菜展示表如下所示：
// Table,Beef Burrito,Ceviche,Fried Chicken,Water
// 3    ,0           ,2      ,1            ,0
// 5    ,0           ,1      ,0            ,1
// 10   ,1           ,0      ,0            ,0
// 对于餐桌 3：David 点了 "Ceviche" 和 "Fried Chicken"，而 Rous 点了 "Ceviche"
// 而餐桌 5：Carla 点了 "Water" 和 "Ceviche"
// 餐桌 10：Corina 点了 "Beef Burrito" 
// 示例 2：

// 输入：orders = [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]
// 输出：[["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]] 
// 解释：
// 对于餐桌 1：Adam 和 Brianna 都点了 "Canadian Waffles"
// 而餐桌 12：James, Ratesh 和 Amadeus 都点了 "Fried Chicken"
// 示例 3：

// 输入：orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
// 输出：[["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]

// 0: (3)["David", "3", "Ceviche"]
// 1: (3)["Corina", "10", "Beef Burrito"]
// 2: (3)["David", "3", "Fried Chicken"]
// 3: (3)["Carla", "5", "Water"]
// 4: (3)["Carla", "5", "Ceviche"]
// 5: (3)["Rous", "3", "Ceviche"]

// Table,Beef Burrito,Ceviche,Fried Chicken,Water
// 3    ,0           ,2      ,1            ,0
// 5    ,0           ,1      ,0            ,1
// 10   ,1           ,0      ,0            ,0


/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let foodName = new Map(),
    tableNumber = new Map();

  for (let i = 0; i < orders.length; i++) {
    const ele = orders[i];
    foodName.set(ele[2], 0);

    let tableFood = tableNumber.get(ele[1]);
    if (!tableFood) {
      tableNumber.set(ele[1], {
        [ele[2]]: 1
      })
    } else if (tableFood[ele[2]]) {
      tableFood[ele[2]]++;
      tableNumber.set(ele[1], tableFood);
    } else if (!tableFood[ele[2]]) {
      tableFood[ele[2]] = 1;
      tableNumber.set(ele[1], tableFood);
    }
  }

  let menu = new Array(tableNumber.size + 1).fill(new Array(foodName.size + 1).fill(0));
  let data = Array.from(tableNumber).sort((a, b) => a[0] - b[0]);
  let data1 = Array.from(foodName).sort((a, b) => a[0] - b[0]);
  console.log('tableNumber ->', data)
  console.log('foodName ->', data1)
  console.log('menu', menu)

  let len = tableNumber.size + 1;
  for (let i = 0; i < len; i++) {

  }
};

let order = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"]
];
console.log('displayTable', displayTable(order))
