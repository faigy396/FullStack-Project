using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingController : ControllerBase
    {
        IShoppingBL isb;
        public ShoppingController(IShoppingBL isb)
        {
            this.isb = isb;
        }
        [HttpGet("get")]
        public List<ShoppingDTO> Get()
        {
            return isb.GetAll();
        }
        [HttpPut("add")]
        public int Add(ShoppingDTO shopping)
        {
            return isb.SaveShopping(shopping);
        }
    }
}
