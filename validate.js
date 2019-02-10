validateRows = (board)=>{
    let number = 0;
    for(let row of board){
      number++;
      let entryMap = {};
      for(let entry of row){
        entryMap[entry] = true;
      }
  
      for(let i = 1; i <= 9; i++){
        if(!entryMap[i]){
          console.log("Row " + number +" is not valid"); 
          return false;
        }
      }
    }
    return true;
  }
  
  validateColumns = (board)=>{
    let entryMap = {};
    for(let i = 1; i <= 9; i++){
      entryMap[i] = {};
    }
  
    for(let col = 1; col <= 9; col++){
      for(let row = 1; row <= 9; row++){
        let entry = board[row-1][col-1];
        entryMap[col][entry] = true;
      }
    }
  
    for(let i = 1; i <= 9; i++){
      columnEntryMap = entryMap[i];
      for(let j = 1; j <= 9; j++){
        if(!columnEntryMap[j]){
          console.log("Column " + i +" is not valid"); 
          return false;
        }
      }
    }
    return true;
  }
  
  validateSubboards = (board)=>{
    boardIndices = [0,3,6];
    // Cut board into subboards
    let result = true;
  
    for(let index of boardIndices){
      for(let indexY of boardIndices){
        let intermediateResult = validateSubboard(board, index, indexY);
        // console.log('Result at ', index, indexY, ': ', intermediateResult);
        result = result && intermediateResult;
      }
    }
  
    // for(let k = 0; k < 9; k++){
    //   result = result && validateSubboard(i);
    // }
    return result;
  }
  
  validateSubboard = (board, indexX, indexY)=>{
    // 3 X 3 board from x,y
    entryMap = {};
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let entry = board[indexX + j][indexY + i];
        entryMap[entry] = true;
      }
    }
    // console.log(entryMap);
    
    for(let i = 1; i <= 9; i++){
      if(!entryMap[i]){
        console.log("Sub Board "+ i + " is not valid") 
        return false;
      }
    }
    return true;
  }
  
  module.exports = {
    validateRows,
    validateColumns,
    validateSubboards
  
  }