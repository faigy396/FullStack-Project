using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingDetailsController : ControllerBase
    {
        IShoppingDetailsBL isdb;
        public ShoppingDetailsController(IShoppingDetailsBL isdb)
        {
            this.isdb = isdb;
        }
        [HttpPut("add/{buyId}")]
        public bool Add(int buyId, List<ShoppingCartDTO> cart)
        {
            return isdb.Add(buyId, cart);
        }
        [HttpGet("get")]
        public List<ShoppingDetailsDTO> GetAll()
        {
            return isdb.GetAll();
        }
    }
}
