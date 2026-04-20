module {
  public type CaseStudyMetric = {
    name : Text;
    value : Text;
  };

  public type CaseStudy = {
    id : Nat;
    title : Text;
    industry : Text;
    material : Text;
    challenge : Text;
    approach : Text;
    outcome : Text;
    metrics : [CaseStudyMetric];
    clientQuote : Text;
    isFeatured : Bool;
  };
};
