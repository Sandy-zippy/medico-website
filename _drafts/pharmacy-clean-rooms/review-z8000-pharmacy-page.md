# Fact-check: CSA Z8000 pharmacy page + hub and hospital intros

Reviewed 2026-11-27. Files:
- pages/pharmacy-clean-rooms--csa-z8000-pharmacy.md (full page)
- pages/pharmacy-clean-rooms.md (front matter, H1, first paragraph)
- pages/pharmacy-clean-rooms--hospital-pharmacy.md (front matter, H1, first paragraph)

How I checked: against research-rules-buyers.md sections 1 to 3 and 5, and the live sources through WebFetch. Curl was blocked by the proxy, so I checked URLs by fetching each page. Every cited URL loaded and had content, including dev-www.csagroup.org.

Mechanical checks passed on all three files: no em or en dashes, no hype words, no "back room" framing. Titles are 51, 52 and 54 characters. Descriptions are 136, 154 and 135 characters. The Z8000 page is about 1,200 words.

Verified correct, against the research notes and the live sources:
- AHS cross-references "Pharmacy – CSA Z8000:24 10.9.3.4". Section 3.1 lists "Pharmacy (10.9.2.3)" under the dedicated staff washroom requirement.
- AHS lists "sterile compounding pharmacies" as a restricted area, says "Refer to CSA: Z317.2 Table 1 for HVAC requirements for each room type", and says mechanical design "shall meet criteria set out in CSA Z317.2". AHS doc is V3, October 2026.
- These quotes match the live pages word for word: the ANSI Z8000:24 "public or private" scope, the ANSI Z317.2:24 "more stringent requirements for areas in a facility used for more than one function", and the CSA "comprehensive, nationally-recognized baseline for the planning, design, and construction of hospitals".
- The Interior Health Staff Safety quote matches word for word. The Interior Health OGR says "The Contractor must work in compliance with CSA Z317.13-12".
- PODSA s. 23.7 lists the two NAPRA sterile standards.
- Peace Arch is listed at $6,250,000 and UHNBC at $500,000. The Alberta announcement was "$54 million over three years" for "33 hospital pharmacies", by the Government of Alberta.
- The Z8000 page never says Medico has built a health authority suite. It says plainly that it has not.

---

## BLOCKING (wrong or unsupported). Fix before use.

### B1. Z8000 page intro: "every ... they tender is built to them" is an overclaim
Current: "Health authorities write Z8000, Z317.2 (HVAC) and Z317.13 (infection control during construction) into their contracts, so every hospital pharmacy clean room or compounding lab they tender is built to them, alongside the NAPRA compounding standards."
Problem: no source supports "every". Each authority calls up a different set:
- Fraser TDR names Z8000 and Z317.13. The parts reviewed do not mention Z317.2 or pharmacy.
- AHS names Z8000 and Z317.2.
- Interior Health names Z8000-11 and Z317.13.

Fix: "Health authority design requirements call up CSA Z8000 and its companions, Z317.2 (HVAC) and Z317.13 (infection control during construction), for the facilities they build and renovate, and the NAPRA compounding standards apply through the provincial college."

### B2. Z8000 page table, Z8000 row: invents what the clause contains
Current (column 3): "Room layout, adjacencies and support spaces in the design brief"
Problem: the research notes say clause 10.9.3.4 is not public: "I could not confirm what Z8000 says about clean-room layout or room data sheets". This cell describes the clause's content anyway.
Fix (column 3): "The facility planning and design baseline the health authority checks the design against; AHS cites clause 10.9.3.4 for pharmacy and 10.9.2.3 for a pharmacy staff washroom"

### B3. Z8000 page: the Fraser Health quotes are not on the cited URL
Current: two quotes linked to https://www.fraserhealth.ca/about-us/business-opportunities/Technical-Design-Requirements-TDR
- "designed compliant with CSA Z8000 and relevant FHA guidelines"
- "Work must align with CSA Z8000, CSA Z317.13, and the BC Building Code"

Problem: neither sentence is on that landing page. Both are in the combined TDR PDF (Section 01 10 00, cl. 1.4.1, and Section 02 21 00, cl. 1.3.1, both dated December 2025). The PDF URL is in the research notes. The live text of the second quote continues "(Part 10 – Existing Buildings)", so ending the quote at "BC Building Code" is fine.

