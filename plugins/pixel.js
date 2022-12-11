export default ({ app },inject) => {
    
    /*
     ** Initialize Facebook Pixel Script
     */
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    
    // Inject $fbq(...) in Vue context 
    inject('fbq', fbq);

    if (process.env.NODE_ENV == "development") return;

    fbq("init", "746637190095687");
   
    app.router.afterEach((to, from) => {
      /*
       ** Fire a page view on each route change
       */
       console.log("fire pageview");
       fbq("track", "PageView");
    });
  };