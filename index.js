// Add your Circle class here

class circle {
  
  constructor (radius){
    this.radius = radius;
  }
  
  get diameter(){
     return this.radius*2;
  }
  set diameter(diameter){
     this.radius = diameter/2;
  }
  
  get circumference(){
    return Math.PI * this.radius * 2;
  }
  
  set circumference(circumference){
     this.radius = circumference/( Math.PI );
  } 
 
  get area(){
    return MATH.PI * this.radius * this.radius;
  }
 
  set area(area){
    this.radius=Math.sqrt(area/(Math.PI));
  }
}