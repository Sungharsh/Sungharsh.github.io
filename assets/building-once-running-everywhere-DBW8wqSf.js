import{j as e}from"./index-BZZSJIMk.js";const a={title:"Building Once, Running Everywhere: A Full-Stack Blueprint Across Three Worlds",date:"Jul-11-2026",description:"One codebase for web, Android, and iOS - plus the architecture most posts skip: monorepos, microservices boundaries, event-driven communication, IaC, CI/CD, and AI-ready APIs. A mission-style guide from orbit to production.",coverLabel:"Full Stack",coverImage:"/images/blog/building-once-running-everywhere-cover.png",sortOrder:8};function r(s){const n={code:"code",div:"div",em:"em",figure:"figure",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Mission brief: three worlds, one crew"}),`
`,e.jsxs(n.p,{children:["In astronomy, we hunt for ",e.jsx(n.strong,{children:"Earth-like worlds"})," - places where the same physics supports life under different skies. In software, the parallel is familiar: ",e.jsx(n.strong,{children:"Web, Android, and iOS"})," look like three planets, but users expect the same product on each."]}),`
`,e.jsxs(n.p,{children:["Technology moves quickly, but one principle remains constant: ",e.jsx(n.strong,{children:"simplicity scales"}),"."]}),`
`,e.jsxs(n.p,{children:["Rather than chasing a new framework every year, I prefer systems that are maintainable, scalable, secure, and easy to evolve. My goal is straightforward - build ",e.jsx(n.strong,{children:"one shared application core"})," that serves every platform while staying ready for enterprise growth."]}),`
`,e.jsxs(n.p,{children:["This article is my blueprint: the stack I reach for, and the ",e.jsx(n.strong,{children:"architecture decisions"})," that turn a demo into a platform - monorepos, service boundaries, communication patterns, and the launch infrastructure that keeps releases boring in the best way."]}),`
`,e.jsx(n.h2,{children:"Honest scope: one language first"}),`
`,e.jsxs(n.p,{children:["This article is ",e.jsx(n.strong,{children:"not"})," claiming TypeScript everywhere is the only valid architecture. It is not a language ranking, and I am not saying I only work in one ecosystem."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The focus here is narrower:"})," ship ",e.jsx(n.strong,{children:"Web, Android, and iOS"})," from a shared codebase - without three client codebases slowly becoming three different products. For that mission, using ",e.jsx(n.strong,{children:"one language across the surfaces you control"})," helps teams move faster, share types, and steer development without constant context-switching."]}),`
`,e.jsxs(n.p,{children:["That is why I mention ",e.jsx(n.strong,{children:"NestJS"})," on the backend in this blueprint: it lets the same team work in TypeScript from mobile UI through API modules. It is a ",e.jsx(n.strong,{children:"pragmatic choice for velocity and consistency"}),", not proof that Node always beats other runtimes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Python is often the stronger backend for other jobs."})," Data pipelines, ML, scientific workloads, and much of the AI ecosystem lean heavily on Python and its libraries - frequently with more depth than the Node ecosystem offers in those areas. I intend to cover Python-centric backend architecture in a ",e.jsx(n.strong,{children:"separate blog post"}),". This one stays focused on the three-OS, one-language problem."]}),`
`,e.jsxs(n.p,{children:["If your product needs a Python core, you can still apply the patterns here - monorepos, events, IaC, CI/CD - while swapping mission control to FastAPI, Django, or similar. The ",e.jsx(n.strong,{children:"platform thinking"})," transfers; only the engine room changes."]}),`
`,e.jsx(n.h2,{children:"The crew suit: one UI stack for every surface"}),`
`,e.jsx(n.p,{children:"For the frontend, my choice is:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"React Native"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Expo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"React Native Web"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"TypeScript"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Think of this as a ",e.jsx(n.strong,{children:"single spacesuit"})," tailored for different atmospheres. The helmet visor changes - mobile gestures on Android and iOS, pointer and keyboard on web - but the life-support systems stay shared: components, business logic, API clients, validation, and domain models."]}),`
`,e.jsx(n.p,{children:"That reuse matters:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Less duplicated code → fewer divergent bugs"}),`
`,e.jsx(n.li,{children:"Faster delivery → one feature branch, three targets"}),`
`,e.jsx(n.li,{children:"Consistent UX → users recognise your product whether they open a browser or an app icon"}),`
`]}),`
`,e.jsx(n.p,{children:"TypeScript is non-negotiable here. Shared types between mobile, web, and backend are how you stop three platforms from slowly drifting into three different products."}),`
`,e.jsx(n.h2,{children:"Mission control: the backend core (for this blueprint)"}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.strong,{children:"this"})," article's scope - one team, one language, three client surfaces - I reach for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"NestJS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"PostgreSQL"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Prisma"})}),`
`]}),`
`,e.jsxs(n.p,{children:["If the frontend is the crew suit, ",e.jsx(n.strong,{children:"NestJS acts as mission control in this layout"}),' - modular by design, with controllers, providers, guards, and pipes that scale from a single deployable to a fleet of services without rewriting everything. The goal is not "best backend in absolute terms." It is ',e.jsx(n.strong,{children:"one stack the same developers can steer"})," while the mobile and web clients evolve in parallel."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PostgreSQL"})," is the mission archive: relational, durable, battle-tested. ",e.jsx(n.strong,{children:"Prisma"})," adds type-safe access and migrations so schema changes are reviewed like application code, not whispered into production at midnight. Neither is Nest-specific - a Python API would still benefit from Postgres and a solid migration story."]}),`
`,e.jsx(n.p,{children:"A typical early shape:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{tabIndex:"0","data-language":"text","data-theme":"github-dark",children:e.jsxs(n.code,{"data-language":"text","data-theme":"github-dark",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"apps/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"├── mobile/          # Expo app"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"├── web/             # React Native Web"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"└── api/             # NestJS application"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"packages/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"├── ui/              # shared components"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"├── api-client/      # typed HTTP layer"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"└── shared-types/    # DTOs, enums, domain models"})})]})})}),`
`,e.jsxs(n.p,{children:["That layout is a hint at the next topic - because ",e.jsx(n.strong,{children:"platform thinking starts in the repository"}),", not in the cloud console."]}),`
`,e.jsx(n.h2,{children:"The monorepo: one observatory, many instruments"}),`
`,e.jsx(n.p,{children:"Scattered repositories feel fine until you need to change a shared type and discover three pull requests, three CI pipelines, and three versions of the truth orbiting each other out of sync."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"monorepo"})," keeps the constellation together:"]}),`
`,e.jsx(n.div,{className:"blog-table-wrap",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Tooling"}),e.jsx(n.th,{children:"Role"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{"data-label":"Tooling",children:[e.jsx(n.strong,{children:"Turborepo"})," or ",e.jsx(n.strong,{children:"Nx"})]}),e.jsx(n.td,{"data-label":"Role",children:"Task orchestration, caching, affected-project builds"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Tooling",children:e.jsx(n.strong,{children:"Shared TypeScript config"})}),e.jsx(n.td,{"data-label":"Role",children:"One compiler baseline across apps and packages"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Tooling",children:e.jsx(n.strong,{children:"Shared ESLint / Prettier"})}),e.jsx(n.td,{"data-label":"Role",children:"Consistent code quality without copy-paste configs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Tooling",children:e.jsx(n.strong,{children:"Workspace packages"})}),e.jsxs(n.td,{"data-label":"Role",children:[e.jsx(n.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"@app/ui"})})})}),", ",e.jsx(n.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"@app/shared-types"})})})}),", ",e.jsx(n.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"@app/api-client"})})})})]})]})]})]})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Why it fits cross-platform work:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Change a DTO once → mobile, web, and API compile against the same contract"}),`
`,e.jsxs(n.li,{children:["Run tests for ",e.jsx(n.strong,{children:"only what changed"})," - critical when mobile builds are slow"]}),`
`,e.jsx(n.li,{children:"One CI pipeline can build web artifacts, mobile bundles, and API containers from the same commit"}),`
`]}),`
`,e.jsxs(n.p,{children:["Monorepos are not free - you need clear package boundaries and disciplined imports. But for ",e.jsx(n.strong,{children:"Web + Android + iOS + API"}),", the alternative is often three silos pretending to be one product."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{tabIndex:"0","data-language":"text","data-theme":"github-dark",children:e.jsxs(n.code,{"data-language":"text","data-theme":"github-dark",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"Commit lands on main"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        ▼"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"   Monorepo CI"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"   ├── lint + typecheck (shared)"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"   ├── unit tests (packages)"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"   ├── API integration tests"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"   ├── web build artifact"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"   └── mobile EAS / store build"})})]})})}),`
`,e.jsx(n.h2,{children:"When one ship becomes a fleet: monolith, modules, and microservices"}),`
`,e.jsx(n.p,{children:"Not every product needs microservices on day one. Launching fifty containers before you have users is how teams burn budget and sleep."}),`
`,e.jsxs(n.p,{children:["My default for NestJS is a ",e.jsx(n.strong,{children:"modular monolith"})," - one deployable, strict module boundaries inside the codebase:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{tabIndex:"0","data-language":"text","data-theme":"github-dark",children:e.jsxs(n.code,{"data-language":"text","data-theme":"github-dark",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"┌─────────────────────────────────────────┐"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│           NestJS modular monolith        │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│  ┌─────────┐ ┌─────────┐ ┌──────────┐ │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│  │ Users   │ │ Orders  │ │ Notify   │ │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│  │ Module  │ │ Module  │ │ Module   │ │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│  └────┬────┘ └────┬────┘ └────┬─────┘ │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│       │           │           │        │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│       └───────────┴───────────┘        │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"│              PostgreSQL                 │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"└─────────────────────────────────────────┘"})})]})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Split into microservices when the gravity is real"}),", not hypothetical:"]}),`
`,e.jsx(n.div,{className:"blog-table-wrap",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Signal"}),e.jsx(n.th,{children:"Example split"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Signal",children:"Independent scaling"}),e.jsx(n.td,{"data-label":"Example split",children:"Image processing, PDF generation, search indexing"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Signal",children:"Different release cadence"}),e.jsx(n.td,{"data-label":"Example split",children:"Billing service vs customer-facing API"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Signal",children:"Team ownership"}),e.jsx(n.td,{"data-label":"Example split",children:"Payments squad vs mobile product squad"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Signal",children:"Failure isolation"}),e.jsx(n.td,{"data-label":"Example split",children:"Notification retries should not take down checkout"})]})]})]})}),`
`,e.jsxs(n.p,{children:["When you do split, each service should own its ",e.jsx(n.strong,{children:"data"})," and expose a ",e.jsx(n.strong,{children:"narrow API"}),". Shared databases across microservices create hidden coupling - two moons pretending to orbit independently while welded together."]}),`
`,e.jsx(n.p,{children:"Pragmatic progression:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modular monolith"})," - learn domain boundaries in code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Extract hot paths"})," - pull out workers or read replicas first"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Microservices where metrics demand it"})," - not where slides look impressive"]}),`
`]}),`
`,e.jsx(n.h2,{children:"Signals across the void: communication patterns"}),`
`,e.jsx(n.p,{children:"Services and clients need to talk. The pattern you choose is as important as the framework."}),`
`,e.jsx(n.h3,{children:"Synchronous: direct radio (REST / GraphQL)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"REST"})," and ",e.jsx(n.strong,{children:"GraphQL"})," are your ",e.jsx(n.strong,{children:"direct radio links"})," - request in, response out. Use them for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mobile and web clients calling the API"}),`
`,e.jsx(n.li,{children:"User-facing reads and writes that need an immediate answer"}),`
`,e.jsx(n.li,{children:"Operations where the caller must know success or failure now"}),`
`]}),`
`,e.jsx(n.p,{children:"NestJS handles REST naturally; GraphQL fits when clients need flexible queries and you want to avoid over-fetching on mobile networks."}),`
`,e.jsx(n.h3,{children:"Asynchronous: deep-space relays (events and queues)"}),`
`,e.jsx(n.p,{children:"Not everything should block the caller. When a user completes an order, you do not need the HTTP response to wait for email delivery, analytics, inventory sync, and audit logging."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Event-driven architecture"})," handles side effects like telemetry beamed to distant stations:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{tabIndex:"0","data-language":"text","data-theme":"github-dark",children:e.jsxs(n.code,{"data-language":"text","data-theme":"github-dark",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"Order placed (HTTP 201)"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        ▼"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"   Event bus ──► Email service"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        │"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        ├──► Analytics worker"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        ├──► Inventory listener"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        └──► Audit log stream"})})]})})}),`
`,e.jsx(n.p,{children:"Common transports:"}),`
`,e.jsx(n.div,{className:"blog-table-wrap",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Pattern"}),e.jsx(n.th,{children:"Tools"}),e.jsx(n.th,{children:"Best for"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Pattern",children:e.jsx(n.strong,{children:"Message queue"})}),e.jsx(n.td,{"data-label":"Tools",children:"Azure Service Bus, AWS SQS, RabbitMQ"}),e.jsx(n.td,{"data-label":"Best for",children:"Reliable task handoff, retries, dead-letter queues"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Pattern",children:e.jsx(n.strong,{children:"Pub/sub"})}),e.jsx(n.td,{"data-label":"Tools",children:"AWS SNS, Azure Event Grid, Redis Pub/Sub"}),e.jsx(n.td,{"data-label":"Best for",children:"Fan-out notifications to many subscribers"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Pattern",children:e.jsx(n.strong,{children:"Event streaming"})}),e.jsx(n.td,{"data-label":"Tools",children:"Kafka, Azure Event Hubs"}),e.jsx(n.td,{"data-label":"Best for",children:"High-volume logs, audit trails, replay"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Pattern",children:e.jsx(n.strong,{children:"Outbox pattern"})}),e.jsx(n.td,{"data-label":"Tools",children:"DB table + worker"}),e.jsx(n.td,{"data-label":"Best for",children:"Guaranteed publish when DB and event must stay consistent"})]})]})]})}),`
`,e.jsxs(n.p,{children:["NestJS supports this cleanly with ",e.jsx(n.strong,{children:e.jsx(n.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"@EventPattern"})})})})}),", Bull queues, or dedicated worker apps in the same monorepo."]}),`
`,e.jsx(n.h3,{children:"Real-time: live telemetry (WebSockets / SSE)"}),`
`,e.jsxs(n.p,{children:["Chat, live dashboards, and collaborative editing need ",e.jsx(n.strong,{children:"persistent channels"})," - Server-Sent Events or WebSockets - rather than polling like a telescope checking the same patch of sky every second."]}),`
`,e.jsx(n.h3,{children:"Choosing a pattern"}),`
`,e.jsx(n.div,{className:"blog-table-wrap",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Need"}),e.jsx(n.th,{children:"Pattern"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Need",children:"User waits for result"}),e.jsx(n.td,{"data-label":"Pattern",children:"Sync REST / GraphQL"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Need",children:"Fire-and-forget side effects"}),e.jsx(n.td,{"data-label":"Pattern",children:"Async events / queues"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Need",children:"Many subscribers, same event"}),e.jsx(n.td,{"data-label":"Pattern",children:"Pub/sub"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Need",children:"Audit + replay"}),e.jsx(n.td,{"data-label":"Pattern",children:"Event streaming"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Need",children:"Live UI updates"}),e.jsx(n.td,{"data-label":"Pattern",children:"WebSockets / SSE"})]})]})]})}),`
`,e.jsx(n.p,{children:"Mixing patterns is normal. The mistake is treating every operation like a phone call when most of the universe runs on delayed signals."}),`
`,e.jsx(n.h2,{children:"Beyond the codebase: designing for orbit, not just launch"}),`
`,e.jsxs(n.p,{children:["Building software is not only writing code - it is building a ",e.jsx(n.strong,{children:"platform that survives growth"}),"."]}),`
`,e.jsx(n.p,{children:"Production-ready systems are designed from the start for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scalability"})," - horizontal where possible, stateless services behind a load balancer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintainability"})," - clear module boundaries, documented APIs, monorepo conventions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Observability"})," - metrics, traces, and logs that tell you ",e.jsx(n.em,{children:"which"})," planet is on fire"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Security"})," - identity, secrets, and validation as architecture, not tickets"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automation"})," - if a human must click it every release, it will eventually fail at 2 a.m."]}),`
`]}),`
`,e.jsxs(n.p,{children:["These are not features you bolt on later. They are ",e.jsx(n.strong,{children:"orbital mechanics"})," - ignore them and everything eventually crashes back to Earth."]}),`
`,e.jsx(n.h2,{children:"Infrastructure as code: star charts, not console archaeology"}),`
`,e.jsx(n.p,{children:"Cloud infrastructure should never be configured manually. Click-ops does not survive team growth or holiday handovers."}),`
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.strong,{children:"Bicep"})," for Azure or ",e.jsx(n.strong,{children:"Terraform"})," for multi-cloud deployments makes the entire environment ",e.jsx(n.strong,{children:"version-controlled, repeatable, and identical"})," across development, staging, and production."]}),`
`,e.jsx(n.p,{children:"Everything becomes code:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Networking and ingress"}),`
`,e.jsx(n.li,{children:"Databases and connection strings"}),`
`,e.jsx(n.li,{children:"Object storage and CDN"}),`
`,e.jsx(n.li,{children:"Secrets and key vaults"}),`
`,e.jsx(n.li,{children:"Monitoring and alerts"}),`
`,e.jsx(n.li,{children:"Compute - App Service, Container Apps, AKS, ECS, or EKS"}),`
`]}),`
`,e.jsxs(n.p,{children:["Reproducible infrastructure reduces deployment risk and makes disaster recovery a ",e.jsx(n.strong,{children:"re-run the chart"})," problem instead of a memory test."]}),`
`,e.jsx(n.h2,{children:"CI/CD: the launch sequence"}),`
`,e.jsx(n.p,{children:"Every commit should move the application closer to production - not further away."}),`
`,e.jsx(n.p,{children:"A modern pipeline for this stack should automatically:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Install dependencies (monorepo-aware caching)"}),`
`,e.jsx(n.li,{children:"Lint and typecheck all affected packages"}),`
`,e.jsx(n.li,{children:"Run unit and integration tests"}),`
`,e.jsx(n.li,{children:"Perform security and dependency scans"}),`
`,e.jsxs(n.li,{children:["Build ",e.jsx(n.strong,{children:"web"}),", ",e.jsx(n.strong,{children:"API container"}),", and ",e.jsx(n.strong,{children:"mobile"})," artifacts"]}),`
`,e.jsx(n.li,{children:"Deploy to staging"}),`
`,e.jsx(n.li,{children:"Promote to production behind approval gates"}),`
`]}),`
`,e.jsxs(n.p,{children:["For Expo mobile builds, ",e.jsx(n.strong,{children:"EAS Build"})," integrates cleanly into the same philosophy: tagged releases, signed artifacts, store submission tracks - not ad-hoc builds from someone's laptop."]}),`
`,e.jsxs(n.p,{children:["Automation is not about removing humans. It is about making launch day ",e.jsx(n.strong,{children:"boring"}),", so engineers save judgment for architecture - not copying environment variables."]}),`
`,e.jsx(n.h2,{children:"Pre-flight checks: testing strategy"}),`
`,e.jsx(n.p,{children:"Reliable software is built through continuous verification."}),`
`,e.jsx(n.p,{children:"A balanced strategy for this architecture:"}),`
`,e.jsx(n.div,{className:"blog-table-wrap",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Layer"}),e.jsx(n.th,{children:"What it protects"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Unit tests"})}),e.jsx(n.td,{"data-label":"What it protects",children:"Domain logic, utilities, shared packages"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Integration tests"})}),e.jsx(n.td,{"data-label":"What it protects",children:"NestJS modules + Prisma against a real test database"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"API contract tests"})}),e.jsx(n.td,{"data-label":"What it protects",children:"Mobile/web clients and backend stay aligned"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"End-to-end tests"})}),e.jsx(n.td,{"data-label":"What it protects",children:"Critical journeys on web; Detox or Maestro on mobile where ROI is clear"})]})]})]})}),`
`,e.jsxs(n.p,{children:["The goal is not a vanity coverage percentage. It is ",e.jsx(n.strong,{children:"confidence that a change on one world does not silently break the others"}),"."]}),`
`,e.jsx(n.h2,{children:"Airlocks and shields: security by design"}),`
`,e.jsx(n.p,{children:"Security belongs in the development lifecycle, not a panic sprint before audit season."}),`
`,e.jsx(n.p,{children:"Key considerations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JWT and OAuth"})," - identity that works across web and mobile clients"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RBAC"})," - role-based access enforced in NestJS guards, not only in UI"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secret management"})," - Azure Key Vault, AWS Secrets Manager - never committed configs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input validation"})," - class-validator DTOs at the API boundary"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Encryption"})," - in transit (TLS everywhere) and at rest (managed DB encryption)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dependency scanning"})," - CI blocks known-vulnerable packages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Audit logging"})," - especially when events cross service boundaries"]}),`
`]}),`
`,e.jsx(n.p,{children:"Building securely from day one is cheaper than retrofitting airlocks after the habitat is already pressurised."}),`
`,e.jsx(n.h2,{children:"Cloud-native deployment: choosing an orbital station"}),`
`,e.jsxs(n.p,{children:["Whether deploying to ",e.jsx(n.strong,{children:"Microsoft Azure"})," or ",e.jsx(n.strong,{children:"Amazon Web Services"}),", the architecture should stay ",e.jsx(n.strong,{children:"cloud-agnostic where practical"}),"."]}),`
`,e.jsx(n.p,{children:"Typical landing zones:"}),`
`,e.jsx(n.div,{className:"blog-table-wrap",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Concern"}),e.jsx(n.th,{children:"Azure"}),e.jsx(n.th,{children:"AWS"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Concern",children:"API hosting"}),e.jsx(n.td,{"data-label":"Azure",children:"App Service, Container Apps, AKS"}),e.jsx(n.td,{"data-label":"AWS",children:"ECS, EKS, App Runner"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Concern",children:"Database"}),e.jsx(n.td,{"data-label":"Azure",children:"Azure Database for PostgreSQL"}),e.jsx(n.td,{"data-label":"AWS",children:"RDS PostgreSQL"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Concern",children:"Events"}),e.jsx(n.td,{"data-label":"Azure",children:"Service Bus, Event Grid"}),e.jsx(n.td,{"data-label":"AWS",children:"SQS, SNS, EventBridge"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Concern",children:"Secrets"}),e.jsx(n.td,{"data-label":"Azure",children:"Key Vault"}),e.jsx(n.td,{"data-label":"AWS",children:"Secrets Manager"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Concern",children:"Observability"}),e.jsx(n.td,{"data-label":"Azure",children:"Application Insights"}),e.jsx(n.td,{"data-label":"AWS",children:"CloudWatch, X-Ray"})]})]})]})}),`
`,e.jsx(n.p,{children:"Containers, managed databases, object storage, autoscaling, and health probes give you a foundation that grows with demand. The cloud should enable scale - not trap you in a gravity well of proprietary APIs you cannot escape."}),`
`,e.jsx(n.h2,{children:"Flight logs: Git strategy that scales with the crew"}),`
`,e.jsx(n.p,{children:"Successful teams run on predictable workflows."}),`
`,e.jsxs(n.p,{children:["A clear branching model - ",e.jsx(n.strong,{children:"GitHub Flow"}),", ",e.jsx(n.strong,{children:"Git Flow"}),", or ",e.jsx(n.strong,{children:"trunk-based development"})," - combined with pull requests, code reviews, semantic versioning, and protected branches keeps quality stable as the team grows."]}),`
`,e.jsx(n.p,{children:"In a monorepo, branch rules matter more:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Require CI green before merge"}),`
`,e.jsxs(n.li,{children:["Tag releases that map to deployable artifacts (",e.jsx(n.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"api@v2.4.0"})})})}),", ",e.jsx(n.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"mobile@v2.4.0"})})})}),")"]}),`
`,e.jsx(n.li,{children:"Document which packages a PR affects - Nx and Turborepo help here"}),`
`]}),`
`,e.jsx(n.p,{children:"Good engineering practice is as important as good code. Orbit is maintained by discipline, not hope."}),`
`,e.jsx(n.h2,{children:"New instruments aboard: designing for AI"}),`
`,e.jsx(n.p,{children:"AI is rapidly becoming another capability of modern platforms - not a separate product bolted on sideways."}),`
`,e.jsx(n.p,{children:"I treat AI as an extension of the same modular API surface:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Intelligent assistants"}),`
`,e.jsx(n.li,{children:"Natural language search"}),`
`,e.jsx(n.li,{children:"Document summarisation"}),`
`,e.jsx(n.li,{children:"Workflow automation"}),`
`,e.jsx(n.li,{children:"Recommendation engines"}),`
`,e.jsx(n.li,{children:"Predictive insights"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Event-driven architecture helps here too."})," A document upload can emit ",e.jsx(n.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"DocumentIngested"})})})}),"; a worker embeds chunks; a search service indexes; the API returns results - without the upload request waiting for the entire pipeline."]}),`
`,e.jsxs(n.p,{children:["Design narrow, versioned APIs and stable event schemas today, and swapping model providers tomorrow becomes a ",e.jsx(n.strong,{children:"module change"})," - not a rewrite."]}),`
`,e.jsx(n.h2,{children:"Mission manifest: the full blueprint"}),`
`,e.jsx(n.div,{className:"blog-table-wrap",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Layer"}),e.jsx(n.th,{children:"Choices"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Frontend"})}),e.jsx(n.td,{"data-label":"Choices",children:"React Native, Expo, React Native Web, TypeScript"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Repository"})}),e.jsx(n.td,{"data-label":"Choices",children:"Monorepo (Turborepo / Nx), shared packages"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Backend"})}),e.jsx(n.td,{"data-label":"Choices",children:"NestJS (this blueprint) - Python/FastAPI worth a dedicated post for ML/data-heavy cases"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Data"})}),e.jsx(n.td,{"data-label":"Choices",children:"PostgreSQL, Prisma"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Communication"})}),e.jsx(n.td,{"data-label":"Choices",children:"REST/GraphQL (sync), queues & events (async), WebSockets (real-time)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Cloud"})}),e.jsx(n.td,{"data-label":"Choices",children:"Azure or AWS - portable containers and managed Postgres"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Infrastructure"})}),e.jsx(n.td,{"data-label":"Choices",children:"Bicep or Terraform"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Automation"})}),e.jsx(n.td,{"data-label":"Choices",children:"CI/CD for web, API, and mobile"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Quality"})}),e.jsx(n.td,{"data-label":"Choices",children:"Unit, integration, contract, and targeted E2E tests"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Security"})}),e.jsx(n.td,{"data-label":"Choices",children:"OAuth, RBAC, vault secrets, validation, audit logs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Operations"})}),e.jsx(n.td,{"data-label":"Choices",children:"Metrics, tracing, structured logging"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{"data-label":"Layer",children:e.jsx(n.strong,{children:"Future"})}),e.jsx(n.td,{"data-label":"Choices",children:"AI-ready APIs and event pipelines"})]})]})]})}),`
`,e.jsx(n.h2,{children:"The bigger picture"}),`
`,e.jsx(n.p,{children:"The stack is only part of the equation."}),`
`,e.jsxs(n.p,{children:["What matters is an architecture that is ",e.jsx(n.strong,{children:"easy to understand, deploy, scale, and maintain"})," - whether you are serving one planet or three."]}),`
`,e.jsxs(n.p,{children:["Build once where it makes sense. ",e.jsx(n.strong,{children:"Boundaries"})," where growth requires them. ",e.jsx(n.strong,{children:"Events"})," where synchronous calls would lie about reliability. Automate everything you can. Design for change."]}),`
`,e.jsx(n.p,{children:"Technology will keep evolving. Strong engineering principles - like orbital mechanics - endure."}),`
`,e.jsxs(n.p,{children:["The result is more than an application. It is a ",e.jsx(n.strong,{children:"platform"})," that can evolve with your users, your team, and whatever worlds you add next."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"One codebase. Three surfaces. A backend built for modular growth. That is the trajectory I aim for - not because it is fashionable, but because it keeps teams shipping when the product leaves the atmosphere."})})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{i as default,a as frontmatter};
