# Workspace Structure

The VS Code workspace root is set to the `KUDI` directory (`C:\krismos\khlth\kudi`).

- All documentation and configuration files are kept at the root.
- The `frontend/` folder contains the ReactJS application.
- The `backend/` folder will contain the Node.js application.
- This monorepo structure allows for easy management, shared configuration, and scalability as the project grows.

# Build Plan Approach

The development approach for KUDI will start with building out the frontend first. As frontend features are developed and backend functionality is required, backend APIs will be added incrementally. This iterative process ensures the frontend drives backend requirements, allowing for rapid prototyping and focused API development based on actual needs.


# KUDI Build Instructions

The KUDI product will use the contents of `C:\kinvest` codebase to build both the frontend and backend components.

This approach leverages existing resources and accelerates the development of KUDI's core features for UDI compliance.

---

## KUDI Build Plan Q&A

### What frameworks/languages are used in the C:\kinvest codebase?
Same as kinvest: use **ReactJS** for frontend and **Node.js** for backend to start with. More robust APIs will be developed in later iterations/releases using **Spring Boot REST**.

### Any specific data models or fields required for UDI labels?
Use any publicly available data models for UDI if you can fetch them.

### Details on authentication/authorization (e.g., SSO, OAuth, custom)?
Implement only very basic authentication that comes with ReactJS or Node.js, and then upgrade to SSO or other advanced authentication technologies in future iterations.

### Any reporting or analytics requirements beyond compliance dashboards?
Nothing in the initial iteration. More requirements will be added in later iterations.

### Preferred deployment environment (cloud, on-premises, hybrid)?
Initially developed for local Windows dev environment, but will plan to deploy directly to Azure in Azure Dev.

### Any regulatory or security standards (HIPAA, SOC2, etc.) to follow?
None at the moment.

### Integration details for manufacturer/distributor systems (APIs, file formats, etc.)?
Not sure about this yet.
