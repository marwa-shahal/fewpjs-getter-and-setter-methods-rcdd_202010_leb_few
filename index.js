// Add your Circle class here
class circle {
  constructor (radius){
    this.radius=radius;
  }
  get diameter(){
     return this.radius*2;
  }
  get circumference(){
    return Math.PI*this.radius*2;
  }
  get area(){
    return MATH.PI*this.radius**2
  }
}