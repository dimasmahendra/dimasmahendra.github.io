import React from "react"

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <link type="text/css" rel="stylesheet" href="css/reset.css" />,
    <link type="text/css" rel="stylesheet" href="css/plugins.css"/>,
    <link type="text/css" rel="stylesheet" href="css/style.css" />,
    <link type="text/css" rel="stylesheet" href="css/color.css" />,
])
  setPostBodyComponents([
    <script type="text/javascript" src="js/jquery.min.js"></script>,
    <script type="text/javascript" src="js/plugins.js"></script>,
    <script type="text/javascript" src="js/scripts.js"></script>,
  ])
}