var poppopulationArray = [], maxPopulation = 0, isOverPopulated = false;
poppopulationArray = [60000, 40000, 50000, 120000, 12];
maxPopulation = 40000;
isMostPopulated = true;
poppopulationArray[0] > maxPopulation ? console.log("larger") : (poppopulationArray[0] === maxPopulation ? console.log("equal") : console.log("its smaller"));
poppopulationArray[1] > maxPopulation ? console.log("larger") : (poppopulationArray[1] === maxPopulation ? console.log("equal") : console.log("its smaller"));
poppopulationArray[2] > maxPopulation ? console.log("larger") : (poppopulationArray[2] === maxPopulation ? console.log("equal") : console.log("its smaller"));
poppopulationArray[3] > maxPopulation ? console.log("larger") : (poppopulationArray[3] === maxPopulation ? console.log("equal") : console.log("its smaller"));
poppopulationArray[4] > maxPopulation ? console.log("larger") : (poppopulationArray[4] === maxPopulation ? console.log("equal") : console.log("its smaller"));

if (((poppopulationArray[4]+poppopulationArray[3]+poppopulationArray[2]<100000) && maxPopulation < 100000) || isOverPopulated ===false)
{
 console.log("“Small cities!!!");
}
else
{
    console.log("large cities!!!");
}