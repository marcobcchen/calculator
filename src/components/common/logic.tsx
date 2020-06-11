const num: string[] = ['0']

export const stringConcat = (origin: string) => {
  // 先找尋有沒有重複的值 或 值不等於點的話
  if(!num.find((item) => item === origin) || origin !== '.'){
    if(origin === '.' && num[0] === '0'){
      num.push(origin) 
    }else{
      if(num[0] === '0' && num.length < 2){
        num.shift()
      }
      num.push(origin) 
    }
  }
  return num.join('')
}

export const isNumber = (num: string) => {
  const checkNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  
  return checkNumber.some((item) => num === item)
}