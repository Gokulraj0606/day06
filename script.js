class Movie{
  constructor(title,studio,rating){
     this.title=title;
     this.studio=studio;
     this.rating="PG";
  }
  
  getPG(){
  return [this.rating];
  }
  set changetitle(modifiedtitle){
    this.title=modifiedtitle;
    }
    set changestudio(modifiedstudio){
    this.studio=modifiedstudio;
    }
    set changerating(modifiedrating){
    this.rating=modifiedrating;
    }
  
 }
 
 var a=new Movie("title","studio","rating");
 a.changetitle="Casino Royale"
 a.changestudio="Eon Productions"
 a.changerating="PG13"
 console.log(a.title);
 console.log(a.studio);
 console.log(a.rating);