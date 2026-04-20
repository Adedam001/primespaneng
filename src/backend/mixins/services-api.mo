import List "mo:core/List";
import ServicesLib "../lib/services";
import ServiceTypes "../types/services";

mixin (services : List.List<ServiceTypes.Service>) {
  public query func getServices() : async [ServiceTypes.Service] {
    ServicesLib.seedIfEmpty(services);
    ServicesLib.getAll(services);
  };
};
