using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryBL icb;
        public CategoryController(ICategoryBL icb)
        {
            this.icb = icb;
        }

        [HttpGet("getall")]
        public List<CategoryDTO> GetAll()
        {
            return icb.GetAll();
        }

        [HttpGet("getbyid/{id}")]
        public CategoryDTO GetById(int id)
        {
            return icb.GetByID(id);
        }
        [HttpPut("add")]
        public bool Add(CategoryDTO item)
        {
            return icb.Add(item);
        }
        [HttpPost("upt/{id}")]
        public bool Update(CategoryDTO item, int id)
        {
            return icb.Update(item, id);
        }
        [HttpDelete("del/{id}")]
        public bool Delete(int id)
        {
            return icb.Delete(id);
        }
    }
}
