function List(){
    const fruits = [
        {id:1, name: 'Apple', calories:95},
        {id:2, name:'orange', calories:45},
        {id:3, name:'banana',calories:70},
        {id:4,name:"grape",calories:68},
        {id:5, name:'pineapple', calories:37} 
      ];

    fruits.sort((a,b) => a.calories - b.calories);


    const listItems = fruits.map(fruit=><li key={fruit.id}> {fruit.name}:&nbsp; {fruit.calories}</li>);

    return(<ul>{listItems}</ul>);
}



export default List