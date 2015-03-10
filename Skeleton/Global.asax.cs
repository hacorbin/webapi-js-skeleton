using Ninject;
using Skeleton.Controllers;
using Skeleton.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Skeleton
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            var kernel = new StandardKernel();
            kernel.Bind(typeof(IData<>)).To(typeof(Skeleton.Models.Language)).WhenInjectedInto<ValuesController>();
           
            GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);
        }
    }
}