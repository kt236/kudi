## 10. API Response and GMDN Panel Separation
- Always persist and display a valid (good) API response in the UI, even if the UDI is not found or an error message is shown.
- GMDN extraction and display must be implemented as a separate, independent panel/task that is not blocked by API error messages or error state.
- Never break or override the display of a good API response when available, regardless of error handling logic.
## 9. React State Management
- All React state variables and their setter functions (e.g., `const [foo, setFoo] = useState(...)`) must be declared at the top of each component before use.
- Never use a state setter or variable that is not explicitly declared in the component.
- Before running or committing, check for missing or undeclared state variables and fix them to prevent runtime errors.
# KUDI Build Policy

## Purpose
This build policy documents lessons learned and best practices from the development and refactoring of the KUDI UDI parser app. All contributors must comply with this policy before making changes to the codebase.

---

## 1. Modularity and Separation of Concerns
- All new logic must be implemented in modular helper files or React components.
- UI elements must be separated into dedicated components (e.g., input, panels, dialogs).
- Helper modules (e.g., for data extraction or formatting) must be used for reusable logic.

## 2. Robustness and Maintainability
- Avoid code duplication. Remove legacy or unused code when refactoring.
- Ensure all error handling is robust and user-friendly.
- All state management must be clear and predictable.
- Use descriptive variable and function names.

## 3. UI/UX Best Practices
- Separate raw API data from the user-facing view. Provide toggles or panels for raw data if needed.
- Remember user input (e.g., UDI history) using localStorage or similar mechanisms.
- Provide clear labeling and dropdowns for user history.

## 4. Testing and Validation
- All new features and refactors must include relevant unit tests.
- Test GMDN extraction logic and UI components.
- Validate that the app is error-free and all features work as intended after changes.

## 5. Git and Repository Hygiene
- Understand and follow submodule workflows if using git submodules.
- Remove duplicate or legacy code after refactoring.
- Ensure all code is committed with clear, descriptive messages.

## 6. Incremental and Safe Refactoring
- Refactor in small, logical steps with clear commit history.
- After each major refactor, validate that the app is robust and maintainable.




## 7. Command Execution and Developer Experience
- Only use the user-provided `cmd.exe` terminal for all commands; never use or suggest PowerShell or any other shell.
- Always verify the current working directory is exactly the intended project folder (e.g., `C:\krismos\khlth\kudi\frontend`) before running or suggesting any command.
- Never run or suggest any command in a terminal if the shell is not `cmd.exe` or the directory is not correct.
- **When suggesting commands, Copilot must always check and match the user's current working directory and shell context.**
- **If the user is in a subdirectory (e.g., `frontend`), commands must be relative to that directory and never use `--prefix` or similar options that would break path resolution.**
- **If the user is in the project root, commands may use `--prefix frontend` or similar, but only if the directory structure supports it.**
- **Copilot must never suggest or run a command that would result in a path error (e.g., ENOENT for missing package.json) due to incorrect directory context.**
- **All command suggestions must be copy-paste ready and guaranteed to work in the user's current directory and shell.**
- **If Copilot is unsure of the user's directory, it must ask for clarification before suggesting a command.**
- **Developers must review all command suggestions for directory and shell correctness before use.**

## 8. Compliance
- All pull requests and direct commits must demonstrate compliance with this build policy.
- Code reviews must check for adherence to these guidelines.
- No changes may be merged without meeting all requirements above.

---

_Last updated: 2025-09-14_