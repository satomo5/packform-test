import { Global, css } from "@emotion/react";

/**
+ * Global styles for the application
+ */

const GlobalStyles = () => (
  <Global
    styles={css`
      // font
      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-Italic.ttf") format("truetype");
        font-weight: 400;
        font-style: italic;
      }

      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-Medium.ttf") format("truetype");
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-MediumItalic.ttf") format("truetype");
        font-weight: 500;
        font-style: italic;
      }

      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-SemiBold.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-SemiBoldItalic.ttf") format("truetype");
        font-weight: 600;
        font-style: italic;
      }

      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "PlusJakartaSans";
        src: url("/fonts/PlusJakartaSans-BoldItalic.ttf") format("truetype");
        font-weight: 700;
        font-style: italic;
      }

      // resets
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      ol,
      ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      button {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;
        outline: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: "PlusJakartaSans", sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
