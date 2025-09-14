---

# Outstanding Questions & Gaps for Build Plan

To proceed with building KUDI, please provide details on the following:

- What frameworks/languages are used in the C:\kinvest codebase?
- Any specific data models or fields required for UDI labels?
- Details on authentication/authorization (e.g., SSO, OAuth, custom)?
- Any reporting or analytics requirements beyond compliance dashboards?
- Preferred deployment environment (cloud, on-premises, hybrid)?
- Any regulatory or security standards (HIPAA, SOC2, etc.) to follow?
- Integration details for manufacturer/distributor systems (APIs, file formats, etc.)?

Please respond to these questions to help finalize the build plan and begin development.
# KUDI Product Plan

## Product Guidelines

KUDI must follow the guidelines outlined in the [KRISMOS_PRODUCT_GUIDELINES](../../KRISMOS_PRODUCT_GUIDELINES.md). All development, design, and compliance processes should reference and adhere to these standards.

## Overview

KUDI is a product designed to help companies achieve and maintain UDI (Unique Device Identification) compliance with the FDA. The initial focus will be on supporting Class II devices (Moderate risk), with plans to extend to other device categories in the future. The goal is to simplify the process for manufacturers, distributors, and relabelers by providing tools and workflows that address the core requirements of UDI regulations.

## Basic Idea

KUDI will offer a platform that enables companies to:

- Generate and manage UDI labels for medical devices
- Track and maintain device information for FDA compliance
- Register and update device and facility data as required by the FDA
- Store and manage records to support audits and regulatory reviews
- Integrate with manufacturer and distributor systems to ensure end-to-end compliance

## Target Users
- Medical device manufacturers
- Distributors (e.g., Medline, Walgreens)
- Repackagers and relabelers

## Key Features

- UDI label generation and management
- Verification of claims on UDI labels to ensure validity and accuracy
- Application of the correct claims on UDI labels based on device and regulatory requirements
- FDA GUDID (Global Unique Device Identification Database) integration for automated data submission and validation
- Facility and product registration workflows
- Compliance dashboards and reporting
- Secure record storage and audit trails


KUDI aims to streamline UDI compliance, reduce manual effort, and minimize the risk of regulatory issues for all stakeholders in the medical device supply chain.

---

# KUDI Product Q&A

## What types of medical devices or products will KUDI support?
KUDI will initially support Class II devices (Moderate risk) and is designed with plans to extend to other device categories in the future.

## What workflows or integrations are required?
KUDI will integrate with the FDA GUDID (Global Unique Device Identification Database) for automated data submission and validation. If device specifications change due to customer feedback, KUDI will ensure that the updated specifications are promptly reflected in the GUDID database. Integration with manufacturer and distributor systems is also planned to ensure end-to-end compliance.

## What user roles and permissions are needed?
KUDI is intended for use by medical device manufacturers, distributors (e.g., Medline, Walgreens), and repackagers or relabelers. User roles may include admin, manufacturer, distributor, and compliance officer, each with appropriate permissions for their responsibilities.

## What is the preferred technology stack for frontend and backend?
KUDI will use the contents of the C:\kinvest codebase to build both frontend and backend components, leveraging existing resources for rapid development.

## Are there any UI/UX preferences or must-have dashboard features?
KUDI will provide compliance dashboards and reporting, secure record storage, and audit trails. The UI/UX will focus on ease of use for managing UDI labels, tracking device information, and supporting regulatory workflows.

## How will KUDI handle UDI label claims?
KUDI will verify that the claims on the UDI label are valid and accurate, and will apply the correct claims based on device and regulatory requirements.

## How will KUDI handle updates to device specifications?
If device specifications change due to customer feedback, KUDI will ensure that the updated specifications are promptly reflected in the GUDID database and all relevant records.
