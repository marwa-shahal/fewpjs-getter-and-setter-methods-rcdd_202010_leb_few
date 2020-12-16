// Add your Circle class here
class circle {
  constructor (radius){
    this.radius=radius;
  }
  set diameter(){
     return this.radius*2;
  }
  set circumference(){
    return Math.PI*this.radius*2;
  }
  get area(){
    return MATH.PI*this.radius**2
  }
}