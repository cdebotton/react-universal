import PrettyError from "pretty-error";

const pe = new PrettyError();

export default function() {
  return function* (next) {
    try {
      yield next;
    }
    catch (ex) {
      console.log(pe.render(ex));
    }
  };
}
