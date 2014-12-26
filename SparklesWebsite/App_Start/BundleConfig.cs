//------------------------------------------------------------------------------------------------- 
// <copyright file="HomeController.cs" company="Pizzicato Peeps">
// Copyright (c) Pizzicato Peeps. All rights reserved.
// </copyright>
//-------------------------------------------------------------------------------------------------

namespace SparklesWebsite
{
    using System.Web.Optimization;

    public class BundleConfig
    {        
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/lib-scripts").Include(                      
                      "~/Scripts/jquery-{version}.js",
                      "~/Scripts/bootstrap.js",
                      "~/scripts/angular.js",
                      "~/scripts/angular-ui-router.js"));

            bundles.Add(new StyleBundle("~/Content/lib-css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                     "~/Content/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Content/app-css").Include(
                      "~/Content/site.css"));
        }
    }
}
