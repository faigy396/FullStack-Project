using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IGameDAL
    {
        public List<Game> GetAll();
        public bool Add(Game game);
        public bool Update(int id, Game game);
        public bool Delete(int id);
    }
}
