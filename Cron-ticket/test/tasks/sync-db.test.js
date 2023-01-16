const { syncDb } = require("../../tasks/sync-db");

//agrupador de prueas
describe("pruebas en sync-db", () => {
    //preuba a realizarÏ
  test("deve ejecutar el proceso 2 veces", () => {
    const times = syncDb();
    console.log("se llamo", times);
  });
});