
//CLASS IN TS 
class myClass
{
    //we dont want to specify as this is let or var if its in inside the class
    // private x : number; //acess modifiers
    // y : number;
    // z : number;
    
    //constructor declaration in ts
    constructor(private x?:number,public y?:number, public z?:number) //u can simplify ur code with this way too
    //here the ? mark indicate this parameters are optional (its not mandotory to give as a parameter)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    //we dont want to specify as this is let or var or function  if its in inside the class
   private myFunction(){
        console.log(this.x ,this.y,this.z);
        
    }
    myFunctionTwo = () :any =>{
        console.log("from myfunctiontwo");
       this.myFunction();
    }

    //getter and setter in ts 
    get get_x(){
     return this.x;
    }
    set set_x(x){
        this.x = x;
    }
}

//OBJECT IN TS
let a =new myClass(1 , 2 ,2);
a.myFunctionTwo();
a.set_x =5;
console.log(a.get_x);