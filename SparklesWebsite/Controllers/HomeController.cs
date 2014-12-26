//------------------------------------------------------------------------------------------------- 
// <copyright file="HomeController.cs" company="Pizzicato Peeps">
// Copyright (c) Pizzicato Peeps. All rights reserved.
// </copyright>
//-------------------------------------------------------------------------------------------------

namespace SparklesWebsite.Controllers
{
    using System.Web.Mvc;

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            return View();
        }
    }
}
