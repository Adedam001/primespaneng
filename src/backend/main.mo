import List "mo:core/List";
import ServiceTypes "types/services";
import CaseStudyTypes "types/caseStudies";
import ContactTypes "types/contacts";
import ServicesApi "mixins/services-api";
import CaseStudiesApi "mixins/caseStudies-api";
import ContactsApi "mixins/contacts-api";

actor {
  let services = List.empty<ServiceTypes.Service>();
  let caseStudies = List.empty<CaseStudyTypes.CaseStudy>();
  let contacts = List.empty<ContactTypes.ContactSubmission>();

  include ServicesApi(services);
  include CaseStudiesApi(caseStudies);
  include ContactsApi(contacts);
};
