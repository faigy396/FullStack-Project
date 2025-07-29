using AutoMapper;
using BL.services;
using DAL.Models;
using DAL.services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//IMapper imapper;
//ICategoryDAL icd;
//public CategoryBL(ICategoryDAL icd)
//{
//    this.icd = icd;
//    var config = new MapperConfiguration(cfg =>
//    {
//        cfg.AddProfile<MyProfile>();
//    });
//    imapper = config.CreateMapper();
//}

namespace BL.classes
{
    public class GameBL : IGameBL
    {
        IMapper mapper;
        IGameDAL igd;
        public GameBL(IGameDAL igd)
        {
            this.igd = igd;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            mapper=config.CreateMapper();
        }
        public bool Add(GameDTO game)
        {
            Game g = mapper.Map<GameDTO, Game>(game);
            return igd.Add(g);
        }

        public bool Delete(int id)
        {
            return igd.Delete(id);
        }

        public List<GameDTO> GetAll()
        {
            return mapper.Map<List<Game>, List<GameDTO>>(igd.GetAll());
        }

        public List<GameDTO> GetByCategory(string category)
        {
            return mapper.Map<List<Game>, List<GameDTO>>(igd.GetAll()).FindAll(o=>o.CategoryName==category);
        }

        public GameDTO GetById(int id)
        {
            return mapper.Map<List<Game>, List<GameDTO>>(igd.GetAll()).FirstOrDefault(o => o.Id == id);
        }

        public bool Update(GameDTO game, int id)
        {
            Game g = mapper.Map<GameDTO, Game>(game);
            return igd.Update(id, g);
        }
    }
}
