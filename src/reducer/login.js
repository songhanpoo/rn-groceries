
const initSt =  {
  token:[],
  isLogin:false,
}

const loginReducer = (st=initSt,ac)=>{
  switch(ac.type) {
    case 'LOGIN':{
      return st;
      break;
    }
    default:
      return st;
  }
}

export default loginReducer;