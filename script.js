class Uberprice{
   constructor(pricefor1KM,travellingdistance){
     this.pricefor1KM=pricefor1KM;
     this.travellingdistance=travellingdistance;
     }
     getprice(){
       return this.pricefor1KM*this.travellingdistance;
       }
   }

 
 var a=new Uberprice(10,8)
 console.log(a.getprice());
