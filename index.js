// Add your Circle class here

class circle {
  constructor (radius){
    this.radius = radius;
  }
  get diameter(){
     return this.radius*2;
  }
  set diameter(diameter){
     this.radius=this.diameter/2;
  }
  get circumference(){
    return Math.PI * this.radius * 2;
  }
  get area(){
    return MATH.PI * this.radius * this.radius;
  }
 
  } set circumference(circumference){
     this.circumference=circumference;
  set area(area){
    this.area=area;
  }
}