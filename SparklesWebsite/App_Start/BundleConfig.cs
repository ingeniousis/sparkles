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
                      "~/Scripts/lib/jquery-{version}.js",
                      "~/Scripts/lib/bootstrap.js",
                      "~/Scripts/lib/angular.js",
                      "~/Scripts/lib/classie.js",
                      "~/Scripts/lib/jquery.easing.{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/app-scripts").Include(
                      "~/Scripts/app/starter.js"));

            bundles.Add(new StyleBundle("~/Content/lib-css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Content/app-css").Include(
                      "~/Content/site.css",
                      "~/Content/icomoon.css"));
        }
    }
}
