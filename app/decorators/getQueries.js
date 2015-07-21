export default function getQueries(Component) {
  Component.getQuery = function(name, ...params) {
    return this.queries[name].apply(this, params);
  };

  return Component;
}
