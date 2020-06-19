const stash: number[] = []
let operator: string = ''
let isOperator: boolean = false

export const stringConcat = (nowNum: string, originNum: string) => {
  let num = ''
  // 檢查是否為0~9或小數點
  const reg1 = /[0-9]|\./
  // 檢查格式:
  // 開頭為0並且後面沒有數字
  const reg2 = /^0$/
  // 檢查格式:
  // 開頭至少有一次0-9數字、中間可以沒有或有一個點、後面有無限個或沒有0-9數字
  // \d = [0-9]
  const reg3 = /^\d+\.?\d*$/

  if(reg1.test(nowNum)){
    if(reg2.test(originNum) && nowNum !== '.'){
      num = nowNum
    }else{
      if(reg3.test(originNum + nowNum)){
        num = originNum + nowNum
      }else{
        num = originNum
      }
    }
  }
  putInStash(num)
  return num
}

const putInStash = (num: string) => {
  if(!isOperator){
    stash[0] = Number(num)
  }else{
    stash[1] = Number(num)
  }
}

export const cancel = () => {
  isOperator = false
  stash.splice(0, stash.length)
}

export const add = () => {
  console.log('add')
  return formula('add')
}

export const subtract = () => {
  console.log('subtract')
  return formula('subtract')
}

export const multiply = () => {
  return formula('multiply')
}

export const divide = () => {
  return formula('divide')
}

export const equal = () =>{
  return formula('equal')
}

const formula = (op: string) => {
  console.log(op, operator, stash)

  isOperator = true
  let result = 0

  if(op !== 'equal'){
    operator = op
  }
 
  if(stash.length === 0){
    result = 0
  }else{
    if(stash.length > 1){
      switch(operator){
        case 'add':
          result = stash[0] + stash[1]
          break
        case 'subtract':
          result = stash[0] - stash[1]
          break
        case 'multiply':
          result = stash[0] * stash[1]
          break
        case 'divide':
          result = stash[0] / stash[1]
          break
      }
      stash[0] = result
    }else{
      result = stash[0]
    }
  }
  
  return result.toString()
}