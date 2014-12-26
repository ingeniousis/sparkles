//------------------------------------------------------------------------------------------------- 
// <copyright file="HomeController.cs" company="Pizzicato Peeps">
// Copyright (c) Pizzicato Peeps. All rights reserved.
// </copyright>
//-------------------------------------------------------------------------------------------------

namespace SparklesWebsite
{
    using System.Web.Http;
    using System.Web.Mvc;
    using System.Web.Optimization;
    using System.Web.Routing;

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
