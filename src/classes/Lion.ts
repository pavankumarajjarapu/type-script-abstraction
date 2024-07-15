import Animal from "./Animal";

class Lion extends Animal {
    constructor(){
        super()
    }
    foodHabits(): void {
        console.log("eats only non veg only.")
    }
    
    noOfLegs: number=4;
    noOfEyes: number=2;
    noOfTails= () => {
        console.log(`one`)
    };

    
}
export default Lion