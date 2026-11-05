# Zyhuka Soft Studio

Modern claymorphism applied to Home, Playground, Monitor, Privacy, and Terms. This is an intentional redesign of the original frontend.

Light is the default, with porcelain background #eef0f7, surfaces #f7f8fc, lavender #7254c9, and mint #2d7b65. Saved preferences remain respected. Dark mode uses slate #1f2332, surfaces #2a3043, lavender #b7a1ff and mint #a5ddc6.

Clay surfaces combine diffuse outer shadows, inset highlights and recessed controls. Corners range from 14px controls to 28px cards. Low-opacity SVG noise adds texture without external assets. Satoshi and JetBrains Mono fonts remain local.

The floating header is constrained to 1152px. The hero combines typography and an interactive example console, switching to one column below 700px. Request/response examples are clearly labelled; real API execution remains in Playground. Feature cards, FAQ, endpoints, search, responses, monitor tables, dialogs and legal pages share the same tokens.

Sponsor sections, popups, links and production image files are removed. API and WebSocket configuration remains unchanged.

Motion includes short entry fades, button lift/compression, slow decorative floating shapes, a console that straightens on focus, and two clay loading blocks. Keyboard focus stays visible. Reduced-motion preferences disable movement. Copy feedback uses a polite live region, including a manual-copy message if clipboard permission fails.

Styles live in src/clay.css; the hero lives in src/clay.js. Historical screenshots under reference/ document the previous design. DOM tests do not establish pixel accuracy, canvas rendering or animation smoothness.
