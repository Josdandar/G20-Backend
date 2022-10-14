const cake = {
  isRecipeRead: false,
  areIngredientsObtained: false,
  doughdone: false,
  bakedCake: false,
  decoratedCake: false,
};

const readRecipe = (cakeToBake) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cakeToBake.isRecipeRead = true;

      if (!cakeToBake.isRecipeRead) {
        reject("You have not read the recipe");
      }

      resolve(cakeToBake);
    }, 1000);
  });
};

const obtainIngredients = (ingredientsObtained) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ingredientsObtained.areIngredientsObtained = true;

      if (!ingredientsObtained.areIngredientsObtained) {
        reject("You have not obtain the ingredients");
      }

      resolve(ingredientsObtained);
    }, 1000);
  });
};

const makeDough = (doughMade) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      doughMade.doughdone = true;

      if (!doughMade.doughdone) {
        reject("You have not done the dough");
      }

      resolve(doughMade);
    }, 1000);
  });
};

const bakeCake = (cakeBaked) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cakeBaked.bakedCake = true;

      if (!cakeBaked.bakedCake) {
        reject("You have not baked the cake");
      }

      resolve(cakeBaked);
    }, 1000);
  });
};

const decorateCake = (cakeDecorated) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cakeDecorated.decoratedCake = true;

      if (!cakeDecorated.decoratedCake) {
        reject("You have not decorated your cake");
      }

      resolve(cakeDecorated);
    }, 1000);
  });
};

const cakeProcess = readRecipe({ ...cake });
cakeProcess
  .then((cakeProcess) => {
    obtainIngredients({ ...cakeProcess }).then((weGotIngredients) => {
      makeDough({ ...weGotIngredients }).then((doughMaking) => {
        bakeCake({ ...doughMaking }).then((bakingCake) => {
          decorateCake({ ...bakingCake }).then((decoratingCake) => {
            console.log(decoratingCake);
          });
        });
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
