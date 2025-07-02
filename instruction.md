# Mock Dashboard Feature Specification

_For internal development only — mirrors your API surface and brand styling._

**Sources**

- API schema — see attached OpenAPI excerpt
- Platform CSS — see `de‑minified.css`

---

## 1. Global Architecture & Design System

| Area             | Guidance                                                                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**    | **React 18 + Vite** (client‑side). Route with **React‑Router v6**.                                                                                               |
| **State**        | **TanStack Query** (or SWR) hitting static JSON in `/public/mocks/…`; one slice per resource (`clients`, `positions`, `candidates` …).                           |
| **Styling**      | Import the provided CSS verbatim. Re‑use its variables (`--primary-color`, etc.). New components inherit **border‑radius**, **box‑shadow**, `var(--transition)`. |
| **Layout shell** | 3‑part: left _sidebar_ (60 px collapsed / 220 px expanded, lucide.dev icons), top _navbar_ (search, account), main _outlet_ (CSS Grid).                          |
| **Auth bypass**  | Keep `<LoginPage/>` styles but on submit do `localStorage.setItem('token','mock')` then redirect to `/dashboard`.                                                |
| **Dummy data**   | Mirror every GET route to a homonymous file, e.g. `GET /api/hiring/:id/kpis` → `/mocks/api_hiring_{id}_kpis.json`.                                               |
| **Responsive**   | < 768 px: KPI cards stack 1‑col; sidebar auto‑collapses.                                                                                                         |

---

## 2. Page Inventory

| #   | Route                  | Page                   | Primary GET                                | Key Widgets                                    |
| --- | ---------------------- | ---------------------- | ------------------------------------------ | ---------------------------------------------- |
| 1   | `/dashboard`           | **Overview / KPIs**    | `/api/hiring/{client_uuid}/kpis`, `/stats` | KPI cards, trend chart, funnel bar             |
| 2   | `/onboarding`          | **Client Wizard**      | — (POST draft)                             | 5‑step Radix Stepper                           |
| 3   | `/clients`             | **Client list**        | `/api/account/clients/`                    | Table, “Add client”                            |
| 4   | `/clients/:id`         | **Client detail**      | `/api/account/clients/{id}`                | Tabs: Profile, Members, Branding, Integrations |
| 5   | `/clients/:id/members` | **Members**            | `/members/`                                | CRUD grid                                      |
| 6   | `/positions`           | **Positions list**     | `/positions`                               | Filterable table                               |
| 7   | `/positions/:id`       | **Position workspace** | `/positions/{id}`                          | Rich‑text editor, criteria panel               |
| 8   | `/candidates`          | **Candidates pool**    | `/candidates`                              | Kanban by status                               |
| 9   | `/candidates/:id`      | **Candidate 360°**     | `/candidates/{id}`                         | CV viewer, timeline                            |
| 10  | `/applications/:id`    | **Application detail** | `/applications/{id}`                       | Score gauges, docs                             |
| 11  | `/conversations`       | **Conversation inbox** | `/…/conversations`                         | List + viewer                                  |
| 12  | `/workflows`           | **Workflow builder**   | `/workflows/{client_uuid}/hiring`          | React‑flow canvas                              |
| 13  | `/knowledge`           | **Knowledge bases**    | `/knowledge/{client_uuid}`                 | Masonry cards                                  |
| 14  | `/agents`              | **Agents grid**        | `/api/agents/{client_uuid}`                | Cards + wizard                                 |
| 15  | `/agents/:id`          | **Agent detail**       | `/agents/{client_uuid}/agents/{id}`        | Overview, tools                                |
| 16  | `/integrations`        | **Integrations**       | `/integrations/{client_uuid}/integrations` | `.platform-card` grid                          |
| 17  | `/settings`            | **Settings**           | `/api/token/verify`                        | Profile & tokens                               |

---

## 3. Build Notes (by route)

### `/dashboard`

