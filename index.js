// Code your solution in this file!

let pickup;
function distanceFromHqInBlocks(pickup){
let hq = 42;
    if(pickup > 42){
        return (pickup - hq)
    }else{
        return (hq - pickup);
    }
}


function distanceFromHqInFeet(pickup){
        return (distanceFromHqInBlocks(pickup) * 264);
}

function distanceTravelledInFeet(start, end){
    if(start < end){
    return ((end - start)* 264);
    }else{
return ((start - end) * 264)
    }
}

function calculatesFarePrice(start, destination){
       let dist =  distanceTravelledInFeet(start, destination)

       if(dist <= 400){
        return 0;
       }else if(dist > 400  && dist <= 2000){
           return ((dist - 400) * 0.02)
       }else if(dist >= 2000 && dist < 2500){
            return (25);
       }else{
            return 'cannot travel that far'
       }
}