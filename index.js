// Add your Circle class here
const pi =  Math.PI
const sqrt = Math.sqrt

class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return 2 * pi * this.radius;
    }

    get area() {
        return pi * this.radius ** 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / ( pi * 2 )
    }

    set area( area ) {
        this.radius = sqrt( area / pi )
    }
} 