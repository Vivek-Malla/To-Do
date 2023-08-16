export const addtodo =(title)=>{
    return{
       type:'ADDTODO',
       payload : title,
    }
};

export const deletetodo = (id) => {
    return{
        type:'DELETETODO',
        payload : id,
    }
};  

export const toggle = (id) => {
    return{
        type:'TOGGLE',
        payload : id,
    }
};  