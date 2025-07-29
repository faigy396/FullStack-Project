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

namespace BL.classes
{
    public class ShoppingDetailsBL : IShoppingDetailsBL
    {
        IMapper iMapper;
        IShoppingDetailsDAL sdd;
        public ShoppingDetailsBL(IShoppingDetailsDAL sdd)
        {
            this.sdd = sdd;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }
        public bool Add(int id, List<ShoppingCartDTO> cart)
        {
            try
            {
                for (int i = 0; i < cart.Count; i++)
                {
                    ShoppingDetailsDTO s = new();
                    s.ShoppingId = id;
                    s.Game = cart[i].GameId;
                    s.Qty = cart[i].Amount;
                    ShoppingDetail s1 = iMapper.Map<ShoppingDetailsDTO, ShoppingDetail>(s);
                    sdd.Add(s1);
                }
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<ShoppingDetailsDTO> GetAll()
        {
            return iMapper.Map<List<ShoppingDetail>, List<ShoppingDetailsDTO>>(sdd.GetAll());
        }
    }

}