Fix: link the two quotes to https://www.fraserhealth.ca/-/media/Project/FraserHealth/FraserHealth/Technical-Design-Requirements/Combined/Technical_Design_Requirements_Combined_Sections.pdf. Keep the landing page link only for "architects, engineers, contractors, facility administrators or operators", which is on it. Add the PDF to Sources as "Fraser Health TDR, combined sections (PDF)".

### B4. Z8000 page: "Alberta's college adopts NAPRA as its minimum requirements." has no source
Problem: this is not in the research notes and has no citation. The live ACP page does not use the words "minimum requirements". It says the NAPRA Model Standards were "approved by the Council of the Alberta College of Pharmacy (ACP) in 2016 and are in effect as of July 1, 2021", and were "approved by ACP Council with the following amendments".
Fix (preferred, after adding the source to the research notes): "In Alberta, the College of Pharmacy approved the NAPRA sterile standards, with two amendments, and they have been in effect since July 1, 2021 ([ACP](https://abpharmacy.ca/regulated-members/practice-resources/pharmacy-compounding/sterile-compounding/))." Also add the URL to Sources.
Fix (if no new sources are allowed): delete the sentence.

### B5. Z8000 page FAQ: "We bid hospital pharmacy work" has no support
Current: "We bid hospital pharmacy work and bring our private clean room and Z8000 clinic experience to it. We have not yet completed a health authority compounding suite."
Problem: no file shows Medico bidding, or being prequalified for, health authority pharmacy work. The research notes say Medico "needs to be on" the Acute Care prequal list. "We bid" also suggests an active track record.
Fix: "Not yet. We have not built a health authority compounding suite. We bring our private clean room work, our clinic work designed to CSA Z8000, and a clear plan for phasing and infection control to hospital pharmacy teams."

### B6. Z8000 page: "Some private owners still ask for Z8000 as their design baseline, which we support." has no source
Problem: there is no evidence that any private owner has asked for this. It reads as a client fact.
Fix: "A private owner can still choose Z8000 as its design baseline, and we can build to it."

### B7. Hub page title, description and H1 suggest Medico has built to CSA Z8000 and built hospital IV rooms
- Current title: "Pharmacy Clean Rooms and Compounding Labs: CSA Z8000"
- Current description: "Pharmacy clean rooms and compounding labs built to CSA Z8000 and NAPRA: sterile suites, hazardous rooms and IV rooms for hospitals and private pharmacies."
- Current H1: "Pharmacy clean rooms and compounding labs, built to CSA Z8000 and NAPRA"

Problem: Medico's clean room projects are all private, and no file says they were built to Z8000. The description, read as a claim, says Medico has built IV rooms for hospitals. That breaks the brief's hard rule.

Fix:
- Title: "Pharmacy Clean Room and Compounding Lab Construction" (52 characters)
- Description: "Pharmacy clean rooms and compounding labs built to NAPRA, with CSA Z8000 for hospital work: sterile suites, hazardous rooms, IV rooms and labs." (143 characters)
- H1: "Pharmacy clean rooms and compounding labs, built to NAPRA and, for hospitals, CSA Z8000"

### B8. Hub page intro: "We work for two kinds of owners: hospital and health authority pharmacy teams ..."
Problem: "we work for" states that Medico has hospital clients. It has none.
Fix: "This section is for two kinds of owners: hospital and health authority pharmacy teams upgrading IV rooms and compounding suites to NAPRA, and owners of private compounding pharmacies and central compounding facilities."
The next sentence repeats the B1 overgeneralization ("Hospital jobs are built to CSA Z8000 and its HVAC and infection control companions, Z317.2 and Z317.13").
Fix: "Health authority design requirements call up CSA Z8000 and its HVAC and infection control companions, Z317.2 and Z317.13, on top of the NAPRA compounding standards; our ..."

