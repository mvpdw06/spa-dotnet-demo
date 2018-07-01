using System.Web.Mvc;
using System.Web.Routing;

namespace spa_dotnet_demo
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default",
                "{*catchall}",
                new { controller = "Index", action = "Index" }
            );
        }
    }
}
