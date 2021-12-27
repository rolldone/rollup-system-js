/* "Its Killer Feature!", Share Component Viat Boot Wrapper */
var components = {};
export const setComponent = function (whatComponent, func) {
  components[whatComponent] = func;
}
export const getComponent = function (whatComponent, warningTime = 0) {
  return new Promise(async function (resolve, reject) {
    if (components[whatComponent] == null) {
      // console.log('warningTime',warningTime);
      if (warningTime == 10000) {
        throw new Error(
          `Whoops you forgot create or "import on laravel or your framework templating import" this component with this name "${whatComponent}" , please check beginning!`
        );
      }
      warningTime += 1;
      setTimeout(async () => {
        resolve(await getComponent(whatComponent, warningTime));
      }, 100);
      return;
    }
    resolve(components[whatComponent]);
  });
};

export const download = function (whatPath) {
  return new Promise(async function (resolve) {
    let gg = await System.import(whatPath);
    resolve(gg);
  })
}

export { components };