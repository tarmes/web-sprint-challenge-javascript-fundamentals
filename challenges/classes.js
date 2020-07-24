// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(arr){
    this.length = arr.length;
    this.width = arr.width;
    this.height = arr.height
}


// class CubeMaker{
//     constructor(arr2){
//         this.length = arr2.length;
//         this.width = arr2.width;
//         this.height = arr2.height;
//     }

//     volume(){
//         return this.length * this.width*  this.height;
//     }

//     sufaceArea(){
//         return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//     }

// }

volume(){
    return this.length*this.width*this.height
}

surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
}
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
});

class CubeMaker extends CuboidMaker2{
    constructor(arr) {
        super(arr);
    }

    volume(){
        return this.length*this.width*this.height
    }
    
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }

}

const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
})

// const cuboid2 = new CuboidMaker2(4, 5, 5); 

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.