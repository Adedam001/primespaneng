import Common "common";

module {
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    company : Text;
    email : Text;
    projectScope : Text;
    timestamp : Common.Timestamp;
  };
};
