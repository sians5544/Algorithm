'use Strict';

const getuser =()=>
    new Promise((resolve, reject) => {
        id = prompt('enter your id');
        password = prompt('enter your passward');
        resolve(id,password);
    }); 

const loginUser = (id,password) => 
    new Promise((resolve, reject) =>{
        setTimeout(() => {
            if((id === 'ellie' && password ==='dream') ||(id == 'coder' && password === 'academy'))
            {
                resolve(id);
            }
            else{
                reject(new Error('not found'));
            }
        }, 2000);
    }); //1초있다가 치킨을 리턴
    
const getRoles = id =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id === 'ellie'){
                const user =  {name: 'ellie', role:'admin'}; 
                console.log(`name:${user.name} , role:${user.role}`);
                resolve(user);
            }else{
                reject(new Error('not found'));
            }
        },1000);
        
    }); 

    // userWithRole =>{
    //     alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} roll`);
    // },
    // error =>{
    //     console.log(error);
    // }
    getuser()
    .then(id ,passward => loginUser(id,passward))
    .then(id => getRoles(id))
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} roll`))
    .catch(console.log);




