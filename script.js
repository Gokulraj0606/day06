class Person{
   constructor(name,age,address,state,country,phonenumber){
   this.name=name;
   this.age=age;
   this.address=address;
   this.state=state;
   this.country=country;
   this.phonenumber=phonenumber;
   }
   getfullname(){
     return this.name+"doe";
     }
   }
 var a=new Person("john","23","22,anna nagar,chennai","tamil nadu","india","9876543210")
 
 console.log(a)
 console.log(a.getfullname());