class Circle{

   constructor(radius,color){
     this.radius=radius;
     this.color=color;
     }
     getarea(){
       return 3.1412*this.radius*this.radius
     }
     getcircumference(){
       return 2*3.1412*this.radius;
       }
     
     set changecolor(modifiedcolor){
       this.color=modifiedcolor;
       }
   
   }
 
 
 
 var b=new Circle(1,"red");
 b.changecolor="void";
 console.log(b.color);
 console.log(b.getarea());
 console.log(b.getcircumference());