using DAL.Models;
using DAL.services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class GameDAL: IGameDAL
    {
        FaigySegal_Shop_2025Context DB = new FaigySegal_Shop_2025Context();

        public bool Add(Game game)
        {
            try
            {
                DB.Games.Add(game);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                Game g=DB.Games.FirstOrDefault(o=>o.Id==id);
                DB.Games.Remove(g);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Game> GetAll()
        {
            return DB.Games.Include(o=>o.Category).ToList();
        }

        public bool Update(int id, Game game)
        {
            try
            {
                DB.Games.FirstOrDefault(o=>o.Id==id).Name=game.Name;
                DB.Games.FirstOrDefault(o => o.Id == id).Price=game.Price;
                DB.Games.FirstOrDefault(o => o.Id == id).QuantityInStock=game.QuantityInStock;
                DB.Games.FirstOrDefault(o => o.Id == id).Picture=game.Picture;
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