### B9. Hospital page intro: Alberta procurement has no source, and the standards claim is too broad
Current: "Health authorities in BC and Alberta buy this work through prequalification and then a tender or a construction management RFP. The rooms are built to CSA Z8000, Z317.2 and Z317.13 through the health authority contract, and to NAPRA through the provincial college"
Problem 1: the research covers BC procurement only (Bonfire RFPQ, IH prequal, bidsandtenders). Nothing documents how AHS buys this work.
Problem 2: the same overgeneralization as B1.
Fix: "In BC, health authorities buy this work through prequalification and then a tender or a construction management RFP. Health authority design requirements call up CSA Z8000, Z317.2 and Z317.13, and NAPRA applies through the provincial college ([CSA Z8000 pharmacy](/pharmacy-clean-rooms/csa-z8000-pharmacy/))."

---

## Minor issues

1. **Z8000 page: the CSA source is on a dev subdomain.** The page links https://dev-www.csagroup.org/article/13-changes-csa-z8000-canadian-healthcare-facilities-know. That is the URL in the research notes and it works. But https://www.csagroup.org/article/13-changes-csa-z8000-canadian-healthcare-facilities-know also loads with the same sentence. Use the www URL in the body and in Sources; a public page should not link a dev site.
2. **Z8000 page: the "use the stricter value" rule is stated as fact.** It appears in the NAPRA section ("works to both ... and uses whichever is stricter") and in two FAQs ("Designers apply both and take the stricter value"). The research marks this as **[Inference]**. Soften each to "typically applies both and uses whichever is stricter".
3. **Z8000 page: the Z317.2 table row goes beyond the sources.** "Air changes, pressure and filtration in the mechanical design" is not in any source. The sources say Table 1 "provides specific design parameters for HVAC systems", and no source prints pharmacy values. Fix: "HVAC design values by room type (Table 1) in the mechanical design; AHS tells designers to use Table 1 for each room type".
4. **Z8000 page: the NAPRA table row overstates inspection.** "What the College inspects before compounding starts in the new rooms" goes beyond the source. The research (CPBC node/1758) says evidence is submitted "no later than 14 days after the completion date" and an inspection "may be scheduled". Fix: "What the College reviews, and may inspect, when the new rooms are complete".
5. **Z8000 page: the Interior Health quote needs context.** "Refer to CSA Standard Z8000-11 ..." sits in the pharmacy part of the Violence Prevention section (6.1b). Also, Z8000-11 is an old edition. Suggested wording: "Its staff safety design guidelines, in the pharmacy section, tell designers to ... (they still cite the 2011 edition)".
6. **Z8000 page: WorkSafeBC is named alone on a Canada-wide page.** This happens twice: the private-pharmacy bullet and the FAQ. Use "provincial workplace safety rules (WorkSafeBC in BC)". Alberta OHS is not in the research, so do not name it.
7. **Z8000 page: the pressure summary is not fully accurate, and part is unsourced.** "Positive pressure for non-hazardous suites and negative pressure for hazardous ones" is not quite right: the hazardous anteroom is positive (+5 Pa) and only the hazardous clean room is negative (-2.5 Pa). The non-hazardous positive pressure is also not in the research notes. Suggested wording: "negative-pressure hazardous clean rooms behind a positive-pressure anteroom".
8. **Z8000 page: "phased so compounding never stops" is too absolute.** The UHNBC and qathet listings say the pharmacy stays operational, not that compounding never stops. Use "phased so the pharmacy keeps compounding". Also, "the Peace Arch Hospital sterile compounding project at $6.25 million" should say "listed at $6.25 million".
9. **Z8000 page: "our Z8000 clinic work" should match the existing site wording.** The current site says "We design clinics to CSA Z8000". Use "our clinic work designed to CSA Z8000". The brand checklist bans "licensed Z8000".
10. **Z8000 page: Z8000 scope paraphrase.** "renovated and expanded" is fine. The ANSI text says "existing facilities undergoing addition or renovation".
11. **Bold answers over 25 words.** On the Z8000 page, "Who has to build to Z8000?" and "How do Z8000 and NAPRA fit together?" are 26 words each. Trim one word each, for example drop "still" or "For a" ("Private compounding pharmacies: ...").
12. **Hospital page: "usually while the pharmacy keeps compounding".** This is supported by UHNBC (the three phases keep the suite active) and qathet. No change needed.
