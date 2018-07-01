using System.Web.Mvc;

namespace spa_dotnet_demo.Controllers
{
    public class IndexController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}