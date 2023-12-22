class Quark{
    constructor (color, flavor){
      this.color = color;
      this.flavor = flavor;
      this.baryon_number = 1/3;
    }
    interact(q2){
      let tempColor = q2.color;
      q2.color = this.color;
      this.color = tempColor;
    }
  }
  q1 = new Quark("red","up");
  q2 = new Quark("blue","strange");


  //This is a nice, more DRY version someone else posted
//   class Quark {
//     constructor(color, flavor) {
//       Object.assign(this, {color, flavor, baryon_number: 1 / 3});
//     }
  
//     interact(quark) {
//       [this.color, quark.color] = [quark.color, this.color];
//     }
//   }