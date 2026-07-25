import{j as e}from"./index-B5Cws2t1.js";const a={title:"Express or NestJS? When Your Node API Outgrows Itself",date:"Jun-21-2026",description:"Node.js gives you the runtime — not the architecture. A practitioner's guide to when Express still wins, when NestJS earns its structure, and how to choose without framework tribalism.",coverLabel:"NodeJS",coverImage:"/images/blog/nodejs-cover.png",sortOrder:3};function r(n){const s={a:"a",code:"code",div:"div",figure:"figure",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{children:"One runtime, many ways to ship an API"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Node.js"})," brought JavaScript to servers and CLIs by pairing the V8 engine with a non-blocking I/O model. That made it practical to handle many concurrent HTTP connections on modest hardware — a good fit for JSON APIs, BFF layers, webhooks, and real-time services."]}),`
`,e.jsxs(s.p,{children:["What Node.js does ",e.jsx(s.strong,{children:"not"})," give you out of the box is a full application skeleton. You get modules, ",e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"http"})})})}),", and the npm ecosystem. Everything else — routing, validation, auth, ORM wiring, OpenAPI docs — comes from ",e.jsx(s.strong,{children:"libraries and frameworks built on top"}),". Two names you will hear constantly are ",e.jsx(s.strong,{children:"Express"})," (minimal, flexible) and ",e.jsx(s.strong,{children:"NestJS"})," (structured, opinionated). Both are valid; they optimise for different team sizes and constraints."]}),`
`,e.jsx(s.p,{children:`This article is the author's perspective, grounded in official documentation. It is not a tutorial and not a verdict on which tool "wins."`}),`
`,e.jsx(s.h2,{children:"The Node.js layer in brief"}),`
`,e.jsxs(s.p,{children:["Per the ",e.jsx(s.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js project"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["JavaScript runs on the server via ",e.jsx(s.strong,{children:"V8"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"libuv"})," powers the event loop and async I/O."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"npm"})," distributes packages — the largest ecosystem of reusable server and tooling libraries."]}),`
`]}),`
`,e.jsx(s.p,{children:"Node.js suits I/O-heavy workloads: HTTP APIs, streaming, queues, SSR hosts, and glue between services. CPU-bound tasks still belong in workers, native addons, or separate services — a constraint of any single-threaded event-loop runtime, not a reason to avoid Node for typical API work."}),`
`,e.jsx(s.h2,{children:"Libraries and frameworks on top of Node"}),`
`,e.jsx(s.p,{children:"The ecosystem spans a spectrum from micro-frameworks to full platforms:"}),`
`,e.jsx(s.div,{className:"blog-table-wrap",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Layer"}),e.jsx(s.th,{children:"Examples"}),e.jsx(s.th,{children:"Typical role"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Layer",children:"HTTP micro-frameworks"}),e.jsx(s.td,{"data-label":"Examples",children:"Express, Koa, Fastify, Hono"}),e.jsx(s.td,{"data-label":"Typical role",children:"Routing, middleware, thin REST/GraphQL gateways"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Layer",children:"Structured frameworks"}),e.jsx(s.td,{"data-label":"Examples",children:"NestJS, AdonisJS"}),e.jsx(s.td,{"data-label":"Typical role",children:"Modules, DI, conventions for larger teams"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Layer",children:"Runtime adapters"}),e.jsxs(s.td,{"data-label":"Examples",children:[e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"@nestjs/platform-express"})})})}),", Fastify plugins"]}),e.jsx(s.td,{"data-label":"Typical role",children:"Swap HTTP engines without rewriting all business logic"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Layer",children:"Data & auth"}),e.jsx(s.td,{"data-label":"Examples",children:"Prisma, TypeORM, Passport, Zod"}),e.jsx(s.td,{"data-label":"Typical role",children:"Persistence, validation, authentication"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Layer",children:"Tooling"}),e.jsx(s.td,{"data-label":"Examples",children:"ts-node, Vitest, pino"}),e.jsx(s.td,{"data-label":"Typical role",children:"Dev workflow, tests, logging"})]})]})]})}),`
`,e.jsxs(s.p,{children:["No single package replaces judgment about boundaries, error handling, and deployment. The art is picking ",e.jsx(s.strong,{children:"how much structure you want on day one"}),"."]}),`
`,e.jsx(s.h2,{children:"Express: still the lightweight default for REST"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Express"})," is a small, unopinionated routing and middleware layer. It does not prescribe folder layout, DI, or ORM choice. You wire what you need:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{tabIndex:"0","data-language":"js","data-theme":"github-dark",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-dark",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#F97583"},children:"import"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:" express "}),e.jsx(s.span,{style:{color:"#F97583"},children:"from"}),e.jsx(s.span,{style:{color:"#9ECBFF"},children:' "express"'})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#F97583"},children:"const"}),e.jsx(s.span,{style:{color:"#79B8FF"},children:" app"}),e.jsx(s.span,{style:{color:"#F97583"},children:" ="}),e.jsx(s.span,{style:{color:"#B392F0"},children:" express"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"()"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E1E4E8"},children:"app."}),e.jsx(s.span,{style:{color:"#B392F0"},children:"use"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"(express."}),e.jsx(s.span,{style:{color:"#B392F0"},children:"json"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"())"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E1E4E8"},children:"app."}),e.jsx(s.span,{style:{color:"#B392F0"},children:"get"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"("}),e.jsx(s.span,{style:{color:"#9ECBFF"},children:'"/health"'}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:", ("}),e.jsx(s.span,{style:{color:"#FFAB70"},children:"_req"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:", "}),e.jsx(s.span,{style:{color:"#FFAB70"},children:"res"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:") "}),e.jsx(s.span,{style:{color:"#F97583"},children:"=>"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E1E4E8"},children:"  res."}),e.jsx(s.span,{style:{color:"#B392F0"},children:"json"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"({ status: "}),e.jsx(s.span,{style:{color:"#9ECBFF"},children:'"ok"'}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:" })"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#E1E4E8"},children:"})"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E1E4E8"},children:"app."}),e.jsx(s.span,{style:{color:"#B392F0"},children:"listen"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"("}),e.jsx(s.span,{style:{color:"#79B8FF"},children:"3000"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:")"})]})]})})}),`
`,e.jsxs(s.p,{children:["That simplicity is why Express remains ",e.jsx(s.strong,{children:"one of the most widely used"})," HTTP frameworks in the Node ecosystem — especially for microservices, prototypes, serverless handlers, and teams that prefer explicit, flat code."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Strengths often cited in production:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Tiny surface area; easy to read in code review"}),`
`,e.jsx(s.li,{children:"Huge middleware catalogue (CORS, compression, rate limits)"}),`
`,e.jsx(s.li,{children:"Works cleanly behind reverse proxies, containers, and functions"}),`
`,e.jsx(s.li,{children:"Familiar to most JavaScript backend developers"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Trade-offs to plan for:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Project structure is yours to enforce — consistency drifts without discipline"}),`
`,e.jsx(s.li,{children:"Cross-cutting concerns (validation, auth, logging) are composed manually"}),`
`,e.jsx(s.li,{children:"TypeScript helps, but types are not first-class in Express itself"}),`
`]}),`
`,e.jsxs(s.p,{children:['Express is not "legacy." It is ',e.jsx(s.strong,{children:"intentionally minimal"}),". Many larger systems still expose Express (or Fastify) at the edge while delegating domain logic to plain modules or internal packages."]}),`
`,e.jsx(s.h2,{children:"NestJS: structure when APIs grow teeth"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://nestjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NestJS"})," is a ",e.jsx(s.strong,{children:"progressive"})," framework for Node.js server applications. It adds conventions familiar from enterprise backends: ",e.jsx(s.strong,{children:"modules"}),", ",e.jsx(s.strong,{children:"controllers"}),", ",e.jsx(s.strong,{children:"providers"}),", ",e.jsx(s.strong,{children:"guards"}),", ",e.jsx(s.strong,{children:"pipes"}),", and ",e.jsx(s.strong,{children:"interceptors"})," — with first-class ",e.jsx(s.strong,{children:"TypeScript"})," support."]}),`
`,e.jsxs(s.p,{children:["By default, Nest sits on ",e.jsx(s.strong,{children:"Express"}),"; you can switch the HTTP adapter to ",e.jsx(s.strong,{children:"Fastify"})," if you need lower overhead and still keep Nest's module graph (",e.jsx(s.a,{href:"https://docs.nestjs.com/",target:"_blank",rel:"noopener noreferrer",children:"documented adapter pattern"}),")."]}),`
`,e.jsx(s.p,{children:"A minimal controller looks like this:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{tabIndex:"0","data-language":"ts","data-theme":"github-dark",children:e.jsxs(s.code,{"data-language":"ts","data-theme":"github-dark",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#F97583"},children:"import"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:" { Controller, Get } "}),e.jsx(s.span,{style:{color:"#F97583"},children:"from"}),e.jsx(s.span,{style:{color:"#9ECBFF"},children:' "@nestjs/common"'})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E1E4E8"},children:"@"}),e.jsx(s.span,{style:{color:"#B392F0"},children:"Controller"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"("}),e.jsx(s.span,{style:{color:"#9ECBFF"},children:'"users"'}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:")"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#F97583"},children:"export"}),e.jsx(s.span,{style:{color:"#F97583"},children:" class"}),e.jsx(s.span,{style:{color:"#B392F0"},children:" UsersController"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E1E4E8"},children:"  @"}),e.jsx(s.span,{style:{color:"#B392F0"},children:"Get"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"()"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#B392F0"},children:"  findAll"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:"() {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#F97583"},children:"    return"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:" [{ id: "}),e.jsx(s.span,{style:{color:"#79B8FF"},children:"1"}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:", name: "}),e.jsx(s.span,{style:{color:"#9ECBFF"},children:'"Ada"'}),e.jsx(s.span,{style:{color:"#E1E4E8"},children:" }]"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#E1E4E8"},children:"  }"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#E1E4E8"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:"Bootstrap and module wiring live elsewhere — deliberately, so teams can scale file organisation as features accumulate."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Why teams reach for NestJS on API projects:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Predictable layout"})," — feature modules map cleanly to bounded contexts"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dependency injection"})," — swap implementations in tests without rewiring imports"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Built-in patterns"})," for validation (",e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"class-validator"})})})}),"), config, scheduling, and GraphQL"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"OpenAPI"})," integration via ",e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"@nestjs/swagger"})})})})," for documented REST contracts"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Gradual adoption"})," — Nest can wrap existing Express apps per official migration guides"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Trade-offs:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"More boilerplate for a three-route service"}),`
`,e.jsx(s.li,{children:"Learning curve for decorators, modules, and Nest-specific lifecycle"}),`
`,e.jsx(s.li,{children:"Heavier than raw Express if you only need a single webhook endpoint"}),`
`]}),`
`,e.jsxs(s.p,{children:["NestJS does not replace Express under the hood in the default setup — it ",e.jsx(s.strong,{children:"orchestrates"})," it (or Fastify). Thinking of them as rivals misses the point: one is a thin HTTP layer; the other is an application architecture."]}),`
`,e.jsx(s.div,{className:"blog-table-wrap",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Concern"}),e.jsx(s.th,{children:"Express (typical)"}),e.jsx(s.th,{children:"NestJS (typical)"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Concern",children:"Learning curve"}),e.jsx(s.td,{"data-label":"Express (typical)",children:"Low — routes and middleware"}),e.jsx(s.td,{"data-label":"NestJS (typical)",children:"Moderate — modules, DI, decorators"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Concern",children:"Project structure"}),e.jsx(s.td,{"data-label":"Express (typical)",children:"Team-defined"}),e.jsx(s.td,{"data-label":"NestJS (typical)",children:"Convention-driven"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Concern",children:"TypeScript"}),e.jsx(s.td,{"data-label":"Express (typical)",children:"Added via tooling"}),e.jsx(s.td,{"data-label":"NestJS (typical)",children:"First-class"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Concern",children:"REST microservice"}),e.jsx(s.td,{"data-label":"Express (typical)",children:"Excellent fit"}),e.jsx(s.td,{"data-label":"NestJS (typical)",children:"Works; may feel heavy"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Concern",children:"Large modular API"}),e.jsx(s.td,{"data-label":"Express (typical)",children:"Needs discipline"}),e.jsx(s.td,{"data-label":"NestJS (typical)",children:"Strong fit"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{"data-label":"Concern",children:"HTTP engine"}),e.jsx(s.td,{"data-label":"Express (typical)",children:"Is the engine"}),e.jsx(s.td,{"data-label":"NestJS (typical)",children:"Express or Fastify adapter"})]})]})]})}),`
`,e.jsx(s.h2,{children:"How approachable is NestJS for REST, really?"}),`
`,e.jsxs(s.p,{children:["Official docs walk through scaffolding with the Nest CLI (",e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"nest new"})})})}),"), generating resources (",e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"nest g resource"})})})}),"), and wiring validation pipes — which means a CRUD REST API with DTOs and basic validation can be standing in ",e.jsx(s.strong,{children:"minutes"}),", not days."]}),`
`,e.jsx(s.p,{children:"What Nest automates well:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Route registration and HTTP method binding"}),`
`,e.jsx(s.li,{children:"Request/response typing with DTOs and validation pipes"}),`
`,e.jsx(s.li,{children:"Exception filters for consistent error JSON"}),`
`,e.jsx(s.li,{children:"Module boundaries for teams owning separate domains"}),`
`]}),`
`,e.jsx(s.p,{children:"What you still own:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Database schema design and migrations"}),`
`,e.jsx(s.li,{children:"Authentication threat models and secret management"}),`
`,e.jsx(s.li,{children:"Idempotency, pagination contracts, and versioning policy"}),`
`,e.jsx(s.li,{children:"Observability (structured logs, traces, metrics)"}),`
`]}),`
`,e.jsxs(s.p,{children:["So NestJS makes the ",e.jsx(s.strong,{children:"HTTP and module ceremony"})," easier; it does not remove backend engineering judgment. That is a feature, not a gap."]}),`
`,e.jsx(s.h2,{children:"Fastify, Koa, and friends — worth a fair mention"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Fastify"})," emphasises performance and schema-based validation. ",e.jsx(s.strong,{children:"Koa"})," reframes middleware with ",e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"async/await"})})})}),". ",e.jsx(s.strong,{children:"Hono"})," targets edge and multi-runtime deployments. They are widely used and respected — some teams pick them over Express for latency or modern middleware style."]}),`
`,e.jsx(s.p,{children:"Choosing among them is an engineering trade-off, not a moral one. Benchmarks depend on workload; team familiarity often matters more than raw requests-per-second in early product stages."}),`
`,e.jsx(s.h2,{children:"A practical way to choose"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Express (or a slim alternative) often fits when:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"You are shipping a small REST surface, BFF, or serverless function"}),`
`,e.jsx(s.li,{children:"The team wants maximum transparency in each file"}),`
`,e.jsx(s.li,{children:"You are embedding HTTP into an existing Node service"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"NestJS often fits when:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Multiple engineers will touch the same API for years"}),`
`,e.jsx(s.li,{children:"You want modules, DI, and documented OpenAPI contracts"}),`
`,e.jsx(s.li,{children:"TypeScript and test doubles for providers are already team norms"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Either way"}),", invest in:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Consistent error shapes and HTTP status semantics"}),`
`,e.jsxs(s.li,{children:["Input validation at the boundary (Zod, ",e.jsx(s.span,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.code,{"data-language":"plaintext","data-theme":"github-dark",children:e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"class-validator"})})})}),", or equivalent)"]}),`
`,e.jsx(s.li,{children:"Health and readiness endpoints"}),`
`,e.jsx(s.li,{children:"Environment-based configuration — never hard-coded secrets"}),`
`]}),`
`,e.jsx(s.h2,{children:"Closing thought"}),`
`,e.jsxs(s.p,{children:["Node.js succeeded by meeting developers where they already were — JavaScript full stack. ",e.jsx(s.strong,{children:"Express"})," kept the door open with a small toolkit millions of projects still rely on. ",e.jsx(s.strong,{children:"NestJS"})," answered the next question: how do we keep large API codebases coherent without leaving the Node ecosystem?"]}),`
`,e.jsxs(s.p,{children:["The fascinating part is not framework loyalty. It is that both approaches share the same runtime, the same npm catalogue, and often the ",e.jsx(s.strong,{children:"same HTTP engine"})," — so you can start simple and grow structured without changing languages. Pick the layer of opinion that matches your team today, and revisit when the API's complexity — not the blogosphere — tells you to."]}),`
`,e.jsx(s.h2,{children:"Official references"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Express"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://docs.nestjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NestJS documentation"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://docs.nestjs.com/first-steps",target:"_blank",rel:"noopener noreferrer",children:"NestJS — First steps"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://docs.nestjs.com/faq/http-adapter",target:"_blank",rel:"noopener noreferrer",children:"NestJS — HTTP adapter (Express / Fastify)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://fastify.dev/",target:"_blank",rel:"noopener noreferrer",children:"Fastify"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://koajs.com/",target:"_blank",rel:"noopener noreferrer",children:"Koa"})}),`
`]})]})}function l(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{l as default,a as frontmatter};
