using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IGameBL
    {
        public List<GameDTO> GetAll();
        public GameDTO GetById(int id);
        public bool Add(GameDTO game);
        public bool Update(GameDTO game, int id);
        public bool Delete(int id);
        public List<GameDTO> GetByCategory(string category);
    }
}
