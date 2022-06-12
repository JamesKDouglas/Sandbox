let list =[ -52, 56, 30, 29, -54, 0, -110 ]

var min = function(list){
    console.log(list);
      list.sort((a,b)=>{return (a-b)});
      return list[0];
  }
  
  var max = function(list){
      list.sort((a,b)=>{return(b-a)})
      return list[0];
  }

  console.log(min(list));

  console.log(max(list));