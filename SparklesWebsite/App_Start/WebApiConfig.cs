//------------------------------------------------------------------------------------------------- 
// <copyright file="HomeController.cs" company="Pizzicato Peeps">
// Copyright (c) Pizzicato Peeps. All rights reserved.
// </copyright>
//-------------------------------------------------------------------------------------------------

namespace SparklesWebsite
{
    using System.Web.Http;
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{email}",
                defaults: new { email = RouteParameter.Optional }
            );
        }
    }
}
