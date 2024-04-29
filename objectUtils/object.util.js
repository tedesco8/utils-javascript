export const dynamicSteps = (claims) => {
  //Organize the claims in each step
  let _steps = {};
  //We assume that the claim entity comes with the property step and itemNumber
  claims.forEach((_claim) => {
    if (_steps.hasOwnProperty(`${_claim.step}`)) {
      Object.entries(_steps).forEach(
        ([key]) => key == _claim.step && _steps[key].push(_claim)
      );
      return;
    }

    _steps[`${_claim.step}`] = [_claim];
  });

  //We order the claims by the itemNumber key
  Object.entries(_steps).forEach(([key]) =>
    _steps[key].sort((a, b) => a.itemNumber - b.itemNumber)
  );

  return _steps; //Example return {1: [cialm1, claim2, claim3], 2: [claim4, claim5, claim6]}
};

export const getFromJson = (json, prop) => {
  if (Object.keys(json).includes(prop)) {
    return json[prop];
  }
  return null;
};
