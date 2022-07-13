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
