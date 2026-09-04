# HTML Email Development & Compatibility Rules

When customizing or extending HTML emails for Nathan Scales Marketing Agency, AI agents must adhere strictly to the following email client compatibility standards.

---

## 1. Required Logo URL
Every HTML email **MUST** render the official Nathan Scales logo:
```html
<img src="https://raw.githubusercontent.com/nathantendosaas-star/Nathan-Scales/refs/heads/main/public/NSM-logo.svg"
     alt="Nathan Scales Marketing"
     width="28"
     height="28"
     style="display: block; border: 0; width: 28px; height: 28px;">
```

---

## 2. Microsoft Outlook (MSO) Compatibility
Outlook on Windows uses Word's HTML rendering engine (MSO). Rules for MSO compatibility:

1. **Table Layouts:** Use HTML `<table>`, `<tr>`, `<td>` tags with explicit pixel widths. Never rely on flexbox, grid, or CSS margin auto for outer alignment.
2. **Conditional Comments:** Wrap custom buttons and background shapes in VML conditional blocks:
   ```html
   <!--[if mso]>
   <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://nathanscales.vercel.app/contact" style="height:40px;v-text-anchor:middle;width:210px;" arcsize="10%" stroke="f" fillcolor="#0f172a">
   <w:anchorlock/>
   <center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">Request Audit</center>
   </v:roundrect>
   <![endif]-->
   ```
3. **Table Spacing Reset:** Set `cellpadding="0" cellspacing="0" border="0"` on every table element, along with inline style `border-collapse: collapse !important; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;`.

---

## 3. Responsive Constraints
- Maximum email body width: `560px`.
- Center alignment container: `<center style="width: 100%; background-color: #f4f5f7; padding: 40px 0;">`.
- Media queries target screens `<= 600px` for mobile padding adjustments (`.mobile-padding`).

---

## 4. Typography & Styling Rules
- Use system web-safe font stacks:
  `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`
- All font sizes, line heights, colors, and margins MUST be declared inline on `<td>`, `<p>`, `<h1>`, `<a>` elements.
- Never use external CSS files or `<link rel="stylesheet">`.