1. **Header** — client selector (autocomplete) + date‑range picker.
2. **KPI grid** — six cards with `var(--light-color)` bg.
3. **Trend** — Recharts `<LineChart>` for `conversation_hours`.
4. **Funnel** — stacked flex bar (submitted → interviewed → hired).

### `/onboarding` (wizard)

| Step            | Fields                                      | Mock action                               |
| --------------- | ------------------------------------------- | ----------------------------------------- |
| Company         | `name`, `domain`, `timezone`, `description` | Save draft JSON                           |
| Hiring criteria | `candidate_criteria`                        | POST `/agents/check-criteria-compliance/` |
| Branding        | `logo`, `apply_page_css`, `apply_page_js`   | Live `<iframe>` preview                   |
| Users           | invite form                                 | Append to draft                           |
| Summary         | read‑only                                   | POST `/account/clients/`; redirect        |

Progress: **Radix Stepper** (active colour `var(--primary-color)`).

### `/clients`

- Table: Name, Domain, Timezone, Total positions, Actions.
- “+ Add” opens onboarding wizard modal.

### `/clients/:id`

- **Profile** tab bound to _ClientUpdateSchema_ (disable `uuid`, `created`).
- **Members**, **Branding** (iframe), **Integrations** (cards).

### `/clients/:id/members`

- CRUD grid. Invite drawer POSTs `/members/` with `generate_random_password=true`.

### `/positions`

- Filters: search / status multi‑select / attribute type.
- Status chips: draft (gray) | open (primary) | closed (dark).

### `/positions/:id`

| Section     | UI                                        | Data              |
| ----------- | ----------------------------------------- | ----------------- |
| Header      | inline title, status dropdown             | `name`, `status`  |
| Description | Quill editor                              | `description`     |
| Sidebar     | criteria accordion; **Infer** button      | `/infer-criteria` |
| Tabs        | Applications / Description / Integrations | lazy fetch        |

“Enhance description” → `/enhance-description`.

### `/candidates`

- Kanban columns from `/application-statuses`; drag → PATCH `/applications/{uuid}` (local).

### `/candidates/:id`

- Hero, timeline (events), markdown notes (`/notes`), conversation list.

### `/applications/:id`

- 3‑col layout: scores | Q&A accordion | documents.
- “Rescore” button → `/rescore`, flash new value.

### `/conversations`

- Search, list with unread badge; right panel auto‑appends mock reply every 10 s.

### `/workflows`

- Step palette → React‑flow canvas; side panel JSON inspector for `action_config`.

### `/knowledge`

- Masonry cards with toggle.

### `/agents`

- Grid; “Create agent” wizard (Basics → Voice → Knowledge → Number & Tools).
- Finish writes `/mocks/agent_new.json`.

### `/agents/:id`

- Tabs: Overview | Tools (CRUD) | Calls (last 20).

### `/integrations`

- `.platform-card` grid; **Connect** opens `parse-job-description` dialog with mapping table.

### `/settings`

- Profile + API token list; “Regenerate” makes new UUID in local state.

---

## 4. Navigation Flow

Login
├─(no client)─► /onboarding
└─► /dashboard
Dashboard → Clients → Client Detail → Members
↘ Positions → Position → Applications → Application
↘ Candidates → Candidate
↘ Agents / Workflows / Knowledge / Integrations / Settings

## 5. Local Mock Service

| Method           | Pattern               | Action                                     |
| ---------------- | --------------------- | ------------------------------------------ |
| **GET**          | `/api/**`             | Serve `/public/mocks/${encoded_path}.json` |
| **POST / PATCH** | any                   | Echo body + random `uuid`, status 201      |
| **WebSocket**    | `/ws/conversations/*` | `setInterval` push fake messages           |

---

## 6. Acceptance Checklist

1. All 17 routes render without console errors.
2. Colors & fonts match CSS variables.
3. Dragging candidate card updates status locally.
4. “Infer criteria” fills textarea with lorem.
5. KPI numbers change when switching client.
6. Agent wizard preserves state on step back.
7. Viewport < 768 px stacks KPI cards vertically.
