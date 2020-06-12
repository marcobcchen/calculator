export const stringConcat = (nowNum: string, originNum: string) => {
  let num = ''
  // 開頭為0並且後面沒有數字
  const reg1 = /^0$/
  // 開頭至少有一次0-9數字 中間可以沒有或有一個點 後面有無限個或沒有0-9數字
  // \d = [0-9]
  const reg2 = /^\d+\.?\d*$/

  if(reg1.test(originNum) && nowNum !== '.'){
    num = nowNum
  }else{
    if(reg2.test(originNum + nowNum)){
      num = originNum + nowNum
    }else{
      num = originNum
    }
  }

  return num
}

export const isNumber = (num: string) => {
  // 檢查是否為0~9或小數點
  const reg = /[0-9]|\./
  const checkNumber =  reg.test(num)
 
  return checkNumber
}

//add, subtract, multiply and divide

const stash: number[] = []
// export const isClickFunction: boolean = false
export const cancel = () => {
  stash.splice(0, stash.length)
  // console.log(stash)
}

export const add = (num: string) => {
  // isClickFunction = true
  // let result = 0
  
  // if(stash.length < 2){
    
  // }
  // stash.push(Number(num))
  
  // if(stash.length > 1){
  //   result = stash[0] + stash[1]
  //   stash[0] = result
  //   stash.pop()
  // }else{
  //   result = stash[0]
  // }
  // console.log(stash)

  // return result.toString()
}

export const equal = () =>{

}