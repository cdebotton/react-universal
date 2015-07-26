import reactMixin from "react-mixin";

export default function addMixin(mixin) {
  return (reactClass) => reactMixin.onClass(reactClass, mixin);
}
