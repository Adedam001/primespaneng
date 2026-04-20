import List "mo:core/List";
import Types "../types/caseStudies";

module {
  public type CaseStudy = Types.CaseStudy;

  public func seedIfEmpty(caseStudies : List.List<CaseStudy>) {
    if (not caseStudies.isEmpty()) return;

    caseStudies.add({
      id = 1;
      title = "Seismic Retrofit of Highway Bridge — I-90 Corridor";
      industry = "Transportation";
      material = "Steel & Reinforced Concrete";
      challenge = "A critical 1960s-era steel girder highway bridge on the I-90 corridor was flagged during a routine DOT inspection as seismically deficient. The structure carried over 45,000 vehicles daily and could not be taken out of service. The retrofit needed to meet current AASHTO seismic design standards without significant traffic disruption.";
      approach = "PrimeSpan conducted a full finite element model of the existing structure in ANSYS, calibrated against ambient vibration measurements taken on site. We designed a steel cross-bracing retrofit system with seismic isolation bearings at each pier. Construction sequencing was developed with the state DOT to maintain two lanes of traffic throughout the 14-month project.";
      outcome = "The retrofitted bridge now exceeds current seismic performance objectives for a 1,000-year return period event. The project was completed 3 weeks ahead of schedule with zero lane closures exceeding 4 hours, earning a commendation from the state transportation authority.";
      metrics = [
        { name = "Project Duration"; value = "14 months" },
        { name = "Daily Traffic Maintained"; value = "45,000+ vehicles" },
        { name = "Seismic Performance Level"; value = "1,000-yr return period" },
        { name = "Schedule Performance"; value = "3 weeks early" },
      ];
      clientQuote = "PrimeSpan's team delivered a technically complex seismic retrofit on one of our busiest corridors with minimal disruption. Their engineering rigor and on-site coordination were exceptional.";
      isFeatured = true;
    });

    caseStudies.add({
      id = 2;
      title = "Offshore Platform Structural Assessment — Gulf of Mexico";
      industry = "Oil & Gas";
      material = "Structural Steel";
      challenge = "A deepwater production platform in the Gulf of Mexico required a life-extension structural assessment after 22 years of service. Fatigue cracking had been detected in three tubular joints, and the operator needed a fitness-for-service evaluation and repair design before the upcoming hurricane season.";
      approach = "Our team deployed to the platform for a 10-day structural inspection, collecting crack measurements, weld profiles, and corrosion data. Using API RP 2A and fracture mechanics analysis, we evaluated remaining fatigue life for all critical joints. Underwater weld repair specifications were developed in accordance with AWS D1.1 and reviewed by the operator's insurance underwriter.";
      outcome = "All three cracked joints were repaired ahead of hurricane season. The fitness-for-service report established a clear inspection and maintenance protocol that extended the platform's design life by 8 years, deferring a $120M decommissioning investment.";
      metrics = [
        { name = "Platform Age at Assessment"; value = "22 years" },
        { name = "Life Extension Achieved"; value = "8 years" },
        { name = "Decommissioning Deferred"; value = "$120M" },
        { name = "Inspection Duration"; value = "10 days on-site" },
      ];
      clientQuote = "The PrimeSpan assessment gave us the technical confidence to extend platform operations and defer a major capital expenditure. Their offshore experience and turnaround speed were critical.";
      isFeatured = true;
    });

    caseStudies.add({
      id = 3;
      title = "High-Rise Steel Frame Design — Downtown Commercial Tower";
      industry = "Commercial Construction";
      material = "Structural Steel & Post-Tensioned Concrete";
      challenge = "A 42-story mixed-use tower in a dense urban core required a structural system that minimized floor-to-floor height (to maximize lettable floors within a fixed planning height limit) while meeting stringent drift and acceleration performance criteria for occupant comfort under wind loading.";
      approach = "PrimeSpan developed a composite steel-concrete lateral system utilizing a concrete core with outrigger trusses at mechanical floors. Wind tunnel testing was coordinated with a specialist firm, and results were incorporated directly into the ETABS model for final design. The post-tensioned concrete podium was designed for differential settlement compatibility with the tower above.";
      outcome = "The structural system achieved a floor-to-floor height of 3.9m, enabling one additional lettable floor versus the original scheme. Wind-induced accelerations at the top occupied floor were reduced to 11 milli-g, well below the 15 milli-g occupant comfort threshold.";
      metrics = [
        { name = "Building Height"; value = "42 stories" },
        { name = "Floor-to-Floor Height"; value = "3.9m" },
        { name = "Wind Acceleration"; value = "11 milli-g (< 15 limit)" },
        { name = "Additional Lettable Floor"; value = "+1 floor vs. original" },
      ];
      clientQuote = "PrimeSpan's structural optimization directly impacted our project's bottom line. One additional floor in a CBD tower represents significant value — their engineering made that possible.";
      isFeatured = true;
    });

    caseStudies.add({
      id = 4;
      title = "Vibration Isolation for Precision Manufacturing Facility";
      industry = "Industrial Manufacturing";
      material = "Reinforced Concrete & Isolation Mounts";
      challenge = "A semiconductor manufacturer was experiencing unacceptable vibration levels on their lithography equipment caused by a nearby CNC machining floor. Equipment tolerances required floor vibration to remain below VC-D criteria (3.1 μm/s) to maintain product yield, but the existing floor slab was transmitting broadband vibration far exceeding this threshold.";
      approach = "PrimeSpan conducted a detailed vibration survey using triaxial accelerometers to map the vibration environment and identify dominant frequency content. A tuned mass damper (TMD) system was designed for the primary machining equipment, and a vibration-isolated concrete inertia pad was specified for the lithography zone. ANSYS was used to model the coupled floor-equipment system and predict post-mitigation performance.";
      outcome = "Post-installation measurements confirmed floor vibration in the lithography zone had been reduced to 2.4 μm/s, comfortably below the VC-D threshold. Product yield on the lithography line improved by 6.2% in the first quarter following completion.";
      metrics = [
        { name = "Vibration Limit (VC-D)"; value = "3.1 μm/s" },
        { name = "Achieved Vibration Level"; value = "2.4 μm/s" },
        { name = "Yield Improvement"; value = "+6.2% Q1 post-completion" },
        { name = "Equipment Downtime"; value = "Zero during retrofit" },
      ];
      clientQuote = "PrimeSpan solved a vibration problem that had stumped two previous consultants. Their combination of field measurement expertise and analytical capability was exactly what we needed.";
      isFeatured = false;
    });

    caseStudies.add({
      id = 5;
      title = "Water Treatment Plant Expansion — Municipal Infrastructure";
      industry = "Municipal Infrastructure";
      material = "Reinforced Concrete & Stainless Steel";
      challenge = "A mid-sized city needed to expand its water treatment plant capacity from 45 ML/day to 75 ML/day to serve a growing population. The expansion had to be constructed while maintaining continuous operation of the existing facility, and the site was constrained by an adjacent protected wetland requiring careful stormwater management.";
      approach = "PrimeSpan provided structural and mechanical engineering services for the new 30 ML/day treatment train. All structures were designed to ACI 350 liquid-retaining structure standards. Sequenced construction phasing was developed to allow tie-in of new process pipework to the operating plant during low-demand periods. Environmental compliance documentation was prepared in coordination with the site civil engineer.";
      outcome = "The expanded plant was commissioned on schedule and within the $18.4M structural and mechanical engineering contract scope. The facility has operated without process interruption since commissioning and received a clean audit result from the state water authority in the first year of expanded operation.";
      metrics = [
        { name = "Capacity Increase"; value = "45 → 75 ML/day" },
        { name = "Contract Value (S&M)"; value = "$18.4M" },
        { name = "Commissioning"; value = "On schedule" },
        { name = "Regulatory Audit"; value = "Clean — Year 1" },
      ];
      clientQuote = "Delivering a plant expansion without interrupting supply to 180,000 residents required precise engineering and coordination. PrimeSpan delivered on both counts.";
      isFeatured = false;
    });

    caseStudies.add({
      id = 6;
      title = "Combined Cycle Power Plant — Turbine Foundation Design";
      industry = "Power Generation";
      material = "Post-Tensioned Concrete";
      challenge = "A new 550 MW combined cycle gas turbine (CCGT) plant required turbine-generator pedestal foundations capable of withstanding high dynamic loads from the gas turbine (operating at 3,600 RPM) while limiting vibration transmission to adjacent structures. Foundation differential settlement limits were set at 3mm by the turbine OEM.";
      approach = "PrimeSpan designed a spring-isolated post-tensioned concrete tabletop foundation system. A dynamic finite element model was developed incorporating soil-structure interaction effects using site-specific geotechnical data. The model was used to tune isolation spring stiffness and verify that all OEM vibration limits were satisfied across the turbine operating speed range including transient run-up and coast-down.";
      outcome = "The foundation system was installed and aligned to OEM tolerances. Commissioning vibration measurements showed all pedestal vibration levels within OEM limits, and the plant achieved commercial operation on the contractual date. Post-COD monitoring has confirmed long-term settlement of less than 1.5mm across all bearing points.";
      metrics = [
        { name = "Plant Capacity"; value = "550 MW CCGT" },
        { name = "Turbine Speed"; value = "3,600 RPM" },
        { name = "Settlement Limit (OEM)"; value = "3mm" },
        { name = "Measured Settlement"; value = "< 1.5mm" },
      ];
      clientQuote = "The turbine foundation design was critical path for our COD commitment. PrimeSpan's dynamic analysis capability and deep OEM coordination experience made a technically difficult scope look straightforward.";
      isFeatured = false;
    });
  };

  public func getAll(caseStudies : List.List<CaseStudy>) : [CaseStudy] {
    caseStudies.toArray();
  };

  public func getById(caseStudies : List.List<CaseStudy>, id : Nat) : ?CaseStudy {
    caseStudies.find(func(cs) { cs.id == id });
  };

  public func getFeatured(caseStudies : List.List<CaseStudy>) : [CaseStudy] {
    caseStudies.filter(func(cs) { cs.isFeatured }).toArray();
  };
};
