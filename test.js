async function makeTea() {
    console.log("Boiling water...");
    await boilWater();  // Waits for water to boil before moving on

    console.log("Adding tea leaves...");
    await addTeaLeaves();  // Waits for tea leaves to brew

    console.log("Adding milk and sugar...");
    await addMilkAndSugar();  // Waits for this to finish before serving

    console.log("Tea is ready! ☕");
}

makeTea()