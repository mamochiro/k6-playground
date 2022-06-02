import script1 from "./script1.js";
import script2 from "./script2.js";
import { sleep, group } from "k6";

export default (data) => {
  group("script1", () => {
    script1();
  });
  group("script2", () => {
    script2();
  });
  sleep(1);
};
