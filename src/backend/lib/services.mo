import List "mo:core/List";
import Types "../types/services";

module {
  public type Service = Types.Service;

  public func seedIfEmpty(services : List.List<Service>) {
    if (not services.isEmpty()) return;

    services.add({
      id = 1;
      name = "Structural Analysis";
      icon = "building";
      description = "Comprehensive structural analysis and design services for infrastructure projects, ensuring safety, compliance, and performance under all load conditions.";
      methodology = "We employ finite element analysis (FEA) using ANSYS to model complex structural systems under static, dynamic, and thermal loads. Our approach follows a rigorous multi-stage process: conceptual design, detailed analysis, peer review, and documentation in accordance with ISO 9001 quality management standards. Every deliverable is validated against applicable building codes and client specifications.";
      standards = ["ISO 9001", "AISC 360", "ASCE 7", "ACI 318", "AASHTO LRFD"];
      tools = ["ANSYS", "AutoCAD", "SAP2000", "ETABS", "Revit Structure"];
    });

    services.add({
      id = 2;
      name = "Mechanical Engineering";
      icon = "settings";
      description = "Full-spectrum mechanical engineering services including equipment design, vibration analysis, and lifecycle assessments for industrial and commercial facilities.";
      methodology = "Our mechanical engineering team applies advanced vibration analysis, rotordynamics, and fatigue assessment methodologies to resolve complex equipment challenges. We adhere to ASME standards throughout the design and analysis cycle. Using SolidWorks for 3D modeling and AutoCAD for detailed drafting, we deliver precise, fabrication-ready documentation with supporting analysis reports.";
      standards = ["ASME B31.3", "ASME VIII", "ISO 10816", "NEMA MG1", "API 610"];
      tools = ["SolidWorks", "AutoCAD", "ANSYS Mechanical", "MathCAD", "MATLAB"];
    });

    services.add({
      id = 3;
      name = "Project Management";
      icon = "clipboard";
      description = "End-to-end project management for complex engineering initiatives, delivering on-time and on-budget outcomes through disciplined planning, risk management, and stakeholder coordination.";
      methodology = "We implement critical path method (CPM) scheduling and earned value management (EVM) to maintain project visibility from initiation through closeout. Our risk management framework identifies, quantifies, and mitigates project risk using structured risk registers and Monte Carlo simulation. All project management activities are conducted in compliance with ISO 45001 occupational health and safety management standards, ensuring safe delivery environments for all stakeholders.";
      standards = ["ISO 45001", "PMI PMBOK", "ISO 21500", "OSHA 1926"];
      tools = ["MS Project", "Primavera P6", "BIM 360", "Procore", "Power BI"];
    });
  };

  public func getAll(services : List.List<Service>) : [Service] {
    services.toArray();
  };
};
