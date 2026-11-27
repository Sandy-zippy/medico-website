# Fact-check: CSA Z8000 guide draft

Reviewed: `z8000-guide-draft.md` (draft, not live). Checked 2026-11-27 against the live sources through WebFetch. The draft was not edited.

Result: **6 blocking issues** and 12 minor issues. The CPSBC material holds up well. The weak spots are the scope and edition claims credited to the CSA store, the pharmacy section, and the Fraser Health citation details.

---

## BLOCKING

### B1. Scope line claims "doctors' and dentists' offices" (no public source)
Draft (H2 "Which facilities does Z8000 cover?", bold answer):
> Hospitals, long-term care, outpatient clinics and doctors' and dentists' offices, for new builds, temporary facilities and renovations. It does not cover veterinary clinics.

None of the public pages (CSA store, ANSI 2018 and 2024, SCC database) mention doctors', dentists' or physicians' offices. They list "inpatient, outpatient, or combined hospitals", "facilities offering outpatient diagnosis and treatment", specialty inpatient centres, residential care, and long-term care homes (2024). The office examples come from the paywalled text or were invented, so the page cannot state them.

Replace with:
> **Hospitals, long-term care and outpatient diagnosis and treatment facilities, public or private, for new builds, temporary facilities and renovations. It does not cover veterinary facilities.**

The dental FAQ already words this correctly ("including outpatient treatment facilities"), so leave that one as it is.

### B2. "CSA's store and ANSI now list a 2024 edition" (the CSA store page does not)
The CSA store page at https://www.csagroup.org/store/product/Z8000/ shows the **second edition**, which supersedes 2011 (that is the 2018 edition). It does not list or offer a 2024 edition. The ANSI webstore labels CSA Z8000:24 "Most recent" and calls it "the third edition", superseding 2018 and 2011. The Standards Council of Canada database lists CSA Z8000:24 with a date of 2024-10-31.

Replace the bold answer with:
> **Z8000-18 is the 2018 edition, the second edition, which replaced the first edition from 2011. A third edition, CSA Z8000:24, was published in 2024.**

Replace the ANSI sentence with:
> ANSI's webstore lists CSA Z8000:24, the third edition, as the most recent ([ANSI webstore](https://webstore.ansi.org/standards/csa/csaz80002024)). The Standards Council of Canada lists it with a date of October 31, 2024 ([SCC standards database](https://ccn-scc.ca/standardsdb/standards/4033548)).

Add the SCC page to the Sources list. Also check that the "CSA Group store" source link doesn't send readers to the 2018 page while the text talks about 2024.

### B3. The 2018 edition's changes are credited to the wrong source
Draft: "The 2018 edition added infection prevention and control through every project stage, and a bigger role for the design team ([CSA Group store])".

The CSA store and ANSI 2018 pages only say "update to the infection prevention and control requirements to reflect advances in science, technology, and clinical practice" and "greater detail on the make-up the inter-disciplinary team and its role in planning". The "throughout all stages" wording comes from a CSA Group article instead: "promotes best practices in infection prevention and control (IPC) throughout all stages of planning, design, and construction".

