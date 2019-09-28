using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly ApiContext _ctx;
        public OrderController(ApiContext ctx)
        {
            _ctx = ctx;
        }

    }
}