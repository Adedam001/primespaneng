import List "mo:core/List";
import CaseStudiesLib "../lib/caseStudies";
import CaseStudyTypes "../types/caseStudies";

mixin (caseStudies : List.List<CaseStudyTypes.CaseStudy>) {
  public query func getCaseStudies() : async [CaseStudyTypes.CaseStudy] {
    CaseStudiesLib.seedIfEmpty(caseStudies);
    CaseStudiesLib.getAll(caseStudies);
  };

  public query func getCaseStudy(id : Nat) : async ?CaseStudyTypes.CaseStudy {
    CaseStudiesLib.seedIfEmpty(caseStudies);
    CaseStudiesLib.getById(caseStudies, id);
  };

  public query func getFeaturedCaseStudies() : async [CaseStudyTypes.CaseStudy] {
    CaseStudiesLib.seedIfEmpty(caseStudies);
    CaseStudiesLib.getFeatured(caseStudies);
  };
};