Replace with:
> The 2018 edition updated the infection prevention and control requirements and gave more detail on the interdisciplinary design team and its role in planning ([CSA Group store](https://www.csagroup.org/store/product/Z8000/)). CSA Group says it promotes infection prevention and control "throughout all stages of planning, design, and construction" ([CSA Group](https://dev-www.csagroup.org/article/13-changes-csa-z8000-canadian-healthcare-facilities-know)).

(If you'd rather not link a `dev-www` host, drop the second sentence.)

### B4. The pharmacy section suggests Medico does hospital work, and its Fraser claim has no source
Draft: "Hospital pharmacy clean rooms are built under the health authority's contract, which names Z8000 ... Fraser Health requires its facilities to be designed to Z8000, and that includes hospital pharmacies ... Our pharmacy clean rooms section covers that work."

There are two problems:
1. "Our ... section covers that work", placed straight after a paragraph about hospital pharmacy clean rooms, says Medico does hospital pharmacy work. The writer's own notes say there is no confirmed Medico hospital project (the Cloverdale lab is waiting on Dal).
2. "That includes hospital pharmacies" is the writer's inference. The readable part of the Fraser TDR has no pharmacy, clean room or NAPRA text. The PDF text cut off around Division 05, which matches the earlier research.

Replace the whole section body with:
> **Z8000 sets the general planning and design baseline. The numbers for compounding rooms, such as air changes and room pressures, come from NAPRA's model standards.**
>
> In BC, the College of Pharmacists of BC makes the NAPRA sterile compounding standards mandatory through its bylaws. Where a health authority owns the building, its design requirements also apply. Fraser Health, for example, requires its facilities to be designed to Z8000. Our [pharmacy clean rooms](/pharmacy-clean-rooms/) section covers compounding room work.

### B5. The FAQ says CPSBC wants operational policies maintained to Z8000 (it doesn't)
Draft (FAQ "Does Z8000 cover operating a clinic after it opens?"): "CPSBC asks accredited facilities to maintain them in line with Z8000, CSA Z8001 for commissioning and CSA Z8002 for operation and maintenance." Here "them" means operational policies and procedures. The policy actually says facilities "are required to maintain the facility in conformance with CSA Z8000", plus Z8001 and Z8002.

Replace with:
> No. CSA says Z8000 does not set requirements for operational models, policies or procedures. CPSBC does require non-hospital facilities to maintain the facility in conformance with Z8000, CSA Z8001 (commissioning) and CSA Z8002 (operation and maintenance).

### B6. Wrong section number and precedence wording in the Fraser Health citation
The source PDF says, in Section **01 10 00** Summary, clause 1.4.1: "All Facilities shall be constructed compliant with CSA Z317.13 ... Additionally, all Facilities shall be designed compliant with CSA Z8000 and relevant FHA guidelines. Where available, FH guidelines take precedence." The draft table says "Section 01 00 00" and "FHA guidelines take precedence", which drops "where available".

Replace the table row with:
> | Fraser Health | All facilities designed compliant with CSA Z8000 and relevant FHA guidelines; where available, FH guidelines take precedence | Fraser Health TDR, Section 01 10 00, December 2025 |

The quote in the body bullet ("all Facilities shall be designed compliant with CSA Z8000 and relevant FHA guidelines") is verbatim. Leave it as it is.

---

## MINOR

1. **"Accredited" wording.** The CPSBC policy says "non-hospital facilities" and never uses "accredited". New facilities are applicants, not yet accredited. The explanatory sentence in the CPSBC bullet is fine. The bold line in H2 "Is CSA Z8000 mandatory": change "for accredited non-hospital facilities" to "for non-hospital facilities in its accreditation program". The table cell: change "New, renovated or sold facilities" to "New facilities, and existing ones that renovate or change ownership" (the source says "change of ownership, as defined by the Bylaws", not "sold").
2. **"Health authorities write it into their contracts" (plural).** Only Fraser Health's TDR is verified as requiring Z8000. Interior Health's Owners General Requirements (April 2026) does not mention Z8000 at all. It cites Z317.13-12 and Z8001-13. IH's other guidance does reference Z8000-11 and Z8000-18, according to the earlier research. Suggested: "and Fraser Health writes it into its design requirements".
3. **The "Who asks for Z8000 in BC?" table lists Interior Health, but its source doesn't name Z8000.** Either retitle the table "Who asks for Z8000 and Z317.13 in BC?" or add a note to the IH cell: "(Z8000 is not named in this document)".
4. **Medico capability claims need the owner's confirmation.** "We plan the layout and systems to Z8000", "lay out rooms, sinks, finishes and clean and dirty flows to it from the first sketch" and "keep the site clean under CSA Z317.13" are unverified claims about what Medico does. On CPSBC projects the drawings are signed by the interdisciplinary design team (architect and engineers). If Medico doesn't do design-build, say "We work with your architect and engineers on a Z8000 layout..." and "follow CSA Z317.13 infection control during construction". Z317.13 is about infection control, not "clean" sites.
5. **"Many owners use Z8000 anyway"** has no source. Soften it to "Some owners choose to use Z8000 anyway..." or confirm it from Medico's own projects.
6. **"room by room".** The public summaries mention functional services, building services and room size requirements, not a room-by-room layout guide. Suggested: "It sets out requirements for planning, site and facility layout, functional spaces and building systems."
7. **FAQ: "The building code is law and applies to every building."** The City of Vancouver uses the Vancouver Building By-law, and federal land differs. Suggested: "The BC Building Code (or the Vancouver Building By-law in Vancouver) is law."
8. **Fraser TDR date.** The PDF footers say December 2025, which matches the draft. The earlier research found the TDR landing page saying "Rev. 4, updated May 28, 2026". Check that the combined PDF is the current revision before you publish, and consider linking the landing page: https://www.fraserhealth.ca/about-us/business-opportunities/Technical-Design-Requirements-TDR
9. **Interior Health document title.** The cover reads "OWNERS GENERAL REQUIREMENTS" (no apostrophe). "Owner's" is a harmless styling choice, but match the source if you want it exact.
10. **Z317.13-12 is an old edition.** The quote is verbatim, but the current edition is Z317.13:22. Consider adding "(IH's document cites the 2012 edition; the current edition is 2022)" so readers don't take -12 as current.
11. **Veterinary exclusion.** Verified for both editions. The 2024 edition says "mobile HCFs" (and still applies OASIS principles to them) rather than "mobile health units". The 2018 wording matches the draft. Fine as written.
12. **The CPSBC handover bullet says "confirms".** The source says full conformance "is validated through letters of assurance and other supporting documentation from the registered professionals (e.g. architect, engineer(s))". The quoted fragment is verbatim and the paraphrase is acceptable. "Validates" would be closer.

---

## Checks requested in the brief

- **Title:** "CSA Z8000: What the Standard Means for Your Clinic" is 50 characters. OK.
- **Description:** 149 characters. OK (under 155).
- **Em and en dashes:** none found (scanned for U+2012 to U+2015).
- **Hype words:** none found.
- **"Licensed" or "certified" Z8000 claims:** none. "Certified copy" is a verbatim CPSBC quote about buying the standard, which is fine.
- **Implied hospital project:** yes, in the pharmacy section (B4). No other hospital implication.
- **Clause values from the paywalled standard:** none quoted. The scope claim about doctors' and dentists' offices (B1) is the one content claim with no public source.

---

## VERIFIED

**CPSBC Facility Design Assessment policy** (https://www.cpsbc.ca/files/pdf/NHMSFAP-P-Facility-Design-Assessment.pdf). "Document ID: 11731 Version: 1.1 Effective date: 2023-03-25".
- Verbatim: "New non-hospital facilities and existing non-hospital facilities that undergo renovations or change of ownership, as defined by the Bylaws, are required to be in conformance with the current edition of the Canadian Standards Association (CSA) Z8000 Canadian health care facilities standard in effect at the time of the proposed new construction, renovations or change of ownership." Both draft fragments match.
- Verbatim: "CSA Z8000 Canadian health care facilities is the nationally recognized standard for the planning, design and construction of health care facilities in Canada."
- Verbatim: "confirms that they have obtained their own certified copy of the CSA Z8000 standard".
- Verbatim: "limited verification of the proposed facility layout drawings signed off by the interdisciplinary design team (IDT) confirming design conformance with CSA Z8000, prior to building permitting or construction".
- Verbatim: "Full conformance with CSA Z8000 including materials, finishing and fixtures is validated through letters of assurance and other supporting documentation from the registered professionals (e.g. architect, engineer(s))..."
- The FAQ "Who checks" answer is supported: the College reviews "the mandatory physical design and building commissioning documentation" and observes "materials, finishing and fixtures (i.e. sinks, cabinets, flooring, ceilings) during the site assessment".
- Facilities must "maintain the facility in conformance with CSA Z8000", plus Z8001 and Z8002 (see B5).
- The CPSBC "Building or renovating a facility" page also says "Facilities must adhere to the Canadian Standards Association (CSA) Z8000 standard".

**Fraser Health TDR, combined PDF:** clause 1.4.1 quote verified (see B6). Footers are dated December 2025. No pharmacy content in the readable text.

**Interior Health Owners General Requirements:** dated April 2026, Section 21.1. Verbatim: "The Contractor must work in compliance with CSA Z317.13-12 "Infection control during construction, renovation, and maintenance of health care facilities" and IH's Infection Prevention and Control Policy." No Z8000 mention. Section 13.1 cites Z8001-13.

**CSA store, Z8000 (second edition, 2018):** applies to "all facilities, public or private" and "regardless of type, size, location, or range of services". Covers new, temporary, and expanded or renovated facilities, and "research and testing facilities that perform medical procedures". "This Standard does not apply to veterinary facilities, funeral homes, or mobile health units." Does not address clinical practice, operation and maintenance (CSA Z8002), or operational models, policies and procedures. "This is the second edition ... supersedes the previous edition published in 2011."

**ANSI webstore, CSA Z8000-2024:** "This is the third edition", supersedes 2018 and 2011, labelled "Most recent". The scope and the veterinary, funeral home and mobile HCF exclusions are confirmed. "Does not specify requirements for operational models, policies, and procedures." Long-term care homes are listed.

**SCC standards database:** CSA Z8000:24, date 2024-10-31, same exclusion clause 1.2.1.

**CSA Group article "13 changes" (about Z8000-18):** IPC "throughout all stages of planning, design, and construction". Calls Z8000 "a comprehensive, nationally-recognized baseline".

**Not checked live:** the NAPRA and CPBC bylaw claims in the replacement for B4 rely on the earlier verified research (`research-rules-buyers.md`, key finding 1 and section 2.1).
