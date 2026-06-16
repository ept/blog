---
layout: paper
type: journal
me_presenting: false
title: "Emission Impossible: Cryptographically Verifiable Carbon Emissions Reporting for Cloud Computing"
authors: Jessica Man and Martin Kleppmann
venue: 17th ACM International Conference on Future and Sustainable Energy Systems (E-Energy)
place: Banff, Alberta, Canada
doi: 10.1145/3744255.3811720
venue_url: https://energy.acm.org/conferences/eenergy/2026/index.php
---

* [Code and benchmarks](https://github.com/psjm3/verifiable_cloud_carbon_emissions) ([archived copy](https://www.repository.cam.ac.uk/handle/1810/402892))

Abstract
--------

Cloud providers need to report to their customers what carbon emissions have arisen from their use
of computing resources, so that customers can include them in their own mandated emissions
reporting. At present, these reports are neither verifiable nor audited. We show how a data centre
operator can produce cryptographic zero-knowledge proofs to each customer that the emissions
reported to that customer are accurate, without the customer being able to learn sensitive
information about the data centre operator or other customers.  Our approach is scalable, costing
a data centre operator with one million customers an estimated $150 USD per month plus $0.01 USD for
each customer who requests a verifiable emissions report. For customers, a proof is 37 KiB in size,
and verifying it takes less than a second. By making emissions reports more trustworthy, we hope to
give companies and policymakers the data they need to push towards decarbonisation.
