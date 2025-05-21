"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [262],
  {
    956: (e, l, a) => {
      a.d(l, { A: () => d });
      var s = a(5155),
        n = a(289),
        r = a(7129),
        t = a(748),
        i = a(7509);
      let c = r.Ik().shape({
          name: r
            .Yj()
            .min(2, "Name must be at least 2 characters")
            .required("Required"),
          email: r.Yj().email("Invalid email").required("Required"),
          role: r
            .Yj()
            .min(2, "Role must be at least 2 characters")
            .required("Required"),
          company_name: r
            .Yj()
            .min(2, "Company name must be at least 2 characters")
            .required("Required"),

          company_size: r.Yj().required("Required"),
          companys_revenue: r.Yj().required("Required"),
          project_budget: r.Yj().required("Required"),
          services_needed: r.Yj().required("Required"),
          message: r
            .Yj()
            .min(2, "Message must be at least 2 characters")
            .required("Required"),
          dialong_code: r.Yj().required("Required"),
          phone_number: r
            .Yj()
            .min(4, "Enter a valid number")
            .required("Required"),
        }),
        m = (e) => {
          let { name: l, field: a } = e;
          return (0, s.jsxs)("div", {
            className: "flex flex-row items-center gap-1",
            children: [
              (0, s.jsx)("p", {
                className: "text-md font-medium",
                children: l,
              }),
              (0, s.jsx)(n.Kw, {
                name: a,
                component: () => (0, s.jsx)(t.eXv, { size: 14, color: "red" }),
              }),
            ],
          });
        },
        o = (e) => {
          let { name: l } = e;
          return (0, s.jsx)(n.Kw, {
            name: l,
            component: "div",
            className: "text-red-500 text-xs",
          });
        },
        d = (e) => {
          let { setSuccess: l } = e;
          return (0, s.jsx)(n.l1, {
            initialValues: {
              name: "",
              email: "",
              dialong_code: "",
              phone_number: "",
              role: "",
              company_name: "",
              company_website: "",
              project_budget: "",
              services_needed: "",
              message: "",
            },
            validationSchema: c,
            onSubmit: async (e, a) => {
              let { resetForm: s } = a;
              try {
                await fetch("/api/sendFormData", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                }),
                  console.log("Form submitted successfully!"),
                  l(!0),
                  s();
              } catch (e) {
                console.error(e);
              }
            },
            children: (e) => {
              let { isSubmitting: l } = e;
              return (0, s.jsxs)(n.lV, {
                className: "w-full h-full flex flex-col pr-1 md:pr-0",
                children: [
                  (0, s.jsxs)("div", {
                    className: "w-full flex flex-col lg:flex-row gap-2 mb-4",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "w-full lg:w-1/2 flex flex-col gap-2",
                        children: [
                          (0, s.jsx)(m, {
                            name: "What is your name?",
                            field: "name",
                          }),
                          (0, s.jsx)(n.D0, {
                            type: "text",
                            name: "name",
                            placeholder: "Name",
                            className: "border",
                          }),
                          (0, s.jsx)(o, { name: "name" }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "w-full lg:w-1/2 flex flex-col gap-2",
                        children: [
                          (0, s.jsx)(m, {
                            name: "What is your email?",
                            field: "email",
                          }),
                          (0, s.jsx)(n.D0, {
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            className: "border",
                          }),
                          (0, s.jsx)(o, { name: "email" }),
                        ],
                      }),
// ── Telephone row (Country Code + Phone Number) ───────────────────────────────
(0, s.jsxs)("div", {
  className: "w-full flex flex-col lg:flex-row gap-2 mb-4",
  children: [
    // Country code dropdown (no title, tiny width)
    (0, s.jsxs)("div", {
      className: "flex flex-col gap-1",
      children: [
        (0, s.jsxs)(n.D0, {
          as: "select",
          name: "dialing_code",
          className: "border",
          style: { width: "4ch" },
          children: [
            (0, s.jsx)("option", { value: "",     children: "—" }),
            (0, s.jsx)("option", { value: "+1",    children: "+1" }),
            (0, s.jsx)("option", { value: "+7",    children: "+7" }),
            (0, s.jsx)("option", { value: "+20",   children: "+20" }),
            (0, s.jsx)("option", { value: "+27",   children: "+27" }),
            (0, s.jsx)("option", { value: "+30",   children: "+30" }),
            (0, s.jsx)("option", { value: "+31",   children: "+31" }),
            (0, s.jsx)("option", { value: "+32",   children: "+32" }),
            (0, s.jsx)("option", { value: "+33",   children: "+33" }),
            (0, s.jsx)("option", { value: "+34",   children: "+34" }),
            (0, s.jsx)("option", { value: "+36",   children: "+36" }),
            (0, s.jsx)("option", { value: "+39",   children: "+39" }),
            (0, s.jsx)("option", { value: "+40",   children: "+40" }),
            (0, s.jsx)("option", { value: "+41",   children: "+41" }),
            (0, s.jsx)("option", { value: "+43",   children: "+43" }),
            (0, s.jsx)("option", { value: "+44",   children: "+44" }),
            (0, s.jsx)("option", { value: "+45",   children: "+45" }),
            (0, s.jsx)("option", { value: "+46",   children: "+46" }),
            (0, s.jsx)("option", { value: "+47",   children: "+47" }),
            (0, s.jsx)("option", { value: "+48",   children: "+48" }),
            (0, s.jsx)("option", { value: "+49",   children: "+49" }),
            (0, s.jsx)("option", { value: "+51",   children: "+51" }),
            (0, s.jsx)("option", { value: "+52",   children: "+52" }),
            (0, s.jsx)("option", { value: "+53",   children: "+53" }),
            (0, s.jsx)("option", { value: "+54",   children: "+54" }),
            (0, s.jsx)("option", { value: "+55",   children: "+55" }),
            (0, s.jsx)("option", { value: "+56",   children: "+56" }),
            (0, s.jsx)("option", { value: "+57",   children: "+57" }),
            (0, s.jsx)("option", { value: "+58",   children: "+58" }),
            (0, s.jsx)("option", { value: "+60",   children: "+60" }),
            (0, s.jsx)("option", { value: "+61",   children: "+61" }),
            (0, s.jsx)("option", { value: "+62",   children: "+62" }),
            (0, s.jsx)("option", { value: "+63",   children: "+63" }),
            (0, s.jsx)("option", { value: "+64",   children: "+64" }),
            (0, s.jsx)("option", { value: "+65",   children: "+65" }),
            (0, s.jsx)("option", { value: "+66",   children: "+66" }),
            (0, s.jsx)("option", { value: "+81",   children: "+81" }),
            (0, s.jsx)("option", { value: "+82",   children: "+82" }),
            (0, s.jsx)("option", { value: "+84",   children: "+84" }),
            (0, s.jsx)("option", { value: "+86",   children: "+86" }),
            (0, s.jsx)("option", { value: "+90",   children: "+90" }),
            (0, s.jsx)("option", { value: "+91",   children: "+91" }),
            (0, s.jsx)("option", { value: "+92",   children: "+92" }),
            (0, s.jsx)("option", { value: "+93",   children: "+93" }),
            (0, s.jsx)("option", { value: "+94",   children: "+94" }),
            (0, s.jsx)("option", { value: "+95",   children: "+95" }),
            (0, s.jsx)("option", { value: "+98",   children: "+98" }),
            (0, s.jsx)("option", { value: "+211",  children: "+211" }),
            (0, s.jsx)("option", { value: "+212",  children: "+212" }),
            (0, s.jsx)("option", { value: "+213",  children: "+213" }),
            (0, s.jsx)("option", { value: "+216",  children: "+216" }),
            (0, s.jsx)("option", { value: "+218",  children: "+218" }),
            (0, s.jsx)("option", { value: "+220",  children: "+220" }),
            (0, s.jsx)("option", { value: "+221",  children: "+221" }),
            (0, s.jsx)("option", { value: "+222",  children: "+222" }),
            (0, s.jsx)("option", { value: "+223",  children: "+223" }),
            (0, s.jsx)("option", { value: "+224",  children: "+224" }),
            (0, s.jsx)("option", { value: "+225",  children: "+225" }),
            (0, s.jsx)("option", { value: "+226",  children: "+226" }),
            (0, s.jsx)("option", { value: "+227",  children: "+227" }),
            (0, s.jsx)("option", { value: "+228",  children: "+228" }),
            (0, s.jsx)("option", { value: "+229",  children: "+229" }),
            (0, s.jsx)("option", { value: "+230",  children: "+230" }),
            (0, s.jsx)("option", { value: "+231",  children: "+231" }),
            (0, s.jsx)("option", { value: "+232",  children: "+232" }),
            (0, s.jsx)("option", { value: "+233",  children: "+233" }),
            (0, s.jsx)("option", { value: "+234",  children: "+234" }),
            (0, s.jsx)("option", { value: "+235",  children: "+235" }),
            (0, s.jsx)("option", { value: "+236",  children: "+236" }),
            (0, s.jsx)("option", { value: "+237",  children: "+237" }),
            (0, s.jsx)("option", { value: "+238",  children: "+238" }),
            (0, s.jsx)("option", { value: "+239",  children: "+239" }),
            (0, s.jsx)("option", { value: "+240",  children: "+240" }),
            (0, s.jsx)("option", { value: "+241",  children: "+241" }),
            (0, s.jsx)("option", { value: "+242",  children: "+242" }),
            (0, s.jsx)("option", { value: "+243",  children: "+243" }),
            (0, s.jsx)("option", { value: "+244",  children: "+244" }),
            (0, s.jsx)("option", { value: "+245",  children: "+245" }),
            (0, s.jsx)("option", { value: "+246",  children: "+246" }),
            (0, s.jsx)("option", { value: "+248",  children: "+248" }),
            (0, s.jsx)("option", { value: "+249",  children: "+249" }),
            (0, s.jsx)("option", { value: "+250",  children: "+250" }),
            (0, s.jsx)("option", { value: "+251",  children: "+251" }),
            (0, s.jsx)("option", { value: "+252",  children: "+252" }),
            (0, s.jsx)("option", { value: "+253",  children: "+253" }),
            (0, s.jsx)("option", { value: "+254",  children: "+254" }),
            (0, s.jsx)("option", { value: "+255",  children: "+255" }),
            (0, s.jsx)("option", { value: "+256",  children: "+256" }),
            (0, s.jsx)("option", { value: "+257",  children: "+257" }),
            (0, s.jsx)("option", { value: "+258",  children: "+258" }),
            (0, s.jsx)("option", { value: "+260",  children: "+260" }),
            (0, s.jsx)("option", { value: "+261",  children: "+261" }),
            (0, s.jsx)("option", { value: "+262",  children: "+262" }),
            (0, s.jsx)("option", { value: "+263",  children: "+263" }),
            (0, s.jsx)("option", { value: "+264",  children: "+264" }),
            (0, s.jsx)("option", { value: "+265",  children: "+265" }),
            (0, s.jsx)("option", { value: "+266",  children: "+266" }),
            (0, s.jsx)("option", { value: "+267",  children: "+267" }),
            (0, s.jsx)("option", { value: "+268",  children: "+268" }),
            (0, s.jsx)("option", { value: "+269",  children: "+269" }),
            (0, s.jsx)("option", { value: "+290",  children: "+290" }),
            (0, s.jsx)("option", { value: "+291",  children: "+291" }),
            (0, s.jsx)("option", { value: "+297",  children: "+297" }),
            (0, s.jsx)("option", { value: "+298",  children: "+298" }),
            (0, s.jsx)("option", { value: "+299",  children: "+299" }),
          ],
        }),
        (0, s.jsx)(o, { name: "dialing_code" }), // error message
      ],
    }),

    // Phone Number field
    (0, s.jsxs)("div", {
      className: "w-full lg:w-1/2 flex flex-col gap-2",
      children: [
        (0, s.jsx)(m, {
          name: "Phone Number",
          field: "phone_number",
        }),
        (0, s.jsx)(n.D0, {
          type: "tel",
          name: "phone_number",
          placeholder: "Enter phone number",
          className: "border",
        }),
        (0, s.jsx)(o, { name: "phone_number" }),   // error message
      ],
    }),
  ],
}),
// …next field starts here…


                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full flex flex-col gap-2 mb-4",
                    children: [
                      (0, s.jsx)(m, {
                        name: "What is your role in the company?",
                        field: "role",
                      }),
                      (0, s.jsx)(n.D0, {
                        type: "text",
                        name: "role",
                        placeholder: "Enter role",
                        className: "border",
                      }),
                      (0, s.jsx)(o, { name: "role" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full flex flex-col lg:flex-row gap-2 mb-4",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "w-full lg:w-1/2 flex flex-col gap-2",
                        children: [
                          (0, s.jsx)(m, {
                            name: "Company Name",
                            field: "company_name",
                          }),
                          (0, s.jsx)(n.D0, {
                            type: "text",
                            name: "company_name",
                            placeholder: "Enter company name",
                            className: "border",
                          }),
                          (0, s.jsx)(o, { name: "company_name" }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "w-full lg:w-1/2 flex flex-col gap-2",
                        children: [
                          (0, s.jsx)(m, {
                            name: "Company Website (Optional)",
                            field: "company_website",
                          }),
                          (0, s.jsx)(n.D0, {
                            type: "url",
                            name: "company_website",
                            placeholder: "Enter company website",
                            className: "border",
                          }),
                          (0, s.jsx)(o, { name: "company_website" }),
                        ],
                      }),
                    ],
                  }),

                  (0, s.jsxs)("div", {
                    className: "w-full flex flex-col gap-2 mb-4",
                    children: [
                      (0, s.jsx)(m, {
                        name: "Project budget",
                        field: "project_budget",
                      }),
                      (0, s.jsxs)(n.D0, {
                        as: "select",
                        name: "project_budget",
                        className: "border",
                        children: [
                          (0, s.jsx)("option", {
                            value: "",
                            children: "Select budget range",
                          }),
                          (0, s.jsx)("option", {
                            value: "<10K>",
                            children: "Less than $10K",
                          }),
                          (0, s.jsx)("option", {
                            value: "10K-50K",
                            children: "$10K-$50K",
                          }),
                          (0, s.jsx)("option", {
                            value: "51K-100K",
                            children: "$50K-$100K",
                          }),
                          (0, s.jsx)("option", {
                            value: ">100K",
                            children: "More than $100K",
                          }),
                        ],
                      }),
                      (0, s.jsx)(o, { name: "project_budget" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full flex flex-col gap-2 mb-4",
                    children: [
                      (0, s.jsx)(m, {
                        name: "What services are you interested in?",
                        field: "services_needed",
                      }),
                      (0, s.jsxs)(n.D0, {
                        as: "select",
                        name: "services_needed",
                        className: "border",
                        children: [
                          (0, s.jsx)("option", {
                            value: "",
                            children: "Select service",
                          }),
                          (0, s.jsx)("option", {
                            value: "Identifying",
                            children: "App development",
                          }),
                          (0, s.jsx)("option", {
                            value: "Educating",
                            children: "Web development",
                          }),
                          (0, s.jsx)("option", {
                            value: "Custom software",
                            children: "Developing custom software solutions",
                          }),
                        ],
                      }),
                      (0, s.jsx)(o, { name: "services_needed" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full flex flex-col gap-2 mb-4",
                    children: [
                      (0, s.jsx)(m, { name: "Message", field: "message" }),
                      (0, s.jsx)(n.D0, {
                        as: "textarea",
                        rows: 7,
                        name: "message",
                        placeholder: "Enter message",
                        className: "border resize-none",
                      }),
                      (0, s.jsx)(o, { name: "message" }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    type: "submit",
                    disabled: l,
                    className:
                      "w-fit text-black cursor-pointer py-2 px-4 rounded-full border border-black ".concat(
                        l ? "opacity-50" : ""
                      ),
                    children: l
                      ? (0, s.jsxs)("div", {
                          className: "flex flex-row items-center gap-2",
                          children: [
                            (0, s.jsx)(i.oS8, {
                              size: 16,
                              className: "animate-spin",
                            }),
                            "Sending...",
                          ],
                        })
                      : "Send inquiry",
                  }),
                ],
              });
            },
          });
        };
    },
    8631: (e, l, a) => {
      a.d(l, { A: () => i });
      var s,
        n,
        r = a(2115);
      function t() {
        return (t = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var l = 1; l < arguments.length; l++) {
                var a = arguments[l];
                for (var s in a)
                  ({}).hasOwnProperty.call(a, s) && (e[s] = a[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      let i = function (e) {
        return r.createElement(
          "svg",
          t(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "/Logo.svg",
              viewBox: "0 0 876 301",
              width: "2.5em",
              height: "2.5em",
              preserveAspectRatio: "xMidYMid meet",
            },
            e
          ),
          s ||
            (s = r.createElement(
              "defs",
              null,
              r.createElement(
                "style",
                null,
                ".cls-1 {\n        font-family: BrasleyDemo-Medium, 'Brasley Demo';\n        font-size: 42.4px;\n        font-weight: 500;\n      }\n\n      .cls-1, .cls-2, .cls-3 {\n        isolation: isolate;\n      }\n\n      .cls-1, .cls-4 {\n        fill: #fff;\n      }\n\n      .cls-3 {\n        display: none;\n      }"
              )
            )),
          n ||
            (n = r.createElement(
              "g",
              null,
              r.createElement(
                "g",
                { id: "Layer_1" },
                r.createElement(
                  "g",
                  { id: "Layer_1-2", "data-name": "Layer_1" },
                  r.createElement(
                    "g",
                    { id: "Layer_1-2" },
                    r.createElement(
                      "g",
                      null,
                      r.createElement(
                        "g",
                        { id: "Layer_1-2-2", "data-name": "Layer_1-2" },
                        r.createElement("image", {
                          className: "cls-3",
                          width: 500,
                          height: 129,
                          transform: "translate(-9.4 -14.8) scale(.8)",
                          xlinkHref: "/Logo.svg",
                          href: "/Logo.svg",
                        }),
                        r.createElement(
                          "g",
                          null,
                          r.createElement("path", {
                            className: "cls-4 logo-shape",
                            d: "m146.5 27.6c6.8 0.2 15.9 1.3 21 2.4 4.9 1.2 12.6 3.8 17 5.9 4.4 2.1 11.4 5.9 15.5 8.6 4.2 2.6 11.9 9.2 17.5 14.9 5.6 5.5 12.3 13.5 15 17.6 2.7 4.1 7.1 12.2 9.6 18 2.6 5.8 5.8 15.2 7.3 21 1.4 5.8 3 15.2 3.7 21 0.6 5.9 0.8 14.4 0.4 19.5-0.4 4.9-1.6 13.3-2.6 18.5-1.1 5.2-3.1 12.9-4.5 17-1.4 4.1-3.8 10.2-5.4 13.5-1.6 3.3-5.1 9.4-7.8 13.5-2.7 4.1-7.3 10.2-10.2 13.5-2.9 3.3-8.5 8.9-12.4 12.4-3.9 3.5-10.7 8.5-15.1 11.2-4.4 2.7-11.6 6.3-16 8-4.4 1.7-11.2 3.8-15 4.7-4.9 1.1-12 1.6-24 1.5-14.8 0-18.2-0.4-26.5-2.5-5.2-1.4-12.9-4.1-17-6-4.1-1.9-10.9-5.7-15-8.4-4.1-2.7-11-8.3-15.4-12.4-4.4-4.1-10.6-11.1-13.9-15.5-3.2-4.4-8.1-12.5-10.7-18-2.7-5.5-6-13.4-7.4-17.5-1.3-4.1-3.2-11-4-15.3-1.1-5.4-1.6-13.2-1.6-26.5 0-14.6 0.5-20.5 1.9-27.2 1.1-4.7 3.2-11.9 4.6-16 1.5-4.1 3.9-9.8 5.2-12.5 1.4-2.8 4.8-8.8 7.6-13.5 3.4-5.8 8.3-11.8 15.1-18.6 5.6-5.6 13.5-12.3 17.6-14.9 4.1-2.7 11.1-6.5 15.5-8.6 4.4-2.1 11.8-4.8 16.5-6 4.7-1.2 11.4-2.5 15-3 3.6-0.4 11.9-0.6 18.5-0.3zm9 27.1c-1.7 0.2-7.1 1.5-12 2.8-4.9 1.3-12.8 4-17.5 6-4.7 1.9-11.7 5.4-15.5 7.7-3.8 2.3-10.2 6.7-14 9.8-3.8 3.1-10.5 9.5-14.9 14.1l-7.8 8.4c13.7 6.7 19.7 10.3 22.2 12.3 2.5 2 7.6 6.6 11.3 10.2 3.8 3.6 9.9 10.1 13.6 14.5 3.7 4.4 9.5 11.9 12.9 16.7 3.4 4.9 6.8 8.8 7.5 8.8 0.6 0 4.6-5 8.7-11.2 4.1-6.2 10-16.2 13.1-22.3 3-6 7-15.3 8.7-20.5 1.7-5.2 3.7-13.1 4.3-17.5 0.6-4.4 0.9-12.5 0.6-18-0.4-6.7-1.2-11.8-2.6-15.5-1.2-3-2.7-5.8-3.4-6.2-0.6-0.4-3.7-0.7-6.7-0.6-3 0-6.8 0.3-8.5 0.5zm62.6 62.1c-0.7 3.1-2.5 9.1-3.9 13.2-1.3 4.1-4.6 12-7.2 17.5-2.6 5.5-6.7 13.4-9.1 17.5-2.5 4.1-7.2 11.1-10.5 15.5-3.4 4.4-8.4 10.6-11.3 13.7l-5.1 5.8c7.8 5.4 10.6 7 11.3 7 0.6 0 4.4-1.6 8.2-3.4 5.8-2.8 7.9-4.5 11.9-9.7 2.7-3.5 6.6-10 8.7-14.4 2.1-4.4 4.9-11.8 6.3-16.5 1.3-4.7 2.9-13.2 3.6-19 0.7-6.1 0.9-14.7 0.5-20.5-0.3-5.5-0.9-10.6-1.3-11.2-0.4-0.7-1.3 1.3-2.1 4.5zm-160.1 34.4c0 4.6 0.5 11.3 1 15 0.6 3.8 2.4 10.5 4.2 15 1.7 4.6 5.3 11.5 7.9 15.3 2.5 3.8 6.8 8.9 9.5 11.3 2.7 2.3 5.8 4.2 6.9 4.2 1.1 0 4.7-1.6 8-3.5 3.3-1.9 7.3-4.5 9-5.8l3-2.4c-5.4-8.4-11.2-16.9-16.5-24.3-5.2-7.4-12.6-16.8-16.5-20.8-3.8-4.1-8.9-8.5-11.3-9.8-2.3-1.3-4.4-2.4-4.7-2.4-0.3 0-0.5 3.7-0.5 8.2zm70 88.1l-7.5 4.1c10.1 2.8 16.6 3.9 21 4.3 4.4 0.3 8.9 0.3 10-0.1 1.7-0.5 0.9-1.4-5.3-5.6-3.9-2.8-7.4-5.4-7.7-6-0.3-0.6-1.1-1-1.8-0.9-0.6 0-4.6 1.9-8.7 4.2z",
                          })
                        )
                      ),
                      r.createElement(
                        "g",
                        { id: "Layer_2" },
                        r.createElement(
                          "g",
                          { className: "cls-2" },
                          r.createElement(
                            "g",
                            { className: "cls-2" },
                            r.createElement(
                              "g",
                              { className: "cls-2" },
                              r.createElement(
                                "text",
                                {
                                  className: "cls-1 logo-text",
                                  transform: "translate(134.1 59.5)",
                                },
                                r.createElement(
                                  "tspan",
                                  {
                                    x: 150,
                                    y: 85,
                                    className: "logo-text-main",
                                  },
                                  "Varyon"
                                ),
                                r.createElement(
                                  "tspan",
                                  {
                                    x: 160,
                                    y: 210,
                                    className: "logo-text-sub",
                                  },
                                  "Global"
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ))
        );
      };
    },
  },
]);
