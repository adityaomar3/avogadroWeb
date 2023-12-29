function getOS() {
  var OS = "windows"; //Default

  //Windows
  if (navigator.appVersion.indexOf("Win") != -1) {
    os = "windows"
  }

  //MacOS, MacOS X, macOS
  if (navigator.appVersion.indexOf("Mac") != -1) {
    if (navigator.platform.indexOf("MacPPC") != -1 || navigator.platform.indexOf("PowerPC") != -1) {
      os = "macos-intel";
    } else if (navigator.userAgent.indexOf("OS X 10.5") != -1 ||
      navigator.userAgent.indexOf("OS X 10.6") != -1) {
      os = "macos-intel";
    } else {
      os = "macos";
      try {
        let glcontext = document.createElement("canvas").getContext("webgl");
        let debugrenderer = glcontext ? glcontext.getExtension('WEBGL_debug_renderer_info') : null;
        let renderername = debugrenderer && glcontext.getParameter(debugrenderer.UNMASKED_RENDERER_WEBGL) || "";
        if (renderername.match(/Apple M/) || renderername.match(/Apple GPU/)) {
          os = "macos-apple-silicon";
        }
      } catch (e) {}
    }
  }
  if (navigator.platform.indexOf("Linux") != -1) {
    os = "linux"
  }
//freeBSD
  if (navigator.platform.indexOf("freebsd") != -1) os = "freebsd";

  return os;
}
