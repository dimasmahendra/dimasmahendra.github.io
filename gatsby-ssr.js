import React from "react"

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
      <script
          key="jquery"
      src="/js/jquery.min.js"
      type="text/javascript"
      aysnc="true"
      />,
      <script
          key="jquery-migrate"
      src="/js/jquery-migrate-3.0.1.min.js"
      type="text/javascript"
      aysnc="true"
      />,
      <script
          key="jquery-easing"
      src="/js/jquery.easing.1.3.js"
      type="text/javascript"
      aysnc="true"
      />,
      <script
          key="jquery-magnific"
      src="/js/jquery.magnific-popup.min.js"
      type="text/javascript"
      aysnc="true"
      />,
])
  setPostBodyComponents([
  ])
}