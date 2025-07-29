using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomerBL icb;
        public CustomerController(ICustomerBL icb)
        {
            this.icb = icb;
        }

        [HttpGet("get")]
        public List<CustomerDTO> Get()
        {
            return icb.GetAll();
        }

        [HttpGet("isExist/{pass}/{name}")]
        public bool IsExist(string pass, string name)
        {
            return icb.IsExist(name, pass);
        }

        [HttpPut("addcust")]
        public bool Add(CustomerDTO customer)
        {
            return icb.Add(customer);
        }


    }
}
