import List "mo:core/List";
import Time "mo:core/Time";
import ContactsLib "../lib/contacts";
import ContactTypes "../types/contacts";

mixin (contacts : List.List<ContactTypes.ContactSubmission>) {
  public func submitContact(
    name : Text,
    company : Text,
    email : Text,
    projectScope : Text,
  ) : async ContactTypes.ContactSubmission {
    let nextId = contacts.size();
    ContactsLib.submit(
      contacts,
      nextId,
      name,
      company,
      email,
      projectScope,
      Time.now(),
    );
  };

  public query func getContactSubmissions() : async [ContactTypes.ContactSubmission] {
    ContactsLib.getAll(contacts);
  };
};
