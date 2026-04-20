import List "mo:core/List";
import Types "../types/contacts";
import Common "../types/common";

module {
  public type ContactSubmission = Types.ContactSubmission;

  public func submit(
    contacts : List.List<ContactSubmission>,
    nextId : Nat,
    name : Text,
    company : Text,
    email : Text,
    projectScope : Text,
    timestamp : Common.Timestamp,
  ) : ContactSubmission {
    let submission : ContactSubmission = {
      id = nextId;
      name;
      company;
      email;
      projectScope;
      timestamp;
    };
    contacts.add(submission);
    submission;
  };

  public func getAll(contacts : List.List<ContactSubmission>) : [ContactSubmission] {
    contacts.toArray();
  };
};
