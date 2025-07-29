using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        IGameBL igb;
        public GameController(IGameBL igb)
        {
            this.igb = igb;
        }
        [HttpGet("getall")]
        public List<GameDTO> GetAll()
        {
            return igb.GetAll();
        }
        [HttpGet("getbyid/{id}")]
        public GameDTO GetById(int id)
        {
            return igb.GetById(id);
        }
        [HttpGet("getbycategory/{category}")]
        public List<GameDTO> GetByCategory(string category)
        {
            return igb.GetByCategory(category);
        }
        [HttpPut("add")]
        public bool Add(GameDTO game)
        {
            return igb.Add(game);
        }
        [HttpPost("upd/{id}")]
        public bool Update(GameDTO game, int id)
        {
            return igb.Update(game, id);
        }
        [HttpDelete("del/{id}")]
        public bool Delete(int id)
        {
            return igb.Delete(id);
        }
    }
}
